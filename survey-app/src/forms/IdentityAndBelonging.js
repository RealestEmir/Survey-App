export default function IdentityAndBelonging({ onPrevious }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); }}>
        <h2 className="text-2xl font-semibold text-black mb-4">Identity and Belonging</h2>
        <p className="text-black">How connected do you feel to your community?</p>
        <select className="border border-black text-black placeholder:text-black" name="community-connection">
          <option value="">Select an option</option>
          <option value="very-connected">Very Connected</option>
          <option value="somewhat-connected">Somewhat Connected</option>
          <option value="neutral">Neutral</option>
          <option value="somewhat-disconnected">Somewhat Disconnected</option>
          <option value="very-disconnected">Very Disconnected</option>
        </select>
        <br />
        <p className="text-black">Do you feel a sense of belonging in your country?</p>
        <select className="border border-black text-black placeholder:text-black" name="sense-of-belonging">
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="somewhat">Somewhat</option>
        </select>
        <br />
        <p className="text-black">How important is your cultural or ethnic identity to you?</p>
        <select className="border border-black text-black placeholder:text-black" name="cultural-identity-importance">
          <option value="">Select an option</option>
          <option value="very-important">Very Important</option>
          <option value="important">Important</option>
          <option value="neutral">Neutral</option>
          <option value="not-important">Not Important</option>
        </select>
        <br />
        <p className="text-black">Do you feel discriminated against based on your identity?</p>
        <select className="border border-black text-black placeholder:text-black" name="discrimination-experience">
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="unsure">Unsure</option>
        </select>
        <br />
        <button type="button" onClick={onPrevious} className="border border-black text-black">Previous</button>
        <button type="submit" className="border border-black text-black">Next</button>
        <br />
    </form>
  );
}