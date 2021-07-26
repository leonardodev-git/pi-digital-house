const search = require("../db/userQueries");

const checkUserExist = async (req, res, next) => {
  await search.searchUsers(req.body.email).then((user) => {
    if (user) {
      res.status(400).json({ message: "User already has registration!" });
      return;
    }
    next();
  });
};

const checkUserCorrect = async (req, res, next) => {
  await search.searchUsers(req.body.email).then((user) => {
    if (!user) {
      return res.status(400).json({ message: "User not registered!" });
    }
  });
  next();
};

module.exports = {
  checkUserExist,
  checkUserCorrect,
};
