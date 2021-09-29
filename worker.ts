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

  return fetch('https://devcat.fr/' + pathname).then((response) => {
    return new Response(response.body, {
      ...response,
      headers: { 'x-debug-pathname': pathname, ...response.headers },
    });
  });
}
