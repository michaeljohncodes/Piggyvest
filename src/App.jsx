import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./static/Header";
import Footer from "./static/Footer";
import Invest from "./pages/Invest";
import Stories from "./pages/Stories";
import FAQs from "./pages/FAQs";
import Resources from "./pages/Resources";
import Home from "./pages/Home";
import PiggyBank from "./pages/Piggybank";
import SignIn from "./pages/SignIn";

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
          <Route path="/SignIn" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
