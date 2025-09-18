export const onRequest = async ({ request, env, next }) => {
  const auth = request.headers.get("Authorization") || "";
  const expected = "Basic " + btoa(`${env.BASIC_USER}:${env.BASIC_PASS}`);

  if (auth !== expected) {
    return new Response("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Protected"' },
    });
  }

  return next(); // 驗證通過 → 回傳 index.html 或其他檔案
};
