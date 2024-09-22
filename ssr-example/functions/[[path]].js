   // functions/[[path]].js
   import { createServer } from '@cloudflare/pages-functions-express';
   import app from '../server';

   export const onRequest = createServer(app);