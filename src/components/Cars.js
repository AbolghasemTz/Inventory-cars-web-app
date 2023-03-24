import React, { useState } from "react";
import Modal from "./Modal";

function Cars({ cars, setCars, openModal, setOpenModal }) {

  const [carsFormData, setCarsFormData] = useState({
    image: "",
    brand: "",
    model: "",
    make: "",
    color: "",
    status: "",
  });

  const changeHandler = ({ target }) => {
    const { name, value } = target;
    setCarsFormData({ ...carsFormData, [name]: value });
  };
  const addNewCar = (e) => {
    e.preventDefault();
    setCars([
      ...cars,
      {
        ...carsFormData,
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
      },
    ]);
    setCarsFormData({
      brand: "",
      model: "",
      make: "",
      color: "",
      status: "",
    });
    setOpenModal(false);
  };

  return (
    <>
      <Modal open={openModal} onClose={setOpenModal}>
        <div>
          <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-1 w-[400px]">
            <div>
              <label
                htmlFor="car-name"
                className="block mb-1 text-slate-400 text-sm"
              >
                برند
              </label>
              <input
                type="text"
                name="brand"
                value={carsFormData.brand}
                onChange={changeHandler}
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="car-name"
                className="block mb-1 text-slate-400 text-sm"
              >
                مدل
              </label>
              <input
                type="text"
                name="model"
                value={carsFormData.model}
                onChange={changeHandler}
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="car-name"
                className="block mb-1 text-slate-400 text-sm"
              >
                سال ساخت
              </label>
              <input
                type="number"
                name="make"
                value={carsFormData.make}
                onChange={changeHandler}
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="car-name"
                className="block mb-1 text-slate-400 text-sm"
              >
                رنگ
              </label>
              <input
                type="text"
                name="color"
                value={carsFormData.color}
                onChange={changeHandler}
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              />
            </div>
            <div>
              <label
                htmlFor="car-name"
                className="block mb-1 text-slate-400 text-sm"
              >
                وضعیت
              </label>
              <input
                type="text"
                name="status"
                value={carsFormData.status}
                onChange={changeHandler}
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              />
            </div>
            <div className="flex items-center justify-between gap-x-2">
              <button
                className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-1 mt-1"
                onClick={addNewCar}
              >
                اضافه کردن ماشین
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default Cars;
