import Header from "./components/Header";
import Footer from "./components/Footer";
import Food from "./components/Food";
import Button from "./components/Button";
import ProgressBar from "./components/ProgressBar";
import React, { useState } from "react";
function App() {
  const [percentage, setPercentage] = useState(0);
  return (
    <>
      <Header />
      <Button />
      {/* <Food />
      <Food /> */}
      <ProgressBar />
      {/* <Footer /> */}
      <div>
        <input
          type="number"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          placeholder="Enter percentage"
        />

        <ProgressBar percentage={percentage} />
      </div>
    </>
  );
}

export default App;
