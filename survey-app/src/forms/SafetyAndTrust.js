"use client";

import { useState } from "react";

export default function SafetyAndTrust({ onNext, onPrevious, onDataChange }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    onDataChange?.({ [name]: value });
    setFormData(updated);
    onDataChange?.(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext?.();
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-black mb-4">Safety and Trust</h2>
        <p className="text-black">Do you feel hopeful about the future of your country?</p>
        <select className="border border-black text-black placeholder:text-black" name="hopefulFuture" onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unsure">Unsure</option>
        </select>
        <br />
        <p className="text-black">Do you feel safe in public spaces</p>
        <select className="border border-black text-black placeholder:text-black" name="safePublicSpaces" onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="sometimes">Sometimes</option>
        </select>
        <br />
        <p className="text-black">Do you trust your country's media?</p>
        <select className="border border-black text-black placeholder:text-black" name="trustMedia" onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="somewhat">Somewhat</option>
        </select>
        <br />
        <p className="text-black">How would you describe your current mental health?</p>
        <select className="border border-black text-black placeholder:text-black" name="mentalHealth" onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
        </select>
        <br/>
        <p className="text-black">Do you believe people in your country are treated equally regardless of their background?</p>
        <select className="border border-black text-black placeholder:text-black" name="equalTreatment" onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unsure">Unsure</option>
        </select>
        <br/>
        <button type="button" onClick={onPrevious} className="border border-black text-black">Previous</button>
        <button type="submit" className="border border-black text-black">Next</button>
        <br />
    </form>
  );
}