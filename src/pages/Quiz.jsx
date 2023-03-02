import React, { useState } from "react";
import Modal from "../components/Modal";
import Questions from "../components/Questions";
import questions from "../utils/data";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answersChosen, setAnswersChosen] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setAnswersChosen([]);
    setSelectedOption([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (answersChosen[i]?.answer === questions[i].answer) {
        score++;
      }
    }
    setShowScore(true);
    setScore(score);
  };

  return (
    <div className="quiz">
      <div className="p-2 lg:p-6">
        <h1 className="text-[#F37F31] text-3xl font-bold">Quizathon</h1>
        <Modal
          score={score}
          isOpen={showScore}
          setIsOpen={setShowScore}
          handleRestart={handleRestart}
        />
        <Questions
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleNext={handleNext}
          handlePrev={handlePrev}
          currentQuestion={currentQuestion}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          answersChosen={answersChosen}
          setAnswersChosen={setAnswersChosen}
          handleSubmit={handleSubmit}
        />
        <AnswersChosen answersChosen={answersChosen} questions={questions} />
      </div>
    </div>
  );
};

const AnswersChosen = ({ answersChosen, questions }) => {
  const [hoveredQuestion, setHoveredQuestion] = useState(null);

  return (
    <div className="mt-[24px] items-center">
      <span>Answers Chosen:</span>
      <div className="flex mt-2 space-x-4 justify-evenly">
        {answersChosen.map((answer, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
            onMouseEnter={() => setHoveredQuestion(answer.question)}
            onMouseLeave={() => setHoveredQuestion(null)}
          >
            <span>{`Q${answer.question + 1}`}</span>
            <span>{answer.answer}</span>
            {hoveredQuestion === answer.question && (
              <div className="p-2 mt-2 rounded">
                {questions[answer.question].question}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
