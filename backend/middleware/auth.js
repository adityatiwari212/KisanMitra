const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErr = require("./catchAsyncErr");
const user = require("../models/user");

exports.isAuthanticated = catchAsyncErr (async (req , res  , next)=>{
  const {token} = req.cookies;
  
    if(!token) return next(new ErrorHandler ("please Login")) ;

  const decodedData = jwt.verify (token , process.env.JWT_SECRET )
  console.log(decodedData);
  req.user = await user.findById(decodedData.id);
  next();
  
})

