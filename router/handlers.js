const Posts = require('../data/db');

async function getAllPosts(req, res) {
  try {
    const posts = await Posts.find();

    res.status(200).json(posts);
  } catch (err) {
    res
      .status(500)
      .json({ error: 'The posts information could not be retrieved.' });
  }
}

async function getPostById(req, res) {
  const { id } = req.params;

  try {
    const post = await Posts.findById(id);

    if (!post.length) {
      return res
        .status(404)
        .json({ message: 'The post with the specified ID does not exist.' });
    }

    res.status(200).json(post);
  } catch (err) {
    res
      .status(500)
      .json({ error: 'The posts information could not be retrieved.' });
  }
}

async function createPost(req, res) {
  const { contents, title } = req.body;

  if (!title || !contents)
    return res.status(400).json({
      errorMessage: 'Please provide title and contents for the post.',
    });

  try {
    const post = await Posts.insert({ contents, title });

    res.status(201).json({ id: post.id, contents, title });
  } catch (err) {
    res.status(500).json({
      error: 'There was an error while saving the post to the database',
    });
  }
}

async function createComment(req, res) {
  const { id } = req.params;
  const { text } = req.body;

  if (!text)
    return res
      .status(400)
      .json({ errorMessage: 'Please provide text for the comment.' });
  try {
    const comment = await Posts.insertComment({ text, post_id: id });

    if (!comment)
      return res
        .status(404)
        .json({ message: 'The post with the specified ID does not exist.' });

    res.status(201).json({ id: comment.id, text });
  } catch (err) {
    res.status(500).json({
      error: 'There was an error while saving the comment to the database',
    });
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  createComment,
};
