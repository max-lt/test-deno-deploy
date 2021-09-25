import { Application } from 'https://deno.land/x/oak/mod.ts';

const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello World!!";
});

addEventListener('fetch', async (event: FetchEvent) => {
  const response = app.handle(event.request);

  event.respondWith(response);
});
