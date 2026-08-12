// app/api/fetch-title/route.ts
export async function POST(request: Request) {
  const { url } = await request.json();

  if (!url) {
    return Response.json({ title: null }, { status: 400 });
  }

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      return Response.json({ title: null });
    }

    const html = await res.text();
    const match = html.match(/<title[^>]*>([^<]*)<\/title>/i);
    const title = match?.[1]?.trim() ?? null;

    return Response.json({ title });
  } catch {
    return Response.json({ title: null });
  }
}
