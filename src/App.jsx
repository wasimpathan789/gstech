import'./App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';

import Aboutpage from './pages/aboutPage/Aboutpage';
import Contactpage from './pages/contact/Contactpage';
import Homepage from './pages/homepage/Homepage'
import NewPage from './pages/NewPage';
AOS.init();
const App = () => {


  return (
    <div style={{backgroundColor:"red", padding:0}}>

    <Router>
    <Routes>
    <Route path="/" element={<Contactpage/>}/>

      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<Aboutpage/>}/>
      <Route path="/contactpage" element={<Contactpage/>}/>

    </Routes>
    </Router>
    </div>

  )
}

export default App