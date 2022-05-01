import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Store from "./pages/Store";
import Promotions from "./pages/Promotions";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/store" element={<Store/>} />
            <Route exact path="/promotions" element={<Promotions/>} />
            <Route exact path="/blog" element={<Blog/>} />
            <Route exact path="/contact" element={<Contact/>} />
            {/* {Treatment menu} */}
            {/* {Store} */}
            {/* {Promotions} */}
            {/* {Blog} */}
            {/* Contact */}
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
