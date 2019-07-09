const postHandler = require('express').Router();

const handlers = require('./handlers');

postHandler.get('/', handlers.getAllPosts);
postHandler.get('/:id', handlers.getPostById);
postHandler.post('/', handlers.createPost);
postHandler.post('/:id/comments', handlers.createComment);
postHandler.get('/:id/comments', handlers.getPostComments);

module.exports = postHandler;
