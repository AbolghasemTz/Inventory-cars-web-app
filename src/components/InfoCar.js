import React from "react";
import { useLocation } from "react-router-dom";

function InfoCar() {
  const location = useLocation();
  const data = location.state?.data;

  return (
    <>
      <h1 className="text-center mb-6 mt-4 text-gray-800 text-3xl">
        اطلاعات خودرو
      </h1>
      <div className="w-[700px] bg-slate-600 m-auto mt-6 text-gray-200 rounded-xl p-2">
        <div className="mb-2 flex justify-between items-center">
          <p>برند: {data.brand}</p>
          <p>مدل: {data.model}</p>
        </div>
        <div className="mb-4 mt-4 flex justify-between items-center">
          <p>رنگ: {data.color}</p>
          <p>قیمت: {data.price} تومان</p>
        </div>
        <p>وضعیت: {data.status}</p>

        <p className="mt-4 leading-8">توضیحات: {data.description}</p>
      </div>
    </>
  );
}

export default InfoCar;
