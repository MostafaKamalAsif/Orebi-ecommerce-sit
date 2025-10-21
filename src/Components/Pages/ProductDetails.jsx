import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addtocart } from "../../Slices/AddToCart";
import { Button } from "../ui/button";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { product } = useLocation().state || {};

  if (!product) return <p>Product not found.</p>;

  const handleAddToCart = () => {
    dispatch(
      addtocart({
        title: product.title,
        price: product.price,
        img: product.img?.formats?.thumbnail?.url || product.image,
      })
    );
  };

  return (
    <div className="py-12 px-6 md:px-12 max-w-6xl m-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.img?.formats?.thumbnail?.url || product.image}
          alt={product.title}
          className="w-full md:w-1/2 object-contain rounded-lg"
        />

        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="text-xl font-semibold text-gray-700">${product.price}</p>
          <Button
            onClick={handleAddToCart}
            className="mt-6 font-semibold w-fit py-4 px-5 cursor-pointer"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
