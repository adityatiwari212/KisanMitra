const express = require ("express") ;

const {createReview} = require ("../controllers/communityControlles")

const router = express.Router()

router.route("/uploadComm").post(createReview);

module.exports = router;