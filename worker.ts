addEventListener('fetch', (event) => {
  console.log('Worker: fetch event');

  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

async function handleRequest(request) {
  const { pathname } = new URL(request.url);

  const headers = new Headers({
    'x-debug-pathname': pathname,
  });

  return fetch('https://devcat.fr/' + pathname, { headers });
}
