import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CarList from "./components/CarList";
import Cars from "./components/Cars";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  const [cars, setCars] = useState([]);
  const [openModal,setOpenModal] = useState(false);
  console.log(cars);
  return (
    <div>
      <section className="flex justify- gap-6">
        <SideBar />
        <div className="w-full ml-5">
          <Navbar openModal={openModal} setOpenModal={setOpenModal}/>
          <Routes>
            <Route path="/cars" element={<CarList cars={cars}/>} />
          </Routes>
           <Cars openModal={openModal} setOpenModal={setOpenModal} cars={cars} setCars={setCars} />
        </div>
      </section>
    </div>
  );
}

export default App;
