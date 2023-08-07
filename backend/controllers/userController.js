const asyncHandler = require("express-async-handler");

// Register User
const registerUser = asyncHandler(async (req, res) => {
  if (!req.body.email) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }

  res.status(200).json("Register Successful!");
});

module.exports = {
  registerUser,
};
