import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import '../App.css'; // Ensure this is imported for the CSS styles to take effect

const containerStyle = {
  width: '100%',
  height: '400px',
};

const GoogleMapTrack = () => {
  const [currentPosition, setCurrentPosition] = useState({ lat: 0, lng: 0 });
  const [tracking, setTracking] = useState(false);

  // Load Google Maps script
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your actual Google Maps API key
  });

  // Fetch current location
  const fetchLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
        },
        (error) => console.log(error),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  // Track location at intervals
  useEffect(() => {
    let locationInterval;
    if (tracking) {
      locationInterval = setInterval(fetchLocation, 5000); // update every 5 seconds
    }
    return () => {
      if (locationInterval) clearInterval(locationInterval);
    };
  }, [tracking, fetchLocation]);

  const toggleTracking = () => {
    setTracking(!tracking);
    if (!tracking) fetchLocation(); // Update immediately when tracking starts
  };

  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div className="login-container">
      <h2>Welcome to Google Map Track</h2>
      <button onClick={toggleTracking} className="track-button">
        {tracking ? 'Stop Tracking' : 'Start Tracking'}
      </button>
      <div className="map-container">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition}
          zoom={14}
        >
          <Marker position={currentPosition} />
        </GoogleMap>
      </div>
    </div>
  );
};

export default GoogleMapTrack;
