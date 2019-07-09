const postRouter = require('express').Router();

const handlers = require('./handlers');

postRouter.get('/', handlers.getAllPosts);
postRouter.get('/:id', handlers.getPostById);
postRouter.post('/', handlers.createPost);
postRouter.post('/:id/comments', handlers.createComment);
postRouter.get('/:id/comments', handlers.getPostComments);
postRouter.delete('/:id', handlers.deletePost);

module.exports = postRouter;
