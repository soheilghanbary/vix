import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';

const app = new Hono();

// middlewares
app.use('*', logger());
app.use(
  '*',
  cors({
    origin: (origin) => origin,
    allowHeaders: ['Content-Type'],
    credentials: true,
  }),
);

// routes
const apiRoutes = app
  .basePath('/api')
  .get('/hello', (c) => c.json({ msg: 'Hello from Hono🔥!' }));

// static files
app.get('*', serveStatic({ root: './dist' }));
app.get('*', serveStatic({ path: './dist/index.html' }));

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000,
});

console.log('Server Running on Port 3000 🚀');

export type ApiRoutes = typeof apiRoutes;
