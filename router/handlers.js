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

module.exports = {
  getAllPosts,
};
