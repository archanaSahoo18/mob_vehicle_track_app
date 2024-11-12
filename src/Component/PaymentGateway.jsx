// src/PaymentGateway.js
import React, { useState } from 'react';

const PaymentGateway = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePayment = () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      setErrorMessage("Please enter a valid amount.");
      return;
    }
    if (!paymentMethod) {
      setErrorMessage("Please select a payment method.");
      return;
    }

    // Reset error and simulate payment process
    setErrorMessage('');
    setIsProcessing(true);
    setTimeout(() => {
      alert("Payment Successful!");
      setIsProcessing(false);
      setAmount('');
      setPaymentMethod('');
    }, 2000); // Simulate a 2-second payment process
  };

  return (
    <div className="payment-gateway">
      <h2>Payment Gateway</h2>

      <div className="payment-form">
        <label>Amount</label>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label>Payment Method</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Select a method</option>
          <option value="upi">UPI</option>
          <option value="card">Credit Card</option>
          <option value="wallet">Wallet</option>
        </select>

        <button onClick={handlePayment} disabled={isProcessing}>
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>

        {errorMessage && <p className="error-text">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default PaymentGateway;
