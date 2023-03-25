import React, { useState } from 'react';
import {HiMenuAlt2} from 'react-icons/hi'
import {MdOutlineDashboard,MdSell} from 'react-icons/md'
import {FaCarSide} from 'react-icons/fa'
import {GiCarKey} from 'react-icons/gi'
import { Link } from 'react-router-dom';
function SideBar(props) {
    const menus = [
        {name:"داشبورد",link:"#",icon:MdOutlineDashboard},
        {name:"ماشین ها",link:"/",icon:FaCarSide},
        {name:"ماشین های موجود",link:"/active",icon:GiCarKey},
        {name:"ماشین فروخته شده",link:"/sold",icon:MdSell},
    ]

    const [open,setOpen] = useState(true);
    return (
        <div className={`bg-slate-700  min-h-screen ${open ? 'w-72' : "w-16"} duration-500 text-gray-100 px-4`}>
            <div className='py-3 flex justify-end'>
                <HiMenuAlt2 size={26} className="cursor-pointer" onClick={() => setOpen(!open)}/>
            </div>
            <div className='mt-6 flex flex-col gap-4 relative'>
              {menus?.map((menu,i) => (
                  <Link to={menu?.link} key={i} className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md" >
                  <div>
                    {React.createElement(menu?.icon,{size:"20"})}
                  </div>
                    <h2
                    style={{transitionDelay:`${i +3}00ms`}}
                    className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>{menu?.name}</h2>
                </Link>
              ))}
               
            </div>
            
        </div>
    );
}

export default SideBar; 