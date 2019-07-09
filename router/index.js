const postHandler = require('express').Router();

const handlers = require('./handlers');

postHandler.get('/', handlers.getAllPosts);

module.exports = postHandler;
