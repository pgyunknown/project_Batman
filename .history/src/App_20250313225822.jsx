import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";


const App = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" import={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App