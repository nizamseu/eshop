"use client";
import Image from "next/image";
import Banner from "./Components/Banner/Banner";
import Card from "./Share/Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import Offcanvas from "./Share/Offcanvas/Offcanvas";
import Sidebar from "./Components/Home/Sidebar";
import ProductModal from "./Share/Modal/ProductModal";
export default function Home({ children }) {
  const cartData = useSelector((state) => state.cartSlice.cartData);
  const isShow = useSelector((state) => state.commonSlice.isCartShow);
  const [products, setProducts] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  console.log("isShow", isShow);
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

  const handleCloseModal = () => {
    setIsShowModal(false);
  };
  const handleOpenModal = (e) => {
    e.stopPropagation();
    setIsShowModal(true);
  };
  return (
    <main>
      {isShowModal && (
        <ProductModal
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          onClose={handleCloseModal}
        ></ProductModal>
      )}
      {isShow && <Offcanvas />}
      <Banner></Banner>
      <div className=" grid grid-cols-12 gap-4  ">
        {/* sidebar  */}
        <div className=" col-span-2  ">
          <Sidebar />
        </div>
        {/* mainMenu */}
        <div className=" col-span-10">
          {" "}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-3 mt-10">
            {products?.map((item) => (
              <Card item={item} handleOpenModal={handleOpenModal} />
            ))}
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-3 mt-10">
            {products?.map((item) => (
              <Card item={item} />
            ))}
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-3 mt-10">
            {products?.map((item) => (
              <Card item={item} />
            ))}
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]  gap-3 mt-10">
            {products?.map((item) => (
              <Card item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
