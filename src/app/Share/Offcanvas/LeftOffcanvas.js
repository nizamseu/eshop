import React from "react";
import ShortCart from "../Card/ShortCart";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { handleLeftOffset } from "@/app/redux/API_Slices/commonSlice";
import Sidebar from "@/app/Components/Home/Sidebar";
const LeftOffcanvas = () => {
  const isLeftOffset = useSelector((state) => state.commonSlice.isLeftOffset);
  const dispatch = useDispatch();
  return (
    <div className=" block md:hidden ">
      {isLeftOffset && (
        <div class="fixed z-10 overflow-y-auto top-0 w-full left-0 ">
          <div class="flex items-center justify-center min-height-[100vh] pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity">
              <div class="absolute inset-0 bg-gray-900 opacity-75" />
            </div>
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div class="inline-block align-center bg-white  text-left overflow-hidden shadow-xl transform transition-all  h-screen fixed left-0 top-0 leftt-0 w-[90%] ">
              <div className=" py-5  flex justify-between items-center px-5 mt-2 border-b">
                <img
                  src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1920&q=75"
                  class="h-8 mr-3 pb-2"
                  alt="Flowbite Logo"
                />
                <button onClick={() => dispatch(handleLeftOffset(false))}>
                  <RxCross2 size={30} />
                </button>
              </div>
              <div class=" no-scrollbar bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 h-screen overflow-y-scroll  ">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftOffcanvas;
