"use client";
import React from "react";
import { useRouter } from "next/navigation";

const ClothBanner = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/search", { scroll: false });
  };
  return (
    <div className="relative h-screen w-full">
      <img
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: "0px",
          color: "transparent",
        }}
        sizes="(max-width: 768px) 100vw"
        src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F908%2Fcloths.png&w=1920&q=75"
        alt=""
        className=" h-full min-h-140 w-full object-cover"
      />
      <div className="absolute inset-0 mt-8 flex w-full flex-col items-center justify-center p-5 text-center md:px-20 lg:space-y-10">
        <h1 class="text-2xl font-bold tracking-tight text-heading lg:text-4xl xl:text-5xl">
          Shop your designer dresses
        </h1>
        <p class="text-sm text-heading lg:text-base xl:text-lg text-gray-500">
          Ready to wear dresses tailored for you online. Hurry up while stock
          lasts.
        </p>
        <div class="w-full max-w-3xl shadow-lg rounded-l-xl mt-5 md:mt-0 ">
          <form onSubmit={handleSubmit} class="w-full">
            <div class="relative flex rounded md:rounded-lg h-14 shadow-900">
              <label for="search" class="sr-only">
                search
              </label>
              <input
                type="text"
                autocomplete="off"
                class=" pl-4  item-center flex h-full w-full appearance-none overflow-hidden truncate rounded-lg text-sm text-heading placeholder-gray-500 transition duration-300 ease-in-out focus:outline-0 focus:ring-0 bg-light ltr:pl-6 rtl:pr-6 ltr:pr-14 rtl:pl-14 ltr:rounded-tr-none rtl:rounded-tl-none ltr:rounded-br-none rtl:rounded-bl-none  border ltr:border-r-0 rtl:border-l-0 border-transparent focus:border-accent"
                name="search"
                placeholder="Search your products from here"
              />
              <button
                type="submit"
                class=" text-white bg-[#019376] flex h-full min-w-[143px] items-center justify-center rounded-lg bg-accent px-8 font-semibold text-light transition-colors duration-200 hover:bg-accent-hover focus:bg-accent-hover focus:outline-0 ltr:rounded-tl-none ltr:rounded-bl-none rtl:rounded-tr-none rtl:rounded-br-none"
              >
                <svg
                  viewBox="0 0 17.048 18"
                  class="h-4 w-4 ltr:mr-2.5 rtl:ml-2.5"
                >
                  <path
                    d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z"
                    transform="translate(-367.297 -371.285)"
                    fill="currentColor"
                  ></path>
                </svg>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClothBanner;
