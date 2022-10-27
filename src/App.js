import React from "react";
import Footer from "./components/Footer/Footer";
import TopHeader from "./components/TopHeader/TopHeader";
import Home from "./pages/Home";
import "./sass/global.scss";

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
