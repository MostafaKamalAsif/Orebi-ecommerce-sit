import React, { useEffect, useState } from 'react'

import { useSelector } from "react-redux";
const Toast = () => {
     const lastAdded = useSelector((state) => state.addcart.lastAdded);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (lastAdded) {
      setToast(lastAdded);
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [lastAdded]);

  if (!toast) return null;
  return (
    <div className="fixed bottom-5 right-5 bg-white shadow-xl border border-gray-200 rounded-lg p-3 flex items-center gap-3 animate-slide-in z-[999]">
      <img src={toast.img || toast.image} alt={toast.title} className="w-10 h-10 rounded-md object-cover" />
      <div>
        <p className="text-[14px] font-semibold text-gray-800">{toast.title}</p>
        <p className="text-[12px] text-green-600 font-medium">Added to cart successfully!</p>
      </div>
      <style>
        {`
        @keyframes slideIn {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in { animation: slideIn 0.4s ease-out forwards; }
        `}
      </style>
    </div>
  );
};

export default Toast