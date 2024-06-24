
const ErrorHandler = require("../utils/errorHandler");

module.exports = (err,res,req,next)=>{
  err.statusCode = err.statusCode || 500 ;
  err.message = err.message || "internal server error" ;

  if(err.name === "CastError"){
    const message  = `resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message , 400);
  }


  if(err.code === 11000){
    const message  = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message , 400);
  }

  if(err.name === "JsonWebTokenError"){
    const message  = `JSON WEB TOKEN ERROR`;
    err = new ErrorHandler(message , 400);
  }


  if(err.name === "TokenExpiredError"){
    const message  = `Json web token is expired`;
    err = new ErrorHandler(message , 400);
  }

  res.status(err.statusCode).json({
    success : false , 
    error : err
  });
}