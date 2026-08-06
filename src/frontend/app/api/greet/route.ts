const backendUrl = process.env.BACKEND_URL ?? "http://127.0.0.1:3000";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const query = name ? `?name=${encodeURIComponent(name)}` : "";

  const response = await fetch(`${backendUrl}/greet${query}`);

  if (!response.ok) {
    return Response.json(
      { message: "Failed to fetch greeting" },
      { status: response.status },
    );
  }

  const data = await response.json();
  return Response.json(data);
}
