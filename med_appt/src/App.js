import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/LandingPage';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import FindDoctorSearchIC from './Components/FindDoctorSearchIC/FindDoctorSearchIC';
import FindDoctorSearch from './Components/InstantConsultationBooking/FindDoctorSearchIC/FindDoctorSearchIC';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
         <Navbar/>
         <switch>
            <Routes>
            <Route exact path="/" Component={Landing_Page} />
            <Route path="/singup" Component={Sign_Up} />
            <Route path="/login" Component={Login} />
            <Route path="/instant-consultation" Component={ InstantConsultation } />
            <Route path="/search/doctors" Component={FindDoctorSearch} />
            <Route path="/notification" Component={Notification} />
            <BookingConsultation/>
            
            </Routes>
         </switch>
        </BrowserRouter>
    </div>
  );
}

export default App;