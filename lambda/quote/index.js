// Super Solar Energy — Quote Request Lambda
// Receives a POST from the frontend, sends a formatted quote email via Amazon SES.

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
  const method = (event.requestContext?.http?.method || event.httpMethod || '').toUpperCase();
  if (method === 'OPTIONS') {
    return { statusCode: 200, headers: CORS_HEADERS, body: '' };
  }

  try {
    const data = JSON.parse(event.body || '{}');
    const { name, email, phone, address, property_type, roof_type, storey_type, meter_phase, energy_usage, budget_range, message } = data;

    if (!name || !email || !phone || !address) {
      return {
        statusCode: 400,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: 'Name, email, phone, and address are required' }),
      };
    }

    const propertyDetails = [
      { label: 'Property Type', value: property_type },
      { label: 'Roof Type', value: roof_type },
      { label: 'Storey Type', value: storey_type },
      { label: 'Meter Phase', value: meter_phase },
      { label: 'Energy Usage', value: energy_usage },
      { label: 'Budget Range', value: budget_range },
    ].filter((d) => d.value);

    const propertyRows = propertyDetails
      .map(
        (d) => `<tr>
          <td style="padding:8px 12px;color:#6b7280;font-size:13px;border-bottom:1px solid #f3f4f6">${escapeHtml(d.label)}</td>
          <td style="padding:8px 12px;font-size:13px;font-weight:600;color:#1a2332;border-bottom:1px solid #f3f4f6">${escapeHtml(d.value)}</td>
        </tr>`
      )
      .join('');

    const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8f4f0;font-family:'Segoe UI',Roboto,Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f4f0;padding:40px 16px">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto">

        <!-- Sun Header Banner -->
        <tr>
          <td style="background:linear-gradient(135deg,#E8621A 0%,#F9A825 100%);padding:32px 40px;border-radius:16px 16px 0 0;text-align:center">
            <div style="font-size:40px;margin-bottom:8px">&#9728;</div>
            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:800;letter-spacing:-0.5px">New Quote Request</h1>
            <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:14px;font-weight:500">Super Solar Energy &bull; Powering Australia's Future</p>
          </td>
        </tr>

        <!-- Main Content Card -->
        <tr>
          <td style="background:#ffffff;padding:0;border-radius:0 0 16px 16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06)">

            <!-- Customer Details -->
            <table width="100%" cellpadding="0" cellspacing="0" style="padding:28px 32px 20px">
              <tr>
                <td>
                  <table cellpadding="0" cellspacing="0" style="margin-bottom:20px">
                    <tr>
                      <td style="background:#FFF5EE;border-radius:20px;padding:4px 14px">
                        <span style="font-size:12px;font-weight:700;color:#E8621A;text-transform:uppercase;letter-spacing:1px">&#9733; Customer Details</span>
                      </td>
                    </tr>
                  </table>
                  <table cellpadding="0" cellspacing="0" style="width:100%;border:1px solid #f3f4f6;border-radius:8px;overflow:hidden">
                    <tr>
                      <td style="padding:8px 12px;color:#6b7280;font-size:13px;border-bottom:1px solid #f3f4f6;width:120px">Name</td>
                      <td style="padding:8px 12px;font-size:13px;font-weight:600;color:#1a2332;border-bottom:1px solid #f3f4f6">${escapeHtml(name)}</td>
                    </tr>
                    <tr>
                      <td style="padding:8px 12px;color:#6b7280;font-size:13px;border-bottom:1px solid #f3f4f6">Email</td>
                      <td style="padding:8px 12px;font-size:13px;font-weight:600;border-bottom:1px solid #f3f4f6"><a href="mailto:${escapeHtml(email)}" style="color:#E8621A;text-decoration:none">${escapeHtml(email)}</a></td>
                    </tr>
                    <tr>
                      <td style="padding:8px 12px;color:#6b7280;font-size:13px;border-bottom:1px solid #f3f4f6">Phone</td>
                      <td style="padding:8px 12px;font-size:13px;font-weight:600;color:#1a2332;border-bottom:1px solid #f3f4f6"><a href="tel:${escapeHtml(phone)}" style="color:#1a2332;text-decoration:none">${escapeHtml(phone)}</a></td>
                    </tr>
                    <tr>
                      <td style="padding:8px 12px;color:#6b7280;font-size:13px${message ? ';border-bottom:1px solid #f3f4f6' : ''}">Address</td>
                      <td style="padding:8px 12px;font-size:13px;font-weight:600;color:#1a2332${message ? ';border-bottom:1px solid #f3f4f6' : ''}">${escapeHtml(address)}</td>
                    </tr>
                    ${message ? `<tr>
                      <td style="padding:8px 12px;color:#6b7280;font-size:13px;vertical-align:top">Message</td>
                      <td style="padding:8px 12px;font-size:13px;color:#374151">${escapeHtml(message)}</td>
                    </tr>` : ''}
                  </table>
                </td>
              </tr>
            </table>

            ${propertyDetails.length > 0 ? `
            <!-- Property Details -->
            <table width="100%" cellpadding="0" cellspacing="0" style="padding:8px 32px 28px">
              <tr>
                <td>
                  <table cellpadding="0" cellspacing="0" style="margin-bottom:20px">
                    <tr>
                      <td style="background:#FFF5EE;border-radius:20px;padding:4px 14px">
                        <span style="font-size:12px;font-weight:700;color:#E8621A;text-transform:uppercase;letter-spacing:1px">&#9751; Property Details</span>
                      </td>
                    </tr>
                  </table>
                  <table cellpadding="0" cellspacing="0" style="width:100%;border:1px solid #f3f4f6;border-radius:8px;overflow:hidden">
                    ${propertyRows}
                  </table>
                </td>
              </tr>
            </table>
            ` : ''}

            <!-- Footer -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#1a2332;padding:20px 32px;text-align:center">
                  <p style="margin:0 0 4px;font-size:12px;color:#F9A825;font-weight:600">Super Solar Energy</p>
                  <p style="margin:0 0 4px;font-size:11px;color:rgba(255,255,255,0.6)">130 Bridge Road, Richmond VIC 3121</p>
                  <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.5)">Reply to this email to respond to the customer</p>
                </td>
              </tr>
            </table>

          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

    const textBody = [
      '☀ NEW QUOTE REQUEST — SUPER SOLAR ENERGY',
      '═'.repeat(45),
      '',
      'CUSTOMER DETAILS',
      `Name:          ${name}`,
      `Email:         ${email}`,
      `Phone:         ${phone}`,
      `Address:       ${address}`,
      message ? `Message:       ${message}` : '',
      '',
      ...propertyDetails.length > 0 ? [
        'PROPERTY DETAILS',
        ...propertyDetails.map((d) => `${d.label.padEnd(15)}${d.value}`),
        '',
      ] : [],
      '—',
      'Super Solar Energy | 130 Bridge Road, Richmond VIC 3121',
      'supersolarenergy.com.au',
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
            Data: `☀ Quote Request from ${name} — ${address}`,
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
      body: JSON.stringify({ message: 'Quote request submitted successfully' }),
    };
  } catch (error) {
    console.error('Quote Lambda error:', error);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Failed to submit quote request. Please contact us at info@supersolarenergy.com.au' }),
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
