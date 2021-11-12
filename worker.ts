addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

async function handleRequest(request) {
  console.log(this);
  
  const location = 'abc';

  return new Response('loc:' + location, { status: 200 });
}
