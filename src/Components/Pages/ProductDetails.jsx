import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addtocart, increment, decrement } from "../../Slices/AddToCart";
import { Button } from "../ui/button";
import Image from "../Image";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { product } = useLocation().state || {};

  // 🔹 Local quantity state (for display before adding)
  const [quantity, setQuantity] = useState(1);

  // 🔹 Get all cart items to check if this product exists in cart
  const cartItems = useSelector((state) => state.addcart.value);
  const existingItem = cartItems.find((item) => item.title === product?.title);

  if (!product) return <p>Product not found.</p>;

  const handleAddToCart = () => {
    // Add to cart with the selected quantity
    for (let i = 0; i < quantity; i++) {
      dispatch(
        addtocart({
          title: product.title,
          price: product.price,
          img: product.img?.formats?.thumbnail?.url || product.image,
        })
      );
    }
  };

  // 🔹 Handle local quantity changes
  const handleLocalIncrement = () => setQuantity((prev) => prev + 1);
  const handleLocalDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="py-12 px-6 md:px-12 max-w-6xl m-auto">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <Image
          imgsrc={product.img?.formats?.thumbnail?.url || product.image}
          className="w-full md:w-1/2 object-contain rounded-lg"
        />

        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{product.title}</h2>
          <p className="text-xl font-semibold text-gray-700">${product.price}</p>

          {/* 🔹 Quantity Controls */}
          <div className="flex items-center gap-4 mt-3">
            <button
              onClick={handleLocalDecrement}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-lg font-medium">{quantity}</span>
            <button
              onClick={handleLocalIncrement}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>

          <p className="text-green-600 font-medium">
            {product.status || "In Stock"}
          </p>

          {/* Shipping Section */}
          <div className="mt-4">
            <h3 className="font-semibold">Shipping & Returns</h3>
            <p className="text-gray-600">
              Standard shipping within 5–7 business days. Returns accepted
              within 14 days.
            </p>
          </div>

          {/* Add to Cart */}
          <Button
            onClick={handleAddToCart}
            className="mt-6 font-semibold w-fit py-4 px-5 cursor-pointer"
          >
            Add to Cart
          </Button>

          {/* 🔹 Show Cart Quantity if already added */}
          {existingItem && (
            <p className="text-gray-600 mt-2">
              You have {existingItem.quantity} of this item in your cart.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
