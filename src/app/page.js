"use client";
import Image from "next/image";
import Banner from "./Components/Banner/Banner";
import Card from "./Share/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const cartData = useSelector((state) => state.cartSlice.cartData);
  const [products, setProducts] = useState([]);
  console.log("cartData", cartData);
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
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-3 mt-10">
        {products?.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </main>
  );
}
