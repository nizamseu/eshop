import React from "react";

const ShortCart = () => {
  return (
    <div className="flex items-center border-b border-solid border-border-200 border-opacity-75 px-4 py-4 text-sm sm:px-6">
      <div class="flex-shrink-0">
        <div class="flex overflow-hidden flex-col-reverse items-center w-8 h-24 bg-gray-100 text-heading rounded-full">
          <button class="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-0 hover:!bg-gray-100">
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
          <div class="flex flex-1 items-center justify-center px-3 text-sm font-semibold !px-0 text-heading">
            1
          </div>
          <button
            class="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover focus:outline-0 hover:!bg-gray-100"
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
      </div>
      <div className="relative mx-4 flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden bg-gray-100 sm:h-16 sm:w-16">
        <img
          sizes="(max-width: 768px) 100vw"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            inset: " 0px",
            color: "transparent",
          }}
          src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2Fconversions%2FApples-thumbnail.jpg&w=1920&q=75"
          alt=""
        />
      </div>
      <div className=" flex justify-between items-center w-full">
        <div>
          <h3 class="font-bold text-heading">Apples </h3>
          <p class="my-2.5 font-semibold text-accent">$1.60</p>
          <span class="text-xs text-body">1 X 1lb</span>
        </div>
        <div className=" flex justify-between items-center">
          <p class="font-bold text-heading ltr:ml-auto rtl:mr-auto">$1.60</p>
          <button class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted transition-all duration-200 hover:bg-gray-100 hover:text-red-600 focus:bg-gray-100 focus:text-red-600 focus:outline-0 ltr:ml-3 ltr:-mr-2 rtl:mr-3 rtl:-ml-2">
            <span class="sr-only">close</span>
            <svg
              class="h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortCart;
