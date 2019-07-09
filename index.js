const express = require('express');

const server = express();
const PORT = 5000;

server.use(express.json());

server.use((req, res) =>
  res.status(404).json({
    status: 404,
    message: 'Please check the URL and try again.',
  }),
);

server.listen(PORT, () =>
  console.log(`Server started and listening on port ${PORT}`),
);
