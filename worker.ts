addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

async function handleRequest(request) {  
  const response = 'abc';

  return new Response(response, { status: 200 });
}
