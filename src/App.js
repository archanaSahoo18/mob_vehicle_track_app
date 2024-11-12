import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Component/LoginPage';
import RegisterPage from './Component/RegisterPage';
import ChangePassword from './Component/ChangePassword';
import GoogleMapTrack from './Component/GoogleMapTrack';
import BikeTrackingMenu from './Component/BikeTrackingMenu';
import CustomerLogin from './Component/CustomerLogin';
import RealTimeMonitoring from './Component/RealTimeMonitoring';
import PaymentGateway from './Component/PaymentGateway';
import ChargeSharing from './Component/ChargeSharing';

function App() {
  return (
    <Router basename="/mob_vehicle_track_app"> {/* Set the basename */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/customerLogin" element={<CustomerLogin />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/maptrack" element={<GoogleMapTrack />} />
        <Route path="/bikeTrackMenu" element={<BikeTrackingMenu />} />
        <Route path="/realTimeMonitor" element={<RealTimeMonitoring />} />
        <Route path="/paymentGateway" element={<PaymentGateway />} />
        <Route path="/chargeSharing" element={<ChargeSharing />} />
      </Routes>
    </Router>
  );
}

export default App;
