"use client";

import { useState } from "react";

export default function CommunityAndSafety({ onPrevious, onDataChange }) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    onDataChange?.(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext?.();
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-black mb-4">Community and Safety</h2>
        <p className="text-black">How would you describe your identity in your own words?</p>
        <textarea className="border border-black text-black placeholder:text-black w-full h-30" name="identityDescription" placeholder="Enter your thoughts" maxLength="200" onChange={handleChange} />
        <p className="text-sm text-gray-600">Max 200 words</p>
        <br />
        
        <button type="button" onClick={onPrevious} className="border border-black text-black">Previous</button>
        <button type="submit" className="border border-black text-black">Next</button>
        <br />
    </form>
  );
}