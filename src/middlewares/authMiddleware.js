const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authenticate = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Authentication token required",
    });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findByPk(decode.id);

    if (!req.user) {
      throw new Error("User not found");
    }

    next();
  } catch (error) {
    console.log("Error:",error);
    return res.status(401).json({
        success:false,
        message:"Invalid or expired token"
    })
  }
};


module.exports = authenticate;