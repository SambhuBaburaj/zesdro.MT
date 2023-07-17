import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AddtoCart, CartChange, RemoveProduct } from "../API/Cart";

const calculateTotal = (cartItems) => {
 console.log(cartItems);
  return cartItems.reduce((acc, item) => {
    const itemTotal = item.ItemId.price * item.Quantity;
    return acc + itemTotal;
}, 0);
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const location = useLocation();

  const Addtocartitem = () => {
console.log(sessionStorage.getItem('myData'),'session data here');
const location=JSON.parse(sessionStorage.getItem('myData'))
console.log(JSON.parse(sessionStorage.getItem('myData')));
sessionStorage.removeItem('myData')
    // console.log(location.state);
    console.log("wokr");
    if (location) {
      console.log("this is also working");
      AddtoCart(location).then((data) => {
        const fakeData = data.data;
     
        
        // Set the updated location object
        // This will not affect the original location object returned by useLocation
      

        
        setCartItems(fakeData);
        console.log("worked is ti", cartItems);

        setIsLoading(false);
      });
    } else {
      console.log("else worekid");
      AddtoCart().then((data) => {
        console.log(data);
if(data.data[0])
{
  setCartItems(data.data);

}
else
{
  setCartItems(null)
}
        setIsLoading(false);
      });
  
    }
  };

  useEffect(() => {
    Addtocartitem();
  },[isLoading]);




  const removeItem = (itemId) => {

    RemoveProduct(itemId).then(data=>{
      console.log(data);
    })


    setCartItems((prevItems) => prevItems.filter((item) => item._id !== itemId));
console.log(setCartItems.length);
 
  };



  const updateQuantity = (itemId, newQuantity) => {
    console.log(itemId, newQuantity);
    CartChange(itemId, newQuantity);
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === itemId ? { ...item, Quantity: newQuantity } : item
      )
    );
  };




  const renderCartItems = () => {
    if (isLoading) {
      return (
        <>
          <div className="animate-pulse flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-300 rounded-lg mr-4"></div>
              <div>
                <div className="w-32 h-6 bg-gray-300 mb-2"></div>
                <div className="w-24 h-4 bg-gray-300"></div>
              </div>
            </div>
            <button className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg focus:outline-none"></button>
          </div>
          <div className="animate-pulse flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-300 rounded-lg mr-4"></div>
              <div>
                <div className="w-32 h-6 bg-gray-300 mb-2"></div>
                <div className="w-24 h-4 bg-gray-300"></div>
              </div>
            </div>
            <button className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg focus:outline-none"></button>
          </div>
          <div className="animate-pulse flex items-center justify-between p-4 border-b">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-300 rounded-lg mr-4"></div>
              <div>
                <div className="w-32 h-6 bg-gray-300 mb-2"></div>
                <div className="w-24 h-4 bg-gray-300"></div>
              </div>
            </div>
            <button className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg focus:outline-none"></button>
          </div>
          
        </>
      );
    }

    return cartItems.map((item) => (
      <>
      <div
        key={item.id}
        className="flex items-center justify-between p-4 border-b"
      >
        <div className="flex items-center">
          <img
            className="w-16 h-16 mr-4 rounded-lg"
            src={`http://localhost:8000/static/images/${
              item.ItemId && item.ItemId.img
            }`}
            alt={item.name}
          />
          <div>
            <h3 className="text-lg font-semibold">
              {item.ItemId && item.ItemId.name}
            </h3>
            <p className="text-gray-500">
              Price: ${item.ItemId && item.ItemId.price}
            </p>
            <div className="flex items-center">
              <p className="text-gray-500">Quantity:</p>
              <input
                type="number"
                min="1"
                value={item.ItemId && item.Quantity}
                onChange={(e) =>
                  updateQuantity(item._id, parseInt(e.target.value))
                }
                className="w-16 ml-2 border border-gray-300 rounded px-2 py-1"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => removeItem(item._id)}
          className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg focus:outline-none"
        >
          Remove
        </button>
        
      </div>
   
      </>
    ))
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cartItems? (
        <div className="bg-white rounded-lg shadow">
          {renderCartItems()}


          {


          }{
            calculateTotal(cartItems)!==0?  <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Total:</h3>
            <div className="w-32 h-6 mb-4">${calculateTotal(cartItems)} </div>
            <button className="px-4 py-2 text-sm text-white bg-green-500 rounded-lg focus:outline-none">
              Checkout
            </button>
          </div>:<></>

          }
        
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
