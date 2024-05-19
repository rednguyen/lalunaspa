import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './component/NavBar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Services from './component/Services/Services';
import Feedback from './component/Feedback/Feedback';
import Training from './component/Training/Training';
import Footer from './component/Footer/Footer';
import Booking from './component/Booking/Booking';
import Contact from './component/Contact/Contact';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
          </Routes>
          <Routes>
            <Route exact path="/about" element={<About/>}/>
          </Routes>
          <Routes>
            <Route exact path="/services" element={<Services/>}/>
          </Routes>
          <Routes>
            <Route exact path="/feedback" element={<Feedback/>}/>
          </Routes>
          <Routes>
            <Route exact path="/training" element={<Training/>}/>
          </Routes>
          <Routes>
            <Route exact path="/contact" element={<Contact/>}/>
          </Routes>
          <Routes>
            <Route exact path="/booking/:packageId/:packageDetailId/:packageName" element={<Booking/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>

    </Router>
    // <div>Hello React</div>
  );
}

export default App;
