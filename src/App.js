import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import SignUp from "./components/navbar/SignUp";
import Login from "./components/navbar/Login";


function App() {
  return (
    <div className="App">
     <Router>
        <Navbar />
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/services" element={<Services/>}/>
         <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<SignUp/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
