
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Homee from './Components/Homee';
import Footer from './Components/Footer';
import Blog from './Components/Blog';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Routes>
    
    <Route path='/' element={<Homee/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='blog' element={<Blog/>}/>
    <Route path='contact' element={<Contact/>}/>


   
    </Routes>
     <Footer/>
    </Router>
    </div>
  );
}

export default App;
