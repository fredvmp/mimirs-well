import { useState } from "react";
import SignUpPanel from "./components/panels/SignUpPanel/SignUpPanel";
import { Rain } from "./components/rain/Rain";
import styles from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/loginPage/loginPage";
import StartupPage from "./components/pages/startupPage/startupPage";


function App() {
  return (
    <>
      
      <Routes>

        <Route 
          index
          element={<StartupPage />}
        />

        <Route 
          path="login"
          element={<LoginPage />}
        />

        
        
      </Routes>

      <Navbar />

        
    </>
  );
}

export default App;
