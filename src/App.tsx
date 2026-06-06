import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Services from "./component/Services";
import HowWeWork from "./component/HowWeWork";
import Contact from "./component/Contact";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Element name="hero">
        <Hero />
      </Element>

      <Element name="services">
        <Services />
      </Element>

      <Element name="how-we-work">
        <HowWeWork />
      </Element>

      <Element name="testimonials">
        <Testimonials />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
