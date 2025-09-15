import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/loginPage/loginPage";
import StartupPage from "./components/pages/startupPage/startupPage";
import TestPage from "./components/pages/testPage/testPage";
import ProfilePage from "./components/pages/profilePage/ProfilePage";

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
        <Route path="profile" element={<ProfilePage />} />

      </Routes>

      <Navbar />
    </>
  );
}

export default App;
