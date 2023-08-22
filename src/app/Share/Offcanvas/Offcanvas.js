import React from "react";
import ShortCart from "../Card/ShortCart";
import { RxCross2 } from "react-icons/rx";
const Offcanvas = ({ isShow, setIsShow }) => {
  return (
    <div className=" ">
      {isShow && (
        <div class="fixed z-10 overflow-y-auto top-0 w-full left-0 ">
          <div class="flex items-center justify-center min-height-[100vh] pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
              <div class="absolute inset-0 bg-gray-900 opacity-75" />
            </div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div class="inline-block align-center bg-white  text-left overflow-hidden shadow-xl transform transition-all  h-screen fixed top-0 right-0 w-96 ">
              <div className=" pb-2 flex justify-between items-center px-5 mt-2 border-b">
                <h1 className=" text-lg">Your Cart</h1>{" "}
                <button onClick={() => setIsShow(false)}>
                  <RxCross2 size={30} />
                </button>
              </div>
              <div class=" no-scrollbar bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 h-screen overflow-y-scroll  ">
                <ShortCart />
                <ShortCart />
                <ShortCart />
                <ShortCart />
                <ShortCart />
                <ShortCart />
                <ShortCart />
                <ShortCart />
                <ShortCart />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offcanvas;
