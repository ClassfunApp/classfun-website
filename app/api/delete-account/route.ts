export async function POST(request: Request) {
  const body = await request.json();

  const backendUrl = process.env.BACKEND_URL || 'http://localhost:3000';

  const response = await fetch(`${backendUrl}/api/public/delete-account`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return Response.json(data, { status: response.status });
}
