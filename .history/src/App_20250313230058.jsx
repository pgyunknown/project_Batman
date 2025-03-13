import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";


const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Characters" element={<Characters/>}></Route>
        <Route path="/Movies" element={<Movies/>}></Route>
      </Routes>
    </>
  );
}

export default App