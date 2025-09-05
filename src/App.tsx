import { useState, useEffect } from "react";
import SignUpPanel from "./components/panels/SignUpPanel/SignUpPanel";
import { Rain } from "./components/rain/Rain";
import styles from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/loginPage/loginPage";
import StartupPage from "./components/pages/startupPage/startupPage";
import TestPage from "./components/pages/testPage/testPage";

function App() {

  const [users, setUsers] = useState([])
 
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<StartupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="pruebas" element={<TestPage />} />

      </Routes>

      <Navbar />
    </>
  );
}

export default App;
