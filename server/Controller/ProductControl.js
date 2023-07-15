const { ProductData } = require("../Model/Products");
const { ObjectId } = require("mongodb");
const { CartData } = require("../Model/User");

const GetSingleItem = async (req, res) => {
  console.log(req.query.productid);
  const productid = req.query.productid;
  console.log(productid);
  try {
    await ProductData.findById(new ObjectId(productid))
      .then((data) => {
        console.log(data);
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json(false);
      });
  } catch (err) {
    res.status(404).json(false);
  }
};

const AddtoCart = async (req, res) => {
  console.log(req.query);
  const product = req.query.productid;
  console.log(req.query);
  if(req.query.productid!='undefined')
  {

    console.log(product); 
    console.log('its here');
    await CartData.findOne({ ItemId: new ObjectId(product) })
      .then(async (data) => {
console.log(data,'dataexist');
        if (!data) {
          console.log('this is wpor');
          new CartData({ ItemId: product }).save();
          await CartData.find().populate('ItemId').then((data) => {
            res.status(200).json(data);
          });
        } else {
     
          if(req.query.param2 !='undefined')
          {
           console.log('this gut is working');
          
          }
   else{
    await CartData.find().populate('ItemId').then((data) => {
      res.status(200).json(data);
    });
   }
        }
      });
  } else {
    console.log('else worked');
    await CartData.find().populate('ItemId').then((data) => {
      res.status(200).json(data);
    });
  }
};

const cartData = (req, res) => {
  // TODO: Implement cartData function
};

const cartChange = (req, res) => {
  // TODO: Implement cartChange function
  console.log(req.query);
  CartData.findByIdAndUpdate(new ObjectId(req.query.productid), { Quantity: req.query.param2 }, { new: true })
  .then(updatedDocument => {
    // The document with the updated "numdate" field
    res.json(true)
    console.log(updatedDocument);
  })
  .catch(error => {
    // Handle any errors that occurred during the update
    console.error(error);
            res.status(200).json(data);
          }); 
};
const RemoveProduct=async (req,res)=>
{
console.log(req.query.productid);
console.log('sriogubesiugesrg');
await CartData.findOneAndDelete({_id:new ObjectId(req.query.productid)}).then(data=>
  {
    console.log(data);
    res.json(true)
  }).catch(err=>
    {
      console.log(err);
    })
}
module.exports = { GetSingleItem, AddtoCart, cartData, cartChange,RemoveProduct };
