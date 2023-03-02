import React, { useState } from "react";
import Questions from "../components/Questions";
import questions from "../utils/data";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

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

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="bg-slate-500 p-6">
          <h1>Quizathon</h1>
          <Questions
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            handleAnswer={handleAnswer}
            handleNext={handleNext}
            handlePrev={handlePrev}
            currentQuestion={currentQuestion}
          />
          <div>
            <span>Answers Chosen</span>
            <div>
                <span>{`Q${currentQuestion}`}</span>
            </div>
          </div>
          {/* <div className="button-container">
            <button onClick={handlePrev} disabled={currentQuestion === 0}>
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
            >
              Next
            </button>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Quiz;
