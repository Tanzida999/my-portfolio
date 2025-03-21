import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <main className="container mx-auto py-10 px-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
