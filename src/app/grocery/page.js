"use client";
import Image from "next/image";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

import Glider from "react-glider";
import "glider-js/glider.min.css";
import Banner from "../Components/Banner/Banner";
import MidiumCard from "../Share/Card/MidiumCard";
import Sidebar from "../Components/Home/Sidebar";
import Card from "../Share/Card/Card";

export default function page({ children }) {
  const cartData = useSelector((state) => state.cartSlice.cartData);
  const isShow = useSelector((state) => state.commonSlice.isCartShow);
  const [products, setProducts] = useState([]);
  const isShowModal = useSelector((state) => state.commonSlice.isShowModal);

  useEffect(() => {
    const loadData = async () => {
      const res4 = await axios(
        `https://admin.iou.ac/api/v1/public_course_top_pics/ `,
        {
          method: "GET",
        }
      )
        .then((res) => {
          setProducts(res?.data?.results);
          console.log(res);
        })
        .catch((err) => {});
    };
    loadData();
  }, []);

  return (
    <main>
      {/* {isShowModal && <ProductModal></ProductModal>}
      {isShow && <Offcanvas />} */}
      <Banner></Banner>

      <div className=" mx-5 mt-5 ">
        <Glider
          draggable
          slidesToShow={3}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1.1,
              },
            },
            {
              breakpoint: 425,
              settings: {
                slidesToShow: 1.2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 2.3,
              },
            },
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 3.3,
              },
            },
            {
              breakpoint: 1560,
              settings: {
                slidesToShow: 3.5,
              },
            },
          ]}
        >
          {[...Array(5)]?.map((item) => (
            <div className=" mx-2">
              <MidiumCard />
            </div>
          ))}
        </Glider>
      </div>

      <div className=" grid grid-cols-12 gap-4  ">
        {/* sidebar  */}
        <div className=" hidden md:block md:col-span-3 pt-2  ">
          <Sidebar />
        </div>
        {/* mainMenu */}
        <div className=" bg-gray-100 col-span-12 md:col-span-9  mx-2 md:mx-0">
          <div className="mx-4 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-3 mt-10">
            {products?.map((item) => (
              <Card item={item} />
            ))}
          </div>
          <div className="mx-4 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-3 mt-10">
            {products?.map((item) => (
              <Card item={item} />
            ))}
          </div>
          <div className="mx-4 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-3 mt-10">
            {products?.map((item) => (
              <Card item={item} />
            ))}
          </div>
          <div className="mx-4 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-3 mt-10">
            {products?.map((item) => (
              <Card item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
