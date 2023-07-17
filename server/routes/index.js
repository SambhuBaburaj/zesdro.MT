var express = require("express");
var router = express.Router();
const MongoUser = require("../Model/Products");
const {
  GetSingleItem,
  AddtoCart,
  cartData,
  cartChange,
  RemoveProduct,
} = require("../Controller/ProductControl");

/* GET home page. */
router.get("/getProducts", async function (req, res, next) {
  const Product = await MongoUser.ProductData.find();
  res.status(200).json(Product);
});
router.get("/singleproduct", GetSingleItem);
router.get("/addtocart", AddtoCart);
router.get("/cartdata", cartData);
router.get("/cartchange", cartChange);

router.get("/removeitem", RemoveProduct);

module.exports = router;
   