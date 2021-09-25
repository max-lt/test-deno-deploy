import { router } from 'https://crux.land/router@0.0.4';

const router = router({
  'GET@/': (_req) => new Response('Hello get!', { status: 200 }),
  'POST@/': (_req) => new Response('Hello post!', { status: 200 }),
});

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(
    new Response('Hello deno!', {
      status: 200,
      headers: { 'content-type': 'text/plain' },
    })
  );
});
