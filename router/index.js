const postHandler = require('express').Router();

const handlers = require('./handlers');

postHandler.get('/', handlers.getAllPosts);
postHandler.get('/:id', handlers.getPostById);
postHandler.post('/', handlers.createPost);

module.exports = postHandler;
