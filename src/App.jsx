import "./App.css";
import MyNavbar from "./Component/Navbar";
import Home from "./Component/Home/Index";
import Footer from "./Component/Footer";
import DrinkPage from "./Component/Drinkpage/Drink";
import ClubPage from "./Component/ClubPage/ClubPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
           <Route path="/drink" element={<DrinkPage/>} ></Route>
           <Route path="/club" element={<ClubPage/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

      
    </>
  );
}

export default App;
