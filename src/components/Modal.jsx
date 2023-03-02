import React from "react";
import CorrectIcon from "../assets/Icons/CorrectIcon";
import questions from "../utils/data";

function Modal({ score, isOpen, setIsOpen, handleRestart }) {
  const handleClose = () => {
    setIsOpen(false);
  };

  return isOpen ? (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div
          className="fixed inset-0 transition-opacity bg-gray-200 bg-opacity-10"
          onClick={handleClose}
        ></div>
        <div className="p-4 px-12 bg-gray-200 rounded-lg shadow-xl">
          <div className="flex flex-col text-center">
            <span className="mb-2 text-3xl font-medium">Quizathon</span>
            <span>You have successfully submitted the Assessment</span>
            <span className="m-auto mt-6 mb-6">
              <CorrectIcon />
            </span>
            <p className="mb-2 text-xl font-bold">{`Question asked: ${questions.length}`}</p>
            <p className="mb-2 text-xl font-bold">{`Question Correct: ${score}`}</p>
            <p className="mb-2 text-xl font-bold">{`Your score: ${(
              (score / questions.length) *
              100
            ).toFixed(3)} %`}</p>
            <div className="space-x-4">
              <button
                className="px-4 py-2 mt-4 text-white bg-gray-900 rounded cursor-pointer hover:bg-gray-800"
                onClick={handleClose}
              >
                Close
              </button>
              {/* <button
                className="px-4 py-2 mt-4 text-white bg-gray-900 rounded cursor-pointer hover:bg-gray-800"
                onClick={handleRestart}
              >
                Restart
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;
