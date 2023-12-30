import React, { useState } from "react";

 

  const ZodiacCalculator = () => {
     const [showResult, setShowResult] = useState(false);
     const [birthday, setBirthday] = useState("");
     const [zodiacData, setZodiacData] = useState({animal:"", image:""});

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
      const image = `/public/images/${animal}.png`
      return {image, animal}
      // applies the modulo operator (%) with 12.
      // The result of this calculation will be a number between -11 and 11.
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const result = CalculatorFunction(birthday);
      setShowResult(true); 
      setZodiacData(result);
      
    };


  return (
    <div className="ResultPart">
      <form onSubmit={handleSubmit}>
        <label>
          <p
            style={{
              fontSize: "25px",
              paddingTop: "30px",
              color: "#8B5C45",
            }}
          >
            {" "}
            Enter Your Birthday{" "}
          </p>
          <input
            type="date"
            value={birthday}
            onChange={(e) => {
              setBirthday(e.target.value);
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

      {!showResult && <img src="/public/images/main.png" alt="Main Image" />}
      {showResult && zodiacData.animal && (
        <div>
          <p className="resultText">Your Chinese Zodia Sign is:</p>
          <img src={zodiacData.image} alt={zodiacData.animal} />
        </div>
      )}
      <div>
        <p
          className="datatext"
          style={{ fontSize: "12px", paddingTop: "40px" }}
        >
          Your Birthday Data is neither stored nor used.
        </p>
      </div>
    </div>
  );
};

export default ZodiacCalculator;
