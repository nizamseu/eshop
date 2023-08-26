import { addToCart } from "@/app/redux/API_Slices/cartSlice";
import { handleProductModal } from "@/app/redux/API_Slices/commonSlice";
import React from "react";
import { useDispatch } from "react-redux";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddProduct = (e, data) => {
    e.stopPropagation();

    dispatch(addToCart(data));
  };
  const handleCardButton = (e) => {
    e.stopPropagation();
  };
  const handleOpenModal = (e) => {
    e.stopPropagation();
    dispatch(handleProductModal(true));
  };
  return (
    <button
      onClick={(e) => handleOpenModal(e)}
      className=" bg-white product-card cart-type-neon h-full transform overflow-hidden rounded border border-border-200 bg-light shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow"
    >
      <div className="relative flex h-48 w-auto cursor-pointer items-center justify-center sm:h-64">
        <span class="sr-only">Product Image</span>
        <img
          className="product-image object-contain"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: "0px",
            color: "transparent",
          }}
          sizes="(max-width: 768px) 100vw"
          src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F254%2Fallegro_bbq_sauce.jpg&w=1920&q=75"
          alt=""
        />
      </div>
      <header class="p-3 md:p-6">
        <div class="mb-2 flex items-center">
          <span class="text-sm font-semibold text-heading md:text-base">
            $10.00
          </span>
        </div>
        <h3 class="mb-4 cursor-pointer truncate text-xs text-body md:text-sm">
          Allegro Bbq Sauce
        </h3>
        <div
          onClick={handleCardButton}
          class=" z-10 group flex overflow-hidden w-full h-7 md:h-9 bg-accent text-light rounded bg-gray-200 hover:bg-[#009F7F] text-gray-400 hover:text-white "
        >
          <button class="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-0">
            <span class="sr-only">minus</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-3 w-3 stroke-2.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20 12H4"
              ></path>
            </svg>
          </button>
          <div class="flex flex-1 items-center justify-center px-3 text-sm font-semibold">
            1
          </div>
          <button
            onClick={(e) => handleAddProduct(e, item)}
            class=" bg-gray-300 group-hover:bg-[#038369] cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-0"
            title=""
          >
            <span class="sr-only">plus</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </button>
  );
};

export default Card;
