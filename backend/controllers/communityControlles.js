
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErr = require("../middleware/catchAsyncErr");
const ApiFeatures = require("../utils/apifeatures");
const community = require("../models/community");
const User = require("../models/user");
const jwt = require("jsonwebtoken")
exports.createReview = catchAsyncErr(async (req, res, next) => {
  console.log("In the controllers")
  console.log(req.body)
  // console.log(req.user)

  const { token } = req.cookies;

    const decodedData = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodedData.id);
    console.log(decodedData)
  if(!user) return next( new ErrorHandler("user not found" , 500));
  const data = {
    name : user.name , 
    contact : user.email,
    image : user.dp.url , 
    content : req.body.comment
  }

  const review = await community.create(data);

  console.log("this is backend Review Recvd");
  
  console.log(review)

  res.status(200).json({
    success: true,
    review
  });

  
});