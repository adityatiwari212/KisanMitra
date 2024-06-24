const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErr = require("../middleware/catchAsyncErr");
const { cookieToken } = require("../utils/cookieToken");
const User = require("../models/user");
const { sendEmail } = require("../utils/sendEmail");

exports.registerUser = catchAsyncErr(async (req , res, next)=> {
  const {name , email , password , dp} = req.body;
  const user = await User.create({
    name , email , password ,
    dp
  });

  const token = user.getJWTToken();

  cookieToken (user ,res ,201);
})

exports.loginUser =catchAsyncErr ( async (req , res , next)=> {
    const { email , password} = req.body ;

    if(!email || !password) {
      return next(new ErrorHandler("Please Enter email and password"))
    }

    const user = await User.findOne({email}).select("+password");

    if(!user) return next(new ErrorHandler ("Invalid email or password")) ;

    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched) return next(new ErrorHandler ("Invalid email or password") );

    const token = user.getJWTToken();

  cookieToken (user , res ,201);

})


exports.logout = catchAsyncErr ( async (req , res ,next)=>{
  res.cookie('token' , null , {
    expires : new Date(Date.now()),
    httpOnly : true,
  });

  res.status(200).json({
    success :true , 
    message: "logged out",
  });
});

exports.forgotPassword = catchAsyncErr(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return next(new ErrorHandler("User not found", 404));

  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  const resetLink = `${req.protocol}://${req.get("host")}/ap1/v1/password/${resetToken}`;

  const message = `Your password reset token is: \n\n ${resetLink}`;

  try {
    await sendEmail({
      email: user.email,
      subject: `Password recovery`,
      message,
    });
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

exports.getUserDetails = catchAsyncErr ( async(req , res , next)=>{

  const user  = await User.findById(req.user.id);

  if(!user) return next( new ErrorHandler("user not found" , 500));
console.log("1" + user)
  res.status(200).json({
    success: true , 
    user
  })
})