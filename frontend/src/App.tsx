import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Stack from "./pages/Stack";

import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen !bg-[#0e0c1e] text-white">
      <Router>
        <Header />
        <main className="container mx-auto py-10 px-6">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/stack" element={<Stack />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Stack />
    </>
  );
};

export default App;
