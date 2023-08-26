"use client";
import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import ClothBanner from "./ClothBanner";
import axios from "axios";
import Sidebar from "../Home/Sidebar";
import Card from "@/app/Share/Card/Card";

const Cloth = () => {
  const [products, setProducts] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);

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
    <div>
      <ClothBanner />
      <div className=" grid grid-cols-12 gap-4  ">
        {/* sidebar  */}
        <div className=" hidden md:block md:col-span-3 pt-2  ">
          <Sidebar />
        </div>
        {/* mainMenu */}
        <div className=" col-span-12 md:col-span-9  md:mx-0 bg-gray-100">
          <div className=" mx-8 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-3 mt-10">
            {products?.map((item) => (
              <Card item={item} />
            ))}
          </div>
          <div className=" mx-8 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-3 mt-10">
            {products?.map((item) => (
              <Card item={item} />
            ))}
          </div>{" "}
          <div className=" mx-8 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-3 mt-10">
            {products?.map((item) => (
              <Card item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloth;
