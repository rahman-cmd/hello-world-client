import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
