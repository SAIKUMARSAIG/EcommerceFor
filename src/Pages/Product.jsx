import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext.jsx";

const Product = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const { products, currency } = useContext(ShopContext); // Access products from context

  // Find the product by ID
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const foundProduct = products.find((item) => item._id === id);
    setProduct(foundProduct);
  }, [id, products]);

  // If product is not found
  if (!product) {
    return (
      <div className="text-center text-gray-700 mt-10">
        <h1 className="text-2xl font-semibold">Product Not Found</h1>
      </div>
    );
  }

  // Destructure product details
  const {
    name,
    description,
    price,
    image,
    category,
    subCategory,
    sizes,
    bestseller,
  } = product;

  return (
    <div className="p-5 md:p-10">
      <hr className="inline-block my-4 h-5 w-full" />
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={image[0]}
            alt={name}
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-slate-800">{name}</h1>
          {bestseller && (
            <span className="px-3 py-1 bg-yellow-400 text-white text-sm rounded-md w-max">
              Best Seller
            </span>
          )}
          <p className="text-gray-700">{description}</p>
          <p className="text-lg text-slate-700">
            <strong>Category:</strong> {category} / {subCategory}
          </p>
          <p className="text-lg text-slate-700">
            <strong>Sizes:</strong>
            {sizes.map((size, index) => (
              <button
                key={index}
                className="text-white bg-slate-600 mx-1 px-2 py-1 rounded"
              >
                {size}
              </button>
            ))}
          </p>

          <p className="text-2xl font-semibold text-slate-800">
            {currency}
            {price}
          </p>

          {/* Add to Cart Button */}
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-500 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
