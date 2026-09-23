// Startup file for Top Training Institute (Next.js)
// Compatible with cPanel / CloudLinux Phusion Passenger and custom Node.js servers

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT
  ? (!isNaN(Number(process.env.PORT)) ? Number(process.env.PORT) : process.env.PORT)
  : 3000;
const hostname = process.env.HOSTNAME || 'localhost';

const app = next({
  dev,
  hostname,
  port: typeof port === 'number' ? port : undefined,
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error('Error handling request:', req.url, err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    });

    server.once('error', (err) => {
      console.error('Server error:', err);
      process.exit(1);
    });

    server.listen(port, () => {
      console.log(
        `> Top Training Institute ready on port ${port} (mode: ${
          dev ? 'development' : 'production'
        })`
      );
    });
  })
  .catch((err) => {
    console.error('Failed to initialize Next.js server:', err);
    process.exit(1);
  });
