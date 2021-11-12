addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

let data = null;

self.addEventListener('message', (event) => {
    console.log('event', event);
    data = event.data;
})

async function handleRequest(request) {
  return new Response(JSON.stringify(data), { status: 200 });
}
