const express = require('express');
const next = require('next');
const morgan = require('morgan');
const dev = process.env.NODE_ENV !== 'production';
const tinyOrDev = dev ? 'dev' : 'tiny';
const port = process.env.PORT_NUM || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();
const decoder = require('./code/decoder');

app.prepare()
  .then(() => {
    const server = express();
    server.use(morgan(tinyOrDev));
    server.use(express.json());
    server.post('/decode', (req, res) => {
      let result = decoder.decoder(req.body.data);
      res.status(201).json(result);
    });
    server.get('*', (req, res) => {
      return handle(req, res);
    })

    server.listen(port, (err) => {
      if (err) throw err;
      let link = "Ready on http://localhost:" + port;
      console.log(link);
    })
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
})