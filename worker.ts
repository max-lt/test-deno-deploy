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
  const ev = await new Promise((resolve, reject) => {
    const worker = new Worker(URL.createObjectURL(blob), { type: 'classic' });
    worker.addEventListener('message', (event) => void resolve(event));
  });

  return new Response(ev.data, { status: 200 });
}
