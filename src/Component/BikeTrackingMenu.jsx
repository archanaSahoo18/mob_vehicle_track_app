// src/BikeTrackingMenu.js
import React from 'react';
import { FaBiking, FaBatteryFull, FaMapMarkerAlt, FaTachometerAlt } from 'react-icons/fa';
import '../App.css';

const bikeData = [
  {
    id: 1,
    name: "Bike A",
    location: "Downtown",
    speed: "15 km/h",
    battery: 80,
    distance: "120 km",
  },
  {
    id: 2,
    name: "Bike B",
    location: "Uptown",
    speed: "20 km/h",
    battery: 65,
    distance: "85 km",
  },
  {
    id: 3,
    name: "Bike C",
    location: "City Park",
    speed: "12 km/h",
    battery: 95,
    distance: "150 km",
  },
];

const BikeTrackingMenu = () => {
  return (
    <div className="bike-tracking-menu">
      <h1>Bike Tracking Dashboard</h1>
      {bikeData.map((bike) => (
        <div key={bike.id} className="bike-card">
          <h2><FaBiking /> {bike.name}</h2>
          <div className="bike-info">
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span>{bike.location}</span>
            </div>
            <div className="info-item">
              <FaTachometerAlt className="icon" />
              <span>Speed: {bike.speed}</span>
            </div>
            <div className="info-item">
              <FaBatteryFull className="icon" />
              <span>Battery: {bike.battery}%</span>
            </div>
            <div className="info-item">
              <span>Distance Traveled: {bike.distance}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BikeTrackingMenu;
