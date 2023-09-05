import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

// PAGES
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Contact from "./Pages/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/about" exact Component={About} />
            <Route path="/menu" exact Component={Menu} />
            <Route path="/contact" exact Component={Contact} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
