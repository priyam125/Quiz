import React, { useEffect, useState } from "react";
import questions from "../utils/data";
import "../index.css";

const Questions = ({
  question,
  options,
  handleAnswer,
  handleNext,
  handlePrev,
  currentQuestion,
}) => {
  console.log(currentQuestion);
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    window.console.log(selectedOption);
  }, [selectedOption, currentQuestion]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAnswer(selectedOption);
  };

  return (
    <div className="bg-red-500 mt-[24px]">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrev} disabled={currentQuestion === 0}>
          Previous
        </button>
        <div>
          <span>{`Question #${currentQuestion + 1}`}</span>
          <h2>{question}</h2>
        </div>
        <button
          onClick={handleNext}
          disabled={currentQuestion === questions.length - 1}
        >
          Next
        </button>
      </div>
      {/* <span>{`Question #${currentQuestion + 1}`}</span>
      <h2>{question}</h2> */}
      <div className="bg-green-400 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start space-y-2 justify-start"
        >
          {options.map((option, index) => (
            <span key={index} className="justify-start bg-pink-400">
              <label className="bg-green-800">
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleChange}
                />
                {option}
              </label>
            </span>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Questions;
