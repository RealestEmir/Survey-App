"use client";

import { useState } from "react";

export default function IdentityAndBelonging({ onPrevious, onDataChange, onNext }) {
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
        <h2 className="text-2xl font-semibold text-black mb-4">Identity and Belonging</h2>
        <p className="text-black">How would you describe your identity in your own words?</p>
        <textarea className="border border-black text-black placeholder:text-black w-full h-30" name="identityDescription" placeholder="Enter your thoughts" maxLength="200" onChange={handleChange} />
        <p className="text-sm text-gray-600">Max 200 words</p>
        <br />
        <p className="text-black">What does belonging mean to you?</p>
        <textarea className="border border-black text-black placeholder:text-black w-full h-30" name="belongingMeaning" placeholder="Enter your thoughts" maxLength="200" onChange={handleChange} />
        <p className="text-sm text-gray-600">Max 200 words</p>
        <br />
        <p className="text-black">Do you feel proud, ashamed, or neutral about your background? </p>
        <textarea className="border border-black text-black placeholder:text-black w-full h-30" name="backgroundFeeling" placeholder="Enter your thoughts" maxLength="200" onChange={handleChange} />
        <p className="text-sm text-gray-600">Max 200 words</p>
        <br />
        <p className="text-black">How do you express your gender identity? </p>
        <textarea className="border border-black text-black placeholder:text-black w-full h-30" name="genderIdentityExpression" placeholder="Enter your thoughts" maxLength="200" onChange={handleChange} />
        <p className="text-sm text-gray-600">Max 200 words</p>
        <br />
        <p className="text-black">Have you ever hidden part of your identity to feel safe? </p>
        <textarea className="border border-black text-black placeholder:text-black w-full h-30" name="hiddenIdentity" placeholder="Enter your thoughts" maxLength="200" onChange={handleChange} />
        <p className="text-sm text-gray-600">Max 200 words</p>
        <br />
        <p className="text-black">What does feminism mean to you? </p>
        <textarea className="border border-black text-black placeholder:text-black w-full h-30" name="feminismMeaning" placeholder="Enter your thoughts" maxLength="200" onChange={handleChange} />
        <p className="text-sm text-gray-600">Max 200 words</p>
        <br />
        <p className="text-black">How have your identities shaped how others treat you? </p>
        <textarea className="border border-black text-black placeholder:text-black w-full h-30" name="identitiesShapingTreatment" placeholder="Enter your thoughts" maxLength="200" onChange={handleChange} />
        <p className="text-sm text-gray-600">Max 200 words</p>
        <br />
        <p className="text-black">Are there any parts of your identity that are misunderstood? </p>
        <textarea className="border border-black text-black placeholder:text-black w-full h-30" name="misunderstoodIdentityParts" placeholder="Enter your thoughts" maxLength="200" onChange={handleChange} />
        <p className="text-sm text-gray-600">Max 200 words</p>
        <br />
        <p className="text-black">What messages did you grow up hearing about your identity? </p>
        <textarea className="border border-black text-black placeholder:text-black w-full h-30" name="identityMessages" placeholder="Enter your thoughts" maxLength="200" onChange={handleChange} />
        <p className="text-sm text-gray-600">Max 200 words</p>
        <br />
        <p className="text-black">Who or what has shaped your sense of self the most? </p>
        <textarea className="border border-black text-black placeholder:text-black w-full h-30" name="selfSenseShaping" placeholder="Enter your thoughts" maxLength="200" onChange={handleChange} />
        <p className="text-sm text-gray-600">Max 200 words</p>
        <br />
        <button type="button" onClick={onPrevious} className="border border-black text-black">Previous</button>
        <button type="submit" className="border border-black text-black">Next</button>
        <br />
    </form>
  );
}