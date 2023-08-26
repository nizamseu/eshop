import React from "react";
import ShortCart from "../Card/ShortCart";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { handleIsCartShow } from "@/app/redux/API_Slices/commonSlice";
const Offcanvas = () => {
  const isShow = useSelector((state) => state.commonSlice.isCartShow);
  const dispatch = useDispatch();
  return (
    <div className=" ">
      {isShow && (
        <div class="fixed z-50 overflow-y-auto top-0 w-full left-0 ">
          <div class="flex items-center justify-center min-height-[100vh] pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
              <div class="absolute inset-0 bg-gray-900 opacity-75" />
            </div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div class="inline-block align-center bg-white  text-left overflow-hidden shadow-xl transform transition-all  h-screen fixed top-0 right-0 w-[90%] md:w-96 ">
              <div className=" py-5 flex justify-between items-center px-5 mt-2 border-b">
                <img
                  src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1920&q=75"
                  class="h-8 mr-3 pb-2"
                  alt="Flowbite Logo"
                />
                <button onClick={() => dispatch(handleIsCartShow(false))}>
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
              <footer class=" bg-white fixed bottom-0 z-10 w-full max-w-md bg-light px-6 py-5">
                <button class=" bg-emerald-400 text-white flex h-12 w-full justify-between rounded-full bg-accent p-1 text-sm font-bold shadow-700 transition-colors hover:bg-accent-hover focus:bg-accent-hover focus:outline-0 md:h-14">
                  <span class="flex h-full flex-1 items-center px-5 text-light">
                    Checkout
                  </span>
                  <span class="flex h-full shrink-0 items-center rounded-full bg-light px-5 text-accent">
                    $39.15
                  </span>
                </button>
              </footer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offcanvas;
