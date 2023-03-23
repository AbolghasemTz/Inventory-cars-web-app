import React from 'react';
import { FaInfo,FaTrashAlt } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";


function CarList({cars}) {
    
    return (
     
        <div className="flex justify-center items-start mt-5 h-screen w-full ml-10">
        <table className="shadow-2xl border-2 border-gray-200  w-full">
          <thead className="text-white">
            <tr>
              <th className="py-3 bg-gray-200 text-gray-600">عکس</th>
              <th className="py-3 bg-gray-200 text-gray-600">برند</th>
              <th className="py-3 bg-gray-200 text-gray-600">مدل</th>
              <th className="py-3 bg-gray-200 text-gray-600">سال ساخت</th>
              <th className="py-3 bg-gray-200 text-gray-600">اطلاعات</th>
              <th className="py-3 bg-gray-200 text-gray-600">رنگ</th>
              <th className="py-3 bg-gray-200 text-gray-600">وضعیت</th>
              <th className="py-3 bg-gray-200 text-gray-600">تاریخ</th>
              <th className="py-3 bg-gray-200 text-gray-600">اقدامات</th>
            </tr>
          </thead>
         {cars.map((item,i) => (
           <tbody key={i} className="text-cyan-900 text-center mb-4">
           <tr className="bg-gray-50 cursor-pointer text-xs">
             <td className="py-3 px-6">عکس</td>
             <td className="py-3 px-6">{item.brand}</td>
             <td className="py-3 px-6">{item.model}</td>
             <td className="py-3 px-6">{item.make}</td>
             <td className="py-3 px-6">
               <FaInfo />
             </td>
             <td className="py-3 px-6">{item.color}</td>
             <td className={`py-3 px-6 ${item.status === "فروخته شده" ?'bg-red-400 text-white p-1':'bg-blue-400 text-white p-1'}`}>{item.status}</td>
             <td className="py-3 px-6">{new Date(item.createdAt).toLocaleDateString(
              "fa-IR",
           
            )}</td>
             <td className="py-3 px-6">
             <button className='text-blue-500 bg-blue-100 p-1 rounded-md' ><AiOutlineEdit size={19}/></button>
             <button className='mr-4 text-red-500 bg-red-100 p-1.5 rounded-md' ><FaTrashAlt size={16}/></button>

             </td>
           </tr>
         </tbody>
         ))}
        </table>
      </div>
    );
}

export default CarList;