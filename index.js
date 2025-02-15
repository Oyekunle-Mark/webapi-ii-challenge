const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const compression = require('compression');

const postRouter = require('./router');

const server = express();
const PORT = 5000;

server.use(express.json());
server.use(cors());
server.use(logger('combined'));
server.use(compression());
server.use('/api/posts', postRouter);

server.use((req, res) =>
  res.status(404).json({
    status: 404,
    message: 'Please check the URL and try again.',
  }),
);

server.listen(PORT, () =>
  console.log(`Server started and listening on port ${PORT}`),
);
