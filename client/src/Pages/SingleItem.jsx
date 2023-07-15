import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { GetSingleProduct, Products } from '../API/Cart';

const SingleItem = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [productid, setProductid] = useState();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProductid(params);
    GetProduct();
  }, []);

  const GetProduct = () => {
    GetSingleProduct(params).then((data) => {
      console.log(data);
      setProduct(data.data);
      console.log(product,'producoer');
      setLoading(false);
    });
  };

  if (loading) {
    return (
      <div className="mx-24 my-8">
        <div className="animate-pulse">
          <div className="w-full flex">
            <div className="w-1/2 bg-gray-200 rounded-lg h-96"></div>
            <div className="w-1/2">
              <div className="flex-col space-y-4">
                <div className="h-8 bg-gray-200 rounded-lg"></div>
                <div className="h-8 bg-gray-200 rounded-lg"></div>
                <div className="h-8 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='mx-24 my-8'>

<div>
    {product&& 
    
    <div className='w-full flex'>
<div className='w-1/2  '>
    
<img className="p-8 rounded-t-lg object-cover h-96 w-full transition-transform hover:scale-105" src={`http://localhost:8000/static/images/${product.img}`} alt="product image" />

</div> 
<div className='w-1/2  '>
<div>
<div className='flex'>
  <div className='flex-col '>
<img className="p-2  w-76 mb-9 rounded-t-lg" src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=" alt="product image" />
<img className="p-2 w-40  mb-9  rounded-t-lg" src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=" alt="product image" />
<img className="p-2 w-40   rounded-t-lg" src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=" alt="product image" />

</div>
<div className='p-5'>
 <p className='font-bold text-xl mb-5'>{product.name}</p>
 <p>{product.disc}</p>

<div className='grid grid-cols-3 mt-4 w-1/2 gap-3'>
<img className="p-2 w-24   rounded-t-lg" src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=" alt="product image" />
<img className="p-2 w-24   rounded-t-lg" src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=" alt="product image" />
<img className="p-2 w-24   rounded-t-lg" src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=" alt="product image" />
<img className="p-2 w-24   rounded-t-lg" src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=" alt="product image" />


</div>

</div>

  </div>
  
</div>
 

<div className='ml-28 flex items-baseline'>
<button onClick={()=>
{
    navigate('/cart',{state:{Product:product._id}})
}} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add to Cart</button>
<div>
₹{product.price}
</div>
</div>




</div>
  </div>
    }
  
</div>

<div>
  <p className='font-bold text-xl p-5'>you may also like</p>

<div className='grid grid-cols-3 gap-4 '>
<div className=" w-72 max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-sky-50">
    <a href="#">
        <img className="p-8 rounded-t-lg" src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=" alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">Air Jorden</h5>
        </a>
     
        <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 ">$599</span>
        </div>
    </div>
</div>
<div className=" w-72 max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-sky-50">
    <a href="#">
        <img className="p-8 rounded-t-lg" src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=" alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">Air Jorden</h5>
        </a>
     
        <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 ">$599</span>
        </div>
    </div>
</div>
<div className=" w-72 max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-sky-50">
    <a href="#">
        <img className="p-8 rounded-t-lg" src="https://media.istockphoto.com/id/1350560575/photo/pair-of-blue-running-sneakers-on-white-background-isolated.webp?b=1&s=170667a&w=0&k=20&c=liUSgX6SafJ7HWvefFqR9-pnf3KuH6v1lwQ6iEpePWc=" alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">Air Jorden</h5>
        </a>
     
        <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 ">$599</span>
        </div>
    </div>
</div>
</div>

</div>
    </div>
  );
};

export default SingleItem;
