const mongoose = require("mongoose");
const Mail = require('nodemailer/lib/mailer');
const crypto = require('crypto');
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    maxLength: [10, "Name cannot be more than 10 characters"]
  }, email: {
    type: String,
    required: [true], unique: [true],
    validate: [validator.isEmail, "Please Enter a valid Email"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [8, "Password must be more than 7 characters"],
    select: false
  },
  dp: {

    public_id: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }

  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,

});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
})

// JWT Token

userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  })
}

userSchema.methods.comparePassword = async function (Password) {
  return await bcrypt.compare(Password, this.password);
}

userSchema.methods.getResetPasswordToken = function () {

  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")
  this.resetPasswordExpire = Date.now()+ 10*60*1000;
  return resetToken;

}

module.exports = mongoose.model("User", userSchema);