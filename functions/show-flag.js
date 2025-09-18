export const onRequestGet = ({ env }) =>
  new Response(JSON.stringify({ enabled: env.SHOW_LOGIN_INFO === "true" }), {
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
