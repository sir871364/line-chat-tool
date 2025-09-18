export const onRequestGet = async ({ request }) => {
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const cf = request.cf || {};
  const city = cf.city || "";
  const country = cf.country || "";
  const colo = cf.colo || "";
  const ua = request.headers.get("User-Agent") || "";

  const data = {
    ip,
    city,
    country,
    colo,
    ua,
    time: new Date().toISOString()
  };

  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
};
