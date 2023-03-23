import React from 'react';
import { AiOutlineFolderAdd } from "react-icons/ai";

function Navbar({setOpenModal,openModal}) {
    return (
        <div className='flex justify-between items-center mt-6 mb-4'>
            <div>
                filters
             </div>
             <div>
                <input type="search" placeholder='جستو جو ماشین ...'/>
             </div>
             
             <div onClick={() => setOpenModal(true)}  className='flex cursor-pointer justify-center items-center border-1 border-white bg-blue-700 text-white text-sm p-2 rounded-md'>
                <button
                className='ml-2'>اضافه کردن</button>
                <AiOutlineFolderAdd size={22}/>
             </div>
        </div>
    );
}

export default Navbar;