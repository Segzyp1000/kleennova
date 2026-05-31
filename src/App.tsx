import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Services from "./component/Services";
import HowWeWork from "./component/HowWeWork";
import Contact from "./component/Contact";
import Testimonials from "./component/Testimonials";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <HowWeWork />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
}
export default App;
