const asyncHandler = require("express-async-handler");

// Register User
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json("Register Successful!");
});

module.exports = {
  registerUser,
};
