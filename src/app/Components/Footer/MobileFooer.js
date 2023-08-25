import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { BsFilterLeft } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { BsBagHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  handleIsCartShow,
  handleLeftOffset,
  handleMobileSearch,
} from "@/app/redux/API_Slices/commonSlice";
import LeftOffcanvas from "@/app/Share/Offcanvas/LeftOffcanvas";

const MobileFooer = () => {
  const dispatch = useDispatch();
  const isLeftOffset = useSelector((state) => state.commonSlice.isLeftOffset);
  const isMobileSearch = useSelector(
    (state) => state.commonSlice.isMobileSearch
  );
  return (
    <>
      {isLeftOffset && <LeftOffcanvas />}
      <div class="w-full h-screen block md:hidden ">
        <section
          id="bottom-navigation"
          class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
        >
          <div id="tabs" class="flex justify-between shadow-md pb-2 border-t">
            <button
              onClick={() => dispatch(handleLeftOffset(true))}
              class=" mb-1 w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              <BsFilterLeft className="inline-block mb-1" size={40} />
            </button>
            <button
              onClick={() => dispatch(handleMobileSearch(!isMobileSearch))}
              class=" mb-1 w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              <AiOutlineSearch className="inline-block mb-1" size={35} />
              <p class="tab tab-explore block text-xs">Search</p>
            </button>
            <button class=" mb-1 w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <AiFillHome className="inline-block mb-1" size={35} />
              <p class="tab tab-explore block text-xs">Home</p>
            </button>
            <button
              onClick={() => dispatch(handleIsCartShow(true))}
              class=" mb-1 w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              <BsFillCartCheckFill className="inline-block mb-1" size={35} />
              <p class="tab tab-explore block text-xs">Cart</p>
            </button>
            <button class=" mb-1 w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
              <MdAccountCircle className="inline-block mb-1" size={35} />
              <p class="tab tab-explore block text-xs">Account</p>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default MobileFooer;
