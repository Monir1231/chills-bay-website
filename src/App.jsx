import "./App.css";
import MyNavbar from "./Component/Navbar";
import Home from "./page/Home/Index";
import Footer from "./Component/Footer";
import DrinkPage from "./page/Drinkpage/Drink";
import ClubPage from "./page/ClubPage/ClubPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPayment from "./page/Payment/Payment"
import Contact from "./page/Contact/Contact";



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
           <Route path="/contact" element={<Contact/>}></Route>

          
        
        </Routes>
        <Footer />
      </BrowserRouter>

      
    </>
  );
}

export default App;
