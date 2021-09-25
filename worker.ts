addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
    new Response('Hello deno!', {
      status: 200,
      headers: { 'content-type': 'text/plain' },
    })
  );
});
