import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CarList from "./components/CarList";
import Cars from "./components/Cars";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [sortedValue, setSortedValue] = useState("latest");
  const [search, setSearch] = useState("");
  console.log(filteredCars);

  useEffect(() => {
    let result = cars;
    result = sortData(result);
    result = filterSearchBrand(result);
    setFilteredCars(result);
  }, [cars, sortedValue,search]);

  const sortHandler = (e) => {
    setSortedValue(e.target.value);
  };

  const sortData = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sortedValue === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sortedValue === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  const searchHandler = ({target}) => {
    setSearch(target.value.toLowerCase().trim());

  };

  const filterSearchBrand = (array) => {
    return array.filter((p) => p.brand.toLowerCase().includes(search));
  };
  return (
    <div>
      <section className="flex justify- gap-6">
        <SideBar />
        <div className="w-full ml-5">
          <Navbar
            openModal={openModal}
            setOpenModal={setOpenModal}
            onSort={sortHandler}
            sort={sortedValue}
            onSearch={searchHandler}
            search={search}
          />
          <Routes>
            <Route
              path="/cars"
              element={<CarList cars={filteredCars} setCars={setCars} />}
            />
          </Routes>
          <Cars
            openModal={openModal}
            setOpenModal={setOpenModal}
            cars={cars}
            setCars={setCars}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
