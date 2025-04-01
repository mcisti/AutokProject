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
  const [logged, setLogged] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (token) {
      setLogged(true)
    }
  }, [token])


  return (
    <div className="text-center p-4">

      <Navbar theme={theme} setTheme={setTheme} logged={logged} setLogged={setLogged}/>

      <Routes>
        <Route path="/" element={<ListCars logged={logged} theme={theme} />} />
        <Route path="*" element={<ListCars logged={logged} theme={theme} />} />
        <Route path="/newcar" element={<CreateCar logged={logged} theme={theme} />} />
        <Route path="/car/:id" element={<SingleCar theme={theme} />} />
        <Route path="/updatecar/:id" element={<UpdateCar logged={logged}/>} theme={theme} />
        <Route path="/login" element={<LoginPeople logged={logged} setLogged={setLogged} theme={theme} />} />
        <Route path="/hirdeteseim" element={<ListCars logged={logged} theme={theme} />} />
      </Routes>
    </div>
  );
}

export default App;
