import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/LandingPage';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
         <Navbar/>
         <switch>
            <Routes>
              <Route exact path="/" Component={Landing_Page} />
              <Route path="/signup" Component={Sign_Up} />
              <Route path="/login" Component={Login} />
              <Route path="/instant-consultation" element={<InstantConsultation />} />            </Routes>
         </switch>
        </BrowserRouter>
    </div>
  );
}

export default App;