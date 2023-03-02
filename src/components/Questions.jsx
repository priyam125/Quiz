import React from "react";
import questions from "../utils/data";
import "../index.css";
import NextIcon from "../assets/Icons/NextIcon";
import PreviousIcon from "../assets/Icons/PreviousIcon";

const Questions = ({
  question,
  options,
  handleNext,
  handlePrev,
  currentQuestion,
  selectedOption,
  setSelectedOption,
  answersChosen,
  setAnswersChosen,
  handleSubmit,
}) => {
 const handleChange = (event) => {
    const selectedQuestionIndex = selectedOption.findIndex(
      (obj) => obj.question === currentQuestion
    );

    if (selectedQuestionIndex === -1) {
      setSelectedOption([
        ...selectedOption,
        { question: currentQuestion, option: event.target.value },
      ]);
    } else {
      const updatedSelectedOption = [...selectedOption];
      updatedSelectedOption[selectedQuestionIndex].option = event.target.value;
      setSelectedOption(updatedSelectedOption);
    }

    const { value } = event.target;
    const newAnswer = { question: currentQuestion, answer: value };

    setAnswersChosen((prevAnswers) => {
      const index = prevAnswers.findIndex(
        (answer) => answer.question === currentQuestion
      );

      if (index === -1) {
        return [...prevAnswers, newAnswer];
      } else {
        return prevAnswers.map((answer, i) => {
          if (i === index) {
            return newAnswer;
          }
          return answer;
        });
      }
    });
  };

  return (
    <div className="mt-[24px]">
      <div className="flex items-center justify-between mb-4 lg:px-8">
        <span
          onClick={handlePrev}
          className={
            currentQuestion === 0 ? "invisible" : "flex cursor-pointer"
          }
        >
          <PreviousIcon width={51} height={51} />
        </span>
        <div>
          <span className="text-lg font-semibold">{`Question #${
            currentQuestion + 1
          }`}</span>
          <h2>{question}</h2>
        </div>
        <span
          onClick={handleNext}
          className={
            currentQuestion === questions.length - 1
              ? "invisible"
              : "flex cursor-pointer"
          }
        >
          <NextIcon width={51} height={51} />
        </span>
      </div>
      <div className="flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-start space-y-2"
        >
          {options.map((option, index) => (
            <span
              key={index}
              className="flex w-full bg-[#FFF9F6] pr-8 py-2 pl-2"
            >
              <label className="">
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption[currentQuestion]?.option == option}
                  onChange={handleChange}
                  className="mr-4"
                />
                {option}
              </label>
            </span>
          ))}
          <button
            type="submit"
            className="items-center p-2 px-4 mt-6 ml-2 bg-blue-400 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Questions;
