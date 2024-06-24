const express = require ("express") ;
const { getAllProducts , createProduct, updateProduct, getProductDetails, deleteProduct, uploadImage} = require("../controllers/productControllers");
const { isAuthanticated } = require("../middleware/auth");

const router = express.Router();


router.route("/products").get( getAllProducts)

router.route ( "/product/new").post(createProduct) ;

router.route("/product/:id").put(updateProduct).get(getProductDetails).delete(deleteProduct);
router.route("/product/upload/image").post(uploadImage)


module.exports = router ;
