// src/RealTimeMonitoring.js
import React, { useEffect, useState } from 'react';

const RealTimeMonitoring = () => {
  const [batteryStatus, setBatteryStatus] = useState(80);
  const [chargeDuration, setChargeDuration] = useState("1h 20m");
  const [cost, setCost] = useState("$5.00");

  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryStatus((prev) => (prev < 100 ? prev + 1 : prev));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Real-Time Monitoring</h2>
      <p>Battery Status: {batteryStatus}%</p>
      <p>Charge Duration: {chargeDuration}</p>
      <p>Cost: {cost}</p>
    </div>
  );
};

export default RealTimeMonitoring;
