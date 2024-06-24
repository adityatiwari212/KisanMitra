const express = require("express");
const { registerUser, loginUser, logout, forgotPassword, getUserDetails } = require("../controllers/userControllers");
const { isAuthanticated } = require("../middleware/auth");

const router = express.Router()

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/password/forgot").post(forgotPassword)
router.route("/me").get(isAuthanticated , getUserDetails);
  
module.exports = router;