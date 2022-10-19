const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    console.info("user seeds", users)
    const posts = await Post.bulkCreate(postData, {
      individualHooks: true,
      returning: true,
    });
    console.info("user seeds", posts)
    const comments = await Comment.bulkCreate(commentData, {
      individualHooks: true,
      returning: true,
    });
    console.info("user seeds", comments)
  } catch (error) {
    if (error){
      console.error(err);
      throw error
    }
    throw new Error("unknown seed script error")
  } finally {
    console.info("finally")
  }

  process.exit(0);
};

seedDatabase();