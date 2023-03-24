import React from "react";
import { AiOutlineFolderAdd } from "react-icons/ai";

function Navbar({ setOpenModal, onSort, sort, onSearch, search }) {
  return (
    <div className="flex justify-between items-center mt-6 mb-4 shadow-md py-4 px-2 bg-slate-300">
      <div className="text-white">
        <div className="flex items-center justify-between mb-6">
          <select
            name="sort-products"
            onChange={onSort}
            value={sort}
            className="bg-transparent text-slate-400 rounded-xl "
          >
            <option className="bg-slate-500 text-slate-400 " value="">
              انتخاب کنید
            </option>
            <option className="bg-slate-500 text-slate-400 " value="latest">
              جدیدترین
            </option>
            <option className="bg-slate-500 text-slate-400 " value="earliest">
              قدیمی ترین
            </option>
          </select>
        </div>
      </div>
      <div>
        <input
          type="text"
          name="search"
          value={search}
          onChange={onSearch}
          className="border-1 border-gray-400 rounded-lg w-96 placeholder:text-sm placeholder:text-gray-600"
          placeholder="جستو جو ماشین ..."
        />
      </div>

      <div
        onClick={() => setOpenModal(true)}
        className="flex cursor-pointer justify-center items-center border-1 border-white bg-blue-700 text-white text-sm p-2 rounded-md"
      >
        <button className="ml-2">اضافه کردن</button>
        <AiOutlineFolderAdd size={22} />
      </div>
    </div>
  );
}

export default Navbar;
