addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

const workerScript = `postMessage('Hello world');`;

const blob = new Blob([workerScript], { type: 'application/javascript' });

async function handleRequest(request) {
  const location = typeof self.location;

  return new Response(location, { status: 200 });
}
