import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Aboutpage from "./pages/aboutPage/Aboutpage";
import Contactpage from "./pages/contact/Contactpage";
import Homepage from "./pages/homepage/Homepage";
import Servicepage from "./pages/servicepage/Servicepage";
import ITConsulting from "./pages/servicepage/ITConsulting";
import Business from "./pages/servicepage/Business";
import DigitalTechnology from "./pages/servicepage/DigitalTechnology";
import MsiSolution from "./pages/servicepage/MsiSolution";
import Governance from "./pages/servicepage/Governance";
import Projects from "./pages/servicepage/Projects";
import ITInfrastructure from "./pages/servicepage/ITInfrastructure";
AOS.init();
const App = () => {
  return (
    <div style={{ padding: 0 }}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/service" element={<Servicepage />}>
            <Route path="/service/it" element={<ITConsulting />} />
            <Route path="/service/business" element={<Business />} />
            <Route path="/service/digital" element={<DigitalTechnology />} />
            <Route path="/service/msi" element={<MsiSolution />} />
            <Route path="/service/governance" element={<Governance />} />
            <Route path="/service/infra" element={<ITInfrastructure />} />
            <Route path="/service/project" element={<Projects />} />
          </Route>

          {/* <Route path="/service" element={<Servicepage />}></Route> */}
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
