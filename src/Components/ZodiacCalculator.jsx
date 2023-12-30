import React, { useState } from "react";

 

  const ZodiacCalculator = () => {

     const [birthday, setBirthday] = useState("");
     const [zodiacSign, setZodiacSign] = useState("");

    const zodiacAnimals = [
      "Rat",
      "Ox",
      "Tiger",
      "Rabbit",
      "Dragon",
      "Snake",
      "Horse",
      "Goat",
      "Monkey",
      "Rooster",
      "Dog",
      "Pig",
    ];
    const setYear = 1900;

    const CalculatorFunction = (date) => {
      const birthYear = new Date(date).getFullYear();
      const index = (birthYear - setYear) % 12;
      return zodiacAnimals[index < 0 ? 12 + index : index];
      // applies the modulo operator (%) with 12.
      // The result of this calculation will be a number between -11 and 11.
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setZodiacSign(CalculatorFunction(birthday));
    };


  return (
    <div className="ResultPart">
      <form onSubmit={handleSubmit}>
        <label>
          Enter Your Birthday!
          <input
            type="date"
            value={birthday}
            onChange={(e) => {
              setBirthday(e.target.value);
            }}
          />
        </label>
        <button type ="submit">Let's Check</button>
      </form>
      {zodiacSign && <p>Your Chinese Zodia Sign is: {zodiacSign}</p>}
    </div>
  );
};

export default ZodiacCalculator;
