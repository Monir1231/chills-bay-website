import "./App.css";
import MyNavbar from "./Component/Navbar";
import Home from "./Component/Home/Index";
import Footer from "./Component/Footer";
import DrinkPage from "./Component/Drinkpage/Drink";
import ClubPage from "./Component/ClubPage/ClubPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPayment from "./Component/Payment/Payment"



function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
           <Route path="/drink" element={<DrinkPage/>} ></Route>
           <Route path="/club" element={<ClubPage/>}></Route>
           <Route path="/cart" element={<MyPayment/>}></Route>
        
        </Routes>
        <Footer />
      </BrowserRouter>

      
    </>
  );
}

export default App;
