import Instance from "./Axios";

export const Products = async (data) => {
  return await Instance.get("/getProducts");
};
export const GetSingleProduct = async (data) => {
  return await Instance.get(`/singleproduct?productid=${data.productId}`);
};
export const AddtoCart = async (data,count) => {
  console.log(data,count);
  return await Instance.get(`/addtocart?productid=${data}&param2=${count}`);
};
export const RemoveProduct = async (data) => {
  return await Instance.get(`/removeitem?productid=${data}`);
};

export const CartChange = async (data,count) => {
  console.log(data.productId);
  return await Instance.get(`/cartchange?productid=${data}&param2=${count}`);
};

