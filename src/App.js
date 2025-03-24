import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListCars from "./ListCars";
import CreateCar from "./CreateCar";
import SingleCar from "./SingleCar";
import UpdateCar from "./UpdateCar";
import LoginPeople from "./LoginPeople";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="text-center p-4">

      <Navbar theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<ListCars theme={theme} />} />
        <Route path="/newcar" element={<CreateCar theme={theme} />} />
        <Route path="/car/:id" element={<SingleCar theme={theme} />} />
        <Route path="/updatecar/:id" element={<UpdateCar />} />
        <Route path="/login" element={<LoginPeople />} />
        <Route path="/hirdeteseim" element={<ListCars theme={theme} />} />
      </Routes>
    </div>
  );
}

export default App;
