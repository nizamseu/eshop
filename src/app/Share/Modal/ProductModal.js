import ProductDetails from "@/app/Components/Product/ProductDetails";
import { handleProductModal } from "@/app/redux/API_Slices/commonSlice";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

const ProductModal = ({}) => {
  const modalRef = useRef();
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(handleProductModal(false));
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleClickListener = (event) => {
      handleOutsideClick(event);
    };

    document.addEventListener("mousedown", handleClickListener);
    return () => {
      document.removeEventListener("mousedown", handleClickListener);
    };
  }, [onClose]);

  return (
    <div>
      <div class="fixed z-50 overflow-y-auto top-0 w-full left-0">
        <div class="flex items-center justify-center h-screen overflow-y-scroll min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            ref={modalRef}
            class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-full"
          >
            <ProductDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
