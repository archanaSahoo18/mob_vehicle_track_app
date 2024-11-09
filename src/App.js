import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Component/LoginPage';
import RegisterPage from './Component/RegisterPage';
import ChangePassword from './Component/ChangePassword';
import GoogleMapTrack from './Component/GoogleMapTrack';

function App() {
  return (
    <Router basename="/mob_vehicle_track_app"> {/* Set the basename */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/maptrack" element={<GoogleMapTrack />} />
      </Routes>
    </Router>
  );
}

export default App;
