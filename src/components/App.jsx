import Login from "pages/Login/Login";
import Register from "pages/Register/Register";
import { useSelector } from "react-redux";
import {  Route, Routes } from "react-router-dom";
import Exit from "./Exit";

export const App = () => {
  const loged = useSelector(state=> state.auth.token)
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path="/" element={loged?<Exit/>:<Login/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Routes>
      
    </div>
  );
};
