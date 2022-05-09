import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Promotions from "./pages/Promotions";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SkinNeedling from "./pages/treatment-menu-pages/Skin-Needling.jsx";
import PriceList from './pages/treatment-menu-pages/Price-list';
import LedLightTherapy from './pages/treatment-menu-pages/LED-light-therapy';
import ChemicalPeels from './pages/treatment-menu-pages/Chemical-peels';
import Facials from './pages/treatment-menu-pages/Facials';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/promotions" element={<Promotions/>} />
            <Route exact path="/blog" element={<Blog/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/skin-needling" element={<SkinNeedling/>} />
            <Route exact path="/facials" element={<Facials/>}/>
            <Route exact path="/chemical-peels" element={<ChemicalPeels/>}/>
            <Route exact path="/LED-light-therapy" element={<LedLightTherapy/>}/>
            <Route exact path="/price-list" element={<PriceList/>}/>
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
