import React, { useEffect, useState } from "react";
import { wrapGrid } from "animate-css-grid";
import "../Assets/Product/grid.css";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Products } from "../API/Cart";
// const grid = document.querySelector(".grid");
// wrapGrid(grid);
function Product() {
    const navigate=useNavigate()
  const [FilterBox, setFilterBox] = useState(false);
  const colorOptions = [
    { name: "Red", value: "bg-red-500" },
    { name: "Blue", value: "bg-blue-500" },
    { name: "Green", value: "bg-green-500" },
    { name: "Yellow", value: "bg-yellow-500" },
    { name: "Purple", value: "bg-purple-500" },
    { name: "Teal", value: "bg-teal-500" },
    { name: "Orange", value: "bg-orange-500" },
    // Add more color options as needed
  ];
  const [selectedColor, setSelectedColor] = useState("");

  const [ProductsData, setProducts] = useState();
  useEffect(() => {
    Products().then((data) => {
      setProducts(data.data);
      console.log(data.data);
    });
  }, []);

  return (
    <div className="mx-24 my-8">
      <div className="text-4xl font-bold">Man shoes</div>

      <div className="container">
        <div className="buttons">
          <button
            onClick={() => {
              setFilterBox(!FilterBox);
            }}
            className="p-5"
          >
            filter
          </button>
        </div>

        <div className=" ">
          {/* {FilterBox&&(<div className="filterbox w-96 h-96 border-black border-2 ">



</div>)} */}

          <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
            {FilterBox && (
              <motion.div
                animate={{ y: -10 }}
                initial={{ y: -200 }}
                className="filterbox w-80 h-96 border-black border-2 "
              >
                <div className="flex">
                  <div className="w-1/2 p-2">
                    <p>new items</p>
                    <div className="mt-2">
                      <p className="font-bold text-gray-300">CATEGOREIS</p>
                    </div>
                    <div className="p-1">
                      <p className="cursor-pointer p-1">Air Max</p>
                      <p className="cursor-pointer p-1">Air HUarache</p>
                      <p className="cursor-pointer p-1">Air Vapur</p>
                    </div>
                  </div>
                  <div className="w-1/2 p-2 ">
                    sell out
                    <div className="mt-2">
                      <p className="font-bold text-gray-300 mb"></p>
                    </div>
                    <div className="p-1 mt-8">
                      <p className="cursor-pointer p-1 ">Air Max</p>
                      <p className="cursor-pointer p-1">Air HUarache</p>
                      <p className="cursor-pointer p-1">Air Vapur</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="p-2 font-bold text-gray-300">SEASON</p>
                  <div className="grid grid-cols-2 p-2">
                    <div class="flex items-center mb-4 ">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Smmer
                      </label>
                    </div>
                    <div class="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Spring
                      </label>
                    </div>
                    <div class="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Autom
                      </label>
                    </div>
                    <div class="flex items-center mb-4">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-checkbox"
                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Summer/Spring
                      </label>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div>
                    <p className="p-2 font-bold text-gray-300">SEASON</p>
                    <div className="p-2">
                      <div className="grid grid-cols-7 gap-1">
                        {colorOptions.map((option, index) => (
                          <div
                            key={index}
                            className={`w-4 h-4 rounded ${option.value} ${
                              selectedColor === option.value
                                ? "border-2 border-black"
                                : ""
                            }`}
                            onMouseEnter={() => setSelectedColor(option.value)}
                            onMouseLeave={() => setSelectedColor("")}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {ProductsData &&
              ProductsData.map((value, key) => {
                return (
                  <div
                    class={`h-72 w-72 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-sky-50 hover:bg-slate-100`}
                  >
                  <Link
  to={`/singleitem/${value._id}`}
>
  <div class="h-56">
    <img
      class="h-full w-full object-scale-down rounded-t-lg"
      src={`http://localhost:8000/static/images/${value.img}`}
      alt="product"
    />
  </div>
</Link>
                    <div class="px-5 pb-5">
                      <a href="#">
                        <h5 class="text-xl font-semibold tracking-tight text-gray-900">
                          {value.name}
                        </h5>
                      </a>

                      <div class="flex items-center justify-between">
                        <span class="text-xl font-bold text-gray-900">
                          ${value.price}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
