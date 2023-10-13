import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Routerzz } from "./Routers/Routerzz";
import { Footer } from "./components/Footer";
function App() {
  const [loader, setloader] = useState(false);
  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      {loader ? (
        <span className="wrapper">
          <div class="banter-loader">
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
  <div class="banter-loader__box"></div>
</div>
        </span>
      ) : (
        <>
          <Navbar />
          <Routerzz />
          <Footer />
        </>
      )}
    </React.Fragment>
  );
}

export default App;
