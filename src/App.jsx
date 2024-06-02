import { Toaster } from "react-hot-toast";
import About from "./component/About";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Portfolio from "./component/Portfolio";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default App;
