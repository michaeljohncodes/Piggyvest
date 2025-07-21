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
import TargetSavings from "./pages/TargetSavings";
import FlexDollar from "./pages/FlexDollar";
import SafeLock from "./pages/SafeLock";
import FlexNaira from "./pages/FlexNaira";
import HouseMoney from "./pages/HouseMoney";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Piggybank" element={<PiggyBank />} />
          <Route path="/TargetSavings" element={<TargetSavings />} />
          <Route path="/FlexDollar" element={<FlexDollar />} />
          <Route path="/SafeLock" element={<SafeLock />} />
          <Route path="/FlexNaira" element={<FlexNaira />} />
          <Route path="/HouseMoney" element={<HouseMoney />} />
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
