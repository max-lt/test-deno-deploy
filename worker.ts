/// <reference lib="lib.es6.d.ts" />
/// <reference lib="lib.webworker.d.ts" />

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

let data = null;

self.addEventListener('message', (event: FetchEvent) => {
    console.log('event', event);
    data = event.data;
})

async function handleRequest(request: Request) {
  console.log('handle request');
  
  return new Response(JSON.stringify(data), { status: 200 });
}
