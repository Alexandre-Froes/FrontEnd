import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Calculadora from "./components/Calculadora/Calculadora";
import Conversor from "./components/Conversor/Conversor";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import FaleConosco from "./components/FaleConosco/FaleConosco";

function App() {
  return (
    <>
      <BrowserRouter>
          <Header/>

          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/calculadora" element={<Calculadora/>}></Route>
            <Route path="/conversor" element={<Conversor/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/faleConosco" element={<FaleConosco/>}></Route>
          </Routes>
      </BrowserRouter>

      <Footer></Footer>
    </>
  )
}

export default App
