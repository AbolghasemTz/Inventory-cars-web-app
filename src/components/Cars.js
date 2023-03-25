import React, { useState } from "react";
import Modal from "./Modal";

function Cars({ cars, setCars, openModal, setOpenModal }) {
  const [carsFormData, setCarsFormData] = useState({
    brand: "",
    model: "",
    make: "",
    color: "",
    status: "",
    price: "",
    description: "",
  });
  console.log(carsFormData);

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
          <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-1 w-[500px] ">
          <div>
              <div className="flex justify-between items-center mb-2">
           
              <input
                type="text"
                name="brand"
                value={carsFormData.brand}
                onChange={changeHandler}
                placeholder="برند"
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-52"
              />

             
              <input
                type="text"
                name="model"
                value={carsFormData.model}
                onChange={changeHandler}
                placeholder="مدل"

                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-52"
              />
            </div>


          </div>
            <div className="flex justify-between items-center mb-2">
          
              <input
                type="number"
                name="make"
                value={carsFormData.make}
                onChange={changeHandler}
                placeholder="سال ساخت"

                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-52"
              />
            
              <input
                type="text"
                name="color"
                value={carsFormData.color}
                onChange={changeHandler}
                placeholder="رنگ"

                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-52"
              />
            </div>
            
            <div className="flex justify-between items-center mb-2">
            
           
            
              <input
                type="text"
                name="status"
                value={carsFormData.status}
                onChange={changeHandler}
                placeholder="وضعیت"

                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-52"
              />
            
              <input
                type="text"
                name="price"
                placeholder="قیمت"

                value={carsFormData.price}
                onChange={changeHandler}
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-52"
              />
            </div>

          
            <div>
              <label
                htmlFor="car-name"
                className="block mb-1 text-slate-400 text-sm"
              >
                توضیحات
              </label>
              <textarea
                type="text"
                name="description"
                value={carsFormData.description}
                onChange={changeHandler}
                placeholder="توضیحات"

                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              ></textarea>
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
