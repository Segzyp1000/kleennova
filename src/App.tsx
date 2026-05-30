import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Services from "./component/Services";
import HowWeWork from "./component/HowWeWork";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <HowWeWork />
      <Contact />
    </div>
  );
}
export default App;
