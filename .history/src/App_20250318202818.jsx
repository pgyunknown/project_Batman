import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Movies from "./pages/Movies";
import About from "./pages/About";
import Footer from "./components/Footer";



const App = () => {
  return (
    <>
    <Header></Header>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Characters" element={<Characters/>}></Route>
        <Route path="/Movies" element={<Movies />}></Route>
        <Route path="/About" element={<About />}></Route>
        </Routes>
      <Footer></Footer>
    </>
  );
}

export default App