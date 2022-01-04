import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import AuthProvider from "./Components/ContextApi/AuthProvider/AuthProvider";
import User from "./Pages/User/User";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/Login/PrivateRoute";
import ComingSoon from "./Pages/ComingSoon/ComingSoon";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/coming" element={<ComingSoon></ComingSoon>}></Route>
            <Route
              path="/user/:id"
              element={
                <PrivateRoute>
                  <User></User>
                </PrivateRoute>
              }
            ></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/admin" element={<Dashboard></Dashboard>}></Route>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home></Home>
                </PrivateRoute>
              }
            ></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
