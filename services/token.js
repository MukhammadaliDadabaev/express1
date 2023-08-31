const jwt = require("jsonwebtoken");

const generateJwtToken = (userId) => {
  const access = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return access;
};

module.exports = generateJwtToken;
