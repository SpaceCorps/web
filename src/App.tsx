import { useState, useEffect } from "react";
import { GilectRoot } from "@rorychad/gilect";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { About } from "./pages/About";

import heroBg from "./assets/hero.JPEG";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Force dark mode
    setIsDark(true);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <GilectRoot backgroundImage={heroBg} renderBackground={true}>
      <Router>
        <div className="min-h-screen bg-transparent text-foreground">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </GilectRoot>
  );
}

export default App;
