#!/usr/bin/env bash
# Run Super Solar Energy frontend locally with a mock API backend
set -e

ROOT="$(cd "$(dirname "$0")" && pwd)"
FRONTEND="$ROOT/frontend"

# ── Colour helpers ────────────────────────────────────────────────
GREEN='\033[0;32m'; YELLOW='\033[1;33m'; NC='\033[0m'
info()    { echo -e "${GREEN}[supersolar]${NC} $*"; }
warning() { echo -e "${YELLOW}[supersolar]${NC} $*"; }

# ── Cleanup on exit ──────────────────────────────────────────────
PIDS=()
cleanup() {
  info "Stopping..."
  for pid in "${PIDS[@]}"; do
    kill "$pid" 2>/dev/null || true
  done
}
trap cleanup EXIT INT TERM

# ── Install deps if needed ───────────────────────────────────────
if [ ! -d "$FRONTEND/node_modules" ]; then
  info "Installing frontend dependencies..."
  (cd "$FRONTEND" && npm install)
fi

# ── Environment ──────────────────────────────────────────────────
# Copy .env.local template if it doesn't exist
if [ ! -f "$FRONTEND/.env.local" ]; then
  warning ".env.local not found — creating with defaults (no Maps/API)"
  cat > "$FRONTEND/.env.local" <<'ENV'
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
ENV
  info "Edit frontend/.env.local to add your Google Maps API key"
fi

# ── Mock API server ──────────────────────────────────────────────
info "Starting mock API server on :3001..."
node - <<'NODE_SCRIPT' &
const http = require('http');

const mockReviews = {
  reviews: [
    { reviewId: '1', reviewer: { displayName: 'Sarah Johnson' }, starRating: 'FIVE',
      comment: 'Excellent service! Professional team and great results.', createTime: new Date().toISOString() },
    { reviewId: '2', reviewer: { displayName: 'Michael Chen' }, starRating: 'FIVE',
      comment: 'Outstanding solar installation. Highly recommend Super Solar Energy!', createTime: new Date().toISOString() },
    { reviewId: '3', reviewer: { displayName: 'Emma Williams' }, starRating: 'FIVE',
      comment: 'Great value for money. The team was professional and efficient.', createTime: new Date().toISOString() },
  ],
  totalReviewCount: 927,
  averageRating: 4.9,
};

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Content-Type': 'application/json',
};

http.createServer((req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(200, cors); res.end(); return;
  }

  let body = '';
  req.on('data', c => body += c);
  req.on('end', () => {
    res.writeHead(200, cors);

    if (req.url === '/api/google-reviews') {
      res.end(JSON.stringify(mockReviews));
    } else if (req.url === '/api/contact') {
      try { const d = JSON.parse(body); console.log('[contact]', d); } catch {}
      res.end(JSON.stringify({ message: 'Contact form submitted successfully' }));
    } else if (req.url === '/api/quote') {
      try { const d = JSON.parse(body); console.log('[quote]', d); } catch {}
      res.end(JSON.stringify({ message: 'Quote request submitted successfully' }));
    } else {
      res.writeHead(404, cors);
      res.end(JSON.stringify({ error: 'Not found' }));
    }
  });
}).listen(3001, () => console.log('[mock-api] listening on http://localhost:3001'));
NODE_SCRIPT
PIDS+=($!)

# Give the mock server a moment to start
sleep 1

# ── Next.js dev server ───────────────────────────────────────────
info "Starting Next.js on http://localhost:3000 ..."
(cd "$FRONTEND" && npm run dev) &
PIDS+=($!)

info "──────────────────────────────────────────────────"
info "  Website:  http://localhost:3000"
info "  Mock API: http://localhost:3001"
info "  Press Ctrl+C to stop"
info "──────────────────────────────────────────────────"

wait
