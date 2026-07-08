const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/api/messages" && req.method === "POST") {
      console.log("Received a message from Teams");
      return new Response("OK", { status: 200 });
    }

    return new Response("Gojo is alive", { status: 200 });
  },
});

console.log(`Gojo listening on port ${server.port}`);
