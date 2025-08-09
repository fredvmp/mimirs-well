import { useState } from "react";
import SignUpPanel from "./components/panels/SignUpPanel/SignUpPanel";
import { Rain } from "./components/rain/Rain";
import styles from "./App.module.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      
      <div className={styles.mainWindow}>
        <Navbar />

        <div className={styles.rainContainer}>
          <Rain />
          <SignUpPanel />
        </div> 
        
      </div>
    </>
  );
}

export default App;
