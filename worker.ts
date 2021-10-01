addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

async function handleRequest(request) {
  const twitterRequest = await fetch('https://twitter.com');
  if(twitterRequest.status == 200) {
  return new Response("Twitter is live");
} else {
  return new Response("Twitter is down");
  // envoi d'un sms ...
}
}
