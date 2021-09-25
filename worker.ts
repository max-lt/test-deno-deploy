import { Application, Router } from 'https://deno.land/x/oak/mod.ts';

const books = new Map<string, any>();
books.set('1', {
  id: '1',
  title: 'The Hound of the Baskervilles',
  author: 'Conan Doyle, Arthur',
});

const app = new Application();
const router = new Router();

router.get('/', (context) => {
  context.response.body = 'Hello world!';
});

router.get('/books', (context) => {
  context.response.body = Array.from(books.values());
});

router.get('/book/:id', (context) => {
  if (books.has(context?.params?.id)) {
    context.response.body = books.get(context.params.id);
  }
});

app.use(router.routes());

addEventListener('fetch', async (event: FetchEvent) => {
  const response = app.handle(event.request);

  event.respondWith(response);
});
