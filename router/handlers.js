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

module.exports = {
  getAllPosts,
  getPostById,
};
