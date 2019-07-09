const postHandler = require('express').Router();

const handlers = require('./handlers');

postHandler.get('/', handlers.getAllPosts);
postHandler.get('/:id', handlers.getPostById);

module.exports = postHandler;
