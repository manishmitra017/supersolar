// Super Solar Energy — Contact Form Lambda
// Receives a POST from the frontend, sends a formatted contact email via Amazon SES.

const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');

const ses = new SESClient({ region: process.env.AWS_REGION || 'ap-southeast-2' });

const RECIPIENT_EMAIL = 'info@supersolarenergy.com.au';
const CC_EMAIL = 'manish.bvc@gmail.com';
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'noreply@supersolarenergy.com.au';

const CORS_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
};

exports.handler = async (event) => {
  // Handle CORS preflight (HTTP API v2 uses requestContext.http.method)
  const method = (event.requestContext?.http?.method || event.httpMethod || '').toUpperCase();
  if (method === 'OPTIONS') {
    return { statusCode: 200, headers: CORS_HEADERS, body: '' };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { name, email, phone, address, service_interest, message } = data;

    if (!name || !email) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: 'Name and email are required' }),
      };
    }

    const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 16px">
    <tr><td>
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08)">

        <!-- Header -->
        <tr>
          <td style="background:#E8621A;padding:28px 32px">
            <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px">New Contact Form Submission</h1>
            <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:13px">Super Solar Energy &middot; supersolarenergy.com.au</p>
          </td>
        </tr>

        <!-- Contact details -->
        <tr>
          <td style="padding:28px 32px 20px">
            <h2 style="margin:0 0 16px;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:#E8621A">Contact Details</h2>
            <table cellpadding="0" cellspacing="0" style="width:100%">
              <tr>
                <td style="padding:5px 0;color:#888;font-size:13px;width:130px">Name</td>
                <td style="padding:5px 0;font-size:13px;font-weight:600">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding:5px 0;color:#888;font-size:13px">Email</td>
                <td style="padding:5px 0;font-size:13px;font-weight:600"><a href="mailto:${escapeHtml(email)}" style="color:#E8621A">${escapeHtml(email)}</a></td>
              </tr>
              <tr>
                <td style="padding:5px 0;color:#888;font-size:13px">Phone</td>
                <td style="padding:5px 0;font-size:13px;font-weight:600">${escapeHtml(phone || 'Not provided')}</td>
              </tr>
              <tr>
                <td style="padding:5px 0;color:#888;font-size:13px">Address</td>
                <td style="padding:5px 0;font-size:13px;font-weight:600">${escapeHtml(address || 'Not provided')}</td>
              </tr>
              <tr>
                <td style="padding:5px 0;color:#888;font-size:13px">Service Interest</td>
                <td style="padding:5px 0;font-size:13px;font-weight:600">${escapeHtml(service_interest || 'Not specified')}</td>
              </tr>
              ${message ? `<tr>
                <td style="padding:5px 0;color:#888;font-size:13px;vertical-align:top">Message</td>
                <td style="padding:5px 0;font-size:13px">${escapeHtml(message)}</td>
              </tr>` : ''}
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:16px 32px;border-top:1px solid #f0f0f0">
            <p style="margin:0;font-size:11px;color:#aaa">Submitted via supersolarenergy.com.au — Reply directly to this email to respond to the customer.</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

    const textBody = [
      'NEW CONTACT FORM SUBMISSION — SUPER SOLAR ENERGY',
      '='.repeat(50),
      '',
      'CONTACT DETAILS',
      `Name:             ${name}`,
      `Email:            ${email}`,
      `Phone:            ${phone || 'Not provided'}`,
      `Address:          ${address || 'Not provided'}`,
      `Service Interest: ${service_interest || 'Not specified'}`,
      message ? `Message:          ${message}` : '',
      '',
      'Submitted via supersolarenergy.com.au',
    ]
      .filter((l) => l !== undefined)
      .join('\n');

    await ses.send(
      new SendEmailCommand({
        Source: `Super Solar Energy <${SENDER_EMAIL}>`,
        Destination: {
          ToAddresses: [RECIPIENT_EMAIL],
          CcAddresses: [CC_EMAIL],
        },
        ReplyToAddresses: [email],
        Message: {
          Subject: {
            Data: `New Contact Form Submission from ${name}`,
            Charset: 'UTF-8',
          },
          Body: {
            Html: { Data: html, Charset: 'UTF-8' },
            Text: { Data: textBody, Charset: 'UTF-8' },
          },
        },
      })
    );

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ message: 'Contact form submitted successfully' }),
    };
  } catch (error) {
    console.error('Contact Lambda error:', error);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Failed to submit contact form. Please contact us at info@supersolarenergy.com.au' }),
    };
  }
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}
