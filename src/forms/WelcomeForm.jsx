// Sample component for WelcomeForm (Form 1)
// File: src/forms/WelcomeForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomeForm = () => {
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    if (agree) {
      navigate("/login");
    } else {
      alert("You must agree to the Terms and Conditions.");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">WELCOME TO JAYVEE HALL OF MANSION</h1>
      <p className="mb-4">
        Experience serenity and elegance at Jayvee Hall of Mansion, where your comfort is our mission. Nestled in the heart of nature, we provide the perfect getaway for families, friends, and corporate guests alike.
      </p>

      <div className="mb-2">
        <h2 className="font-semibold">Mission</h2>
        <p>To offer exceptional resort services that ensure customer satisfaction through comfort, cleanliness, and genuine hospitality.</p>
      </div>

      <div className="mb-2">
        <h2 className="font-semibold">Vision</h2>
        <p>To become the most preferred resort destination known for excellence in service and a tranquil environment.</p>
      </div>

      <div className="mb-2 text-sm text-gray-600">
        <p>Disclaimer: All bookings are subject to availability and confirmation. Guests must adhere to resort policies at all times.</p>
      </div>

      <div className="mb-4">
        <input
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
          id="terms"
        />
        <label htmlFor="terms" className="ml-2">I agree to the Terms and Conditions</label>
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        onClick={handleStart}
      >
        GET STARTED
      </button>
    </div>
  );
};

export default WelcomeForm;
        
