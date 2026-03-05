import "./App.css";
import MyNavbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import DrinkPage from "./page/Drinkpage/Drink";
import ClubPage from "./page/ClubPage/ClubPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPayment from "./page/Payment/Payment"
import Contact from "./page/Contact/Contact";
import Wrapper from "./Component/Wrapper";
import HomePage from "./page/Home/Index";




function App() {
  return (
    <>
      <BrowserRouter>
        {/* <MyNavbar /> */}
        <Routes>
          <Route path="/" element={<Wrapper><HomePage/></Wrapper>} />
           <Route path="/drink" element={<Wrapper><DrinkPage/></Wrapper>} />
           <Route path="/club" element={<Wrapper isDark><ClubPage/></Wrapper>}/>
           <Route path="/cart" element={<Wrapper><MyPayment/></Wrapper>}/>
           <Route path="/contact" element={<Wrapper><Contact/></Wrapper>}/>

          
        
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>

      
    </>
  );
}

export default App;
