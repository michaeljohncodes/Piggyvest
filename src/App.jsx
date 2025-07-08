import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./static/Header";
import Footer from "./static/Footer";
import PiggyBank from "./pages/PiggyBank";
import Invest from "./pages/Invest";
import Stories from "./pages/Stories";
import FAQs from "./pages/FAQs";
import Resources from "./pages/Resources";
import Sign_in from "./pages/Sign_in";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Piggybank" element={<PiggyBank />} />
          <Route path="/Invest" element={<Invest />} />
          <Route path="/Stories" element={<Stories />} />
          <Route path="/FAQs" element={<FAQs />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Sign_in" element={<Sign_in />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
