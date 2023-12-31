import React, { useState } from "react";


const ZodiacCalculator = () => {
  const [showResult, setShowResult] = useState(false);
  const [birthday, setBirthday] = useState("");
  const [zodiacData, setZodiacData] = useState({ animal: "", image: "" });

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
    const animal = zodiacAnimals[index < 0 ? 12 + index : index];
    const image = `/images/${animal}.png`;
    return { image, animal };
    // applies the modulo operator (%) with 12.
    // The result of this calculation will be a number between -11 and 11.
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = CalculatorFunction(birthday);
    setShowResult(true);
    setZodiacData(result);
  };

  const resetForm = () => {
    setShowResult(false);
    setBirthday("");
    setZodiacData({ animal: "", image: "" });
  };

  return (
    <div className="ResultPart">
      {!showResult && (
        <form onSubmit={handleSubmit}>
          <label>
            <p
              style={{
                fontSize: "25px",
                paddingTop: "10px",
                marginTop: "80px",
                color: "#8B5C45",
              }}
            >
              Enter Your Birthday
            </p>
            <input
              type="date"
              placeholder="Enter Your Birthday"
              value={birthday}
              onChange={(e) => {
                setBirthday(e.target.value);
              }}
              style={{
                border: "2px solid pink",
                borderRadius: "5px",
                padding: "5px",
                backgroundColor: "#EFD4D4", // Set the background color to pink
                color: "grey", // Set the text color
                // Add any additional styling as needed
              }}
            />
          </label>
          <div>
            <button
              type="submit"
              style={{
                backgroundColor: "transparent",
                backgroundImage:
                  "linear-gradient(45deg, rgba(255, 0, 0, 0.3), rgba(245, 222, 179, 0.3))",
                border: "none",
                padding: "10px 20px",
                color: "black",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                fontSize: "16px",
              }}
            >
              Let's Check
            </button>
          </div>
        </form>
      )}
      {!showResult && <img src="/images/main2.png" alt="Main Image" />}
      {showResult && zodiacData.animal && (
        <div>
          <p className="resultText">Your Chinese Zodia Sign is:</p>
          <img src={zodiacData.image} alt={zodiacData.animal} />

          <button
            onClick={resetForm}
            style={{
              backgroundColor: "transparent",
              backgroundImage:
                "linear-gradient(45deg, rgba(255, 0, 0, 0.3), rgba(245, 222, 179, 0.3))",
              border: "none",
              padding: "10px 20px",
              color: "black",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
              fontSize: "16px",
            }}
          >
            Go Back
          </button>
        </div>
      )}

      <div>
        <p className="datatext" style={{ fontSize: "12px" }}>
          Your Birthday Data is neither stored nor used.
        </p>
      </div>
      <div>
        <p className="datatext" style={{ fontSize: "10px" }}>
          @AliceChoi all rights reserved.
        </p>
      </div>
    </div>
  );
};

export default ZodiacCalculator;
