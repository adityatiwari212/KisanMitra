const Product = require("../models/product");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErr = require("../middleware/catchAsyncErr");
const ApiFeatures = require("../utils/apifeatures");

const path = require('path');
const multer  = require("multer")



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Adjust the destination path to point to the correct directory
    cb(null, path.join(__dirname, '../../frontend/src/component/ProductImages'));
  },
  filename: function (req, file, cb) {
//     const timestamp = Date.now();
// const roundedTimestamp = Math.floor(timestamp / 3000) * 3000;
// console.log(roundedTimestamp/100);
    cb(null, `${file.originalname}`);
  }
});


const upload = multer({storage})

exports.uploadImage = catchAsyncErr (upload.single('file')) ;

exports.createProduct = catchAsyncErr(async (req, res, next) => {
  const product = await Product.create(req.body);
  console.log("this is backend Product Recvd");
  
  console.log(product)

  res.status(200).json({
    success: true,
    product
  });
});



exports.getAllProducts = catchAsyncErr(async (req, res) => {
  // const apiData = new ApiFeatures (Product.find() , req.query).search().filter();
  // const products = await apiData.query;

  const products = await Product.find();

  res.status(200).json({ success: true, products })
});

exports.updateProduct = catchAsyncErr(
  async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }


    product = await Product.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({ success: true, product })

  }
);

exports.deleteProduct = catchAsyncErr(
  async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
      return next(new ErrorHandler("Product not found", 404));
    }
    await product.deleteOne({ _id: req.params.id });

    res.status(200).json({ success: true, message: "product deleted successgully" })

  }

);

exports.getProductDetails = catchAsyncErr(async (req, res, next) => {
  console.log("22222222");
  let product = await Product.findById(req.params.id);


  console.log(product);
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  console.log("33333");
  res.status(200).json({ success: true, product });
});