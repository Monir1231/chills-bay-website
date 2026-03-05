import "./App.css";
import DrinkPage from "./page/Drinkpage/Drink";
import ClubPage from "./page/ClubPage/ClubPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPayment from "./page/Payment/Payment";
import Contact from "./page/Contact/Contact";
import Wrapper from "./Component/Wrapper";
import Home from "./page/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Wrapper>
                <Home />
              </Wrapper>
            }
          />
          <Route
            path="/drink"
            element={
              <Wrapper>
                <DrinkPage />
              </Wrapper>
            }
          />
          <Route
            path="/club"
            element={
              <Wrapper isDark>
                <ClubPage />
              </Wrapper>
            }
          />
          <Route
            path="/cart"
            element={
              <Wrapper>
                <MyPayment />
              </Wrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <Wrapper>
                <Contact />
              </Wrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
