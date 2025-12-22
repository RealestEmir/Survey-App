export default function GeneralInformation() {
  return (
    <form>
      <h2 className="text-2xl font-semibold text-black mb-4">General Information</h2>
      <p className="text-black">Name</p>
      <input className="border border-black text-black placeholder:text-black" name="Name" placeholder="Enter your name" />
      <p className="text-black">Age</p>
      <select className="border border-black text-black placeholder:text-black" name="Age">
        <option value="">Select your age range</option>
        <option value="0-18">0-18</option>
        <option value="19-25">19-25</option>
        <option value="26-35">26-35</option>
        <option value="36-45">36-45</option>
        <option value="46-55">46-55</option>
        <option value="56-65">56-65</option>
        <option value="66-75">66-75</option>
        <option value="76-85">76-85</option>
        <option value="86+">86+</option>
      </select>
      <br />
      <p className="text-black">Sex</p>
      <select className="border border-black text-black placeholder:text-black" name="sex">
        <option value="">Select your sex</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <br />
      <p className="text-black">Gender</p>
      <select className="border border-black text-black placeholder:text-black" name="gender">
        <option value="">Select your gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="non-binary">Non-binary</option>
        <option value="other">Other</option>
      </select>
      <br />
      <p className="text-black">Sexual Identity</p>
      <select className="border border-black text-black placeholder:text-black" name="sexual-identity">
        <option value="">Select your sexual identity</option>
        <option value="heterosexual">Heterosexual</option>
        <option value="homosexual">Homosexual</option>
        <option value="bisexual">Bisexual</option>
        <option value="other">Other</option>
      </select>
      <br />
      <p className="text-black">Location</p>
      <input className="border border-black text-black placeholder:text-black" name="location" placeholder="Enter your location" />
      <p className="text-black">Socioeconomic Bracket</p>
      <select className="border border-black text-black placeholder:text-black" name="socioeconomic-bracket">
        <option value="">Select your socioeconomic bracket</option>
        <option value="low">Low</option>
        <option value="lower-middle">Lower Middle</option>
        <option value="middle">Middle</option>
        <option value="upper-middle">Upper Middle</option>
        <option value="high">High</option>
      </select>
      <br />
      <p className="text-black">Education, Employment, and Responsibilities</p>
      <div className="flex flex-col gap-2 text-black">
        <label className="flex items-center gap-2">
          <input type="checkbox" name="education" value="student" className="h-4 w-4 border border-black" />
          <span>Student</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="education" value="part-time" className="h-4 w-4 border border-black" />
          <span>Part-time employed</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="education" value="full-time" className="h-4 w-4 border border-black" />
          <span>Full-time employed</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="education" value="caregiver" className="h-4 w-4 border border-black" />
          <span>Caregiver / primary responsibilities</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" name="education" value="seeking" className="h-4 w-4 border border-black" />
          <span>Seeking opportunities</span>
        </label>
      </div>
      <br />
      <p className="text-black">Living Situation</p>
      <select className="border border-black text-black placeholder:text-black" name="living-situation">
        <option value="">Select your living situation</option>
        <option value="alone">Living alone</option>
        <option value="with-parents">Living with parents</option>
        <option value="with-partner">Living with partner</option>
        <option value="with-roommates">Living with roommates</option>
        <option value="with-children">Living with children</option>
        <option value="other">Other</option>
      </select>
      <br />
      <p className="text-black">Contact Details (optional)</p>
      <input className="border border-black text-black placeholder:text-black" name="email" placeholder="Enter your email" type="email" />
      <br />
      <input className="border border-black text-black placeholder:text-black" name="phone" placeholder="Enter your phone number" type="tel" />
      <br />
      <button type="submit" className="border border-black text-black">Next</button>
    </form>
  );
}
