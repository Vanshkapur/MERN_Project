import React, { useState, useEffect } from 'react';
import { apiClient } from '../../../shared/services/api-client.js';

export const Quiz = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    fetchQuizQuestions();
  }, []);

  const fetchQuizQuestions = async () => {
    try {
      const response = await apiClient.get(process.env.REACT_APP_QUIZ_URL);
      console.log(response)
      setQuizQuestions(response); 
    } catch (error) {
      console.error(error);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-page">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score</h2>
          <p>{score} out of {quizQuestions.length}</p>
        </div>
      ) : (
        <div className="question-section">
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{quizQuestions[currentQuestionIndex]?.question}</p>
          <div className="options">
            <button
              className={selectedOption === quizQuestions[currentQuestionIndex]?.option1 ? 'selected' : ''}
              onClick={() => handleOptionSelect(quizQuestions[currentQuestionIndex]?.option1)}
            >
              {quizQuestions[currentQuestionIndex]?.option1}
            </button>
            <button
              className={selectedOption === quizQuestions[currentQuestionIndex]?.option2 ? 'selected' : ''}
              onClick={() => handleOptionSelect(quizQuestions[currentQuestionIndex]?.option2)}
            >
              {quizQuestions[currentQuestionIndex]?.option2}
            </button>
            <button
              className={selectedOption === quizQuestions[currentQuestionIndex]?.option3 ? 'selected' : ''}
              onClick={() => handleOptionSelect(quizQuestions[currentQuestionIndex]?.option3)}
            >
              {quizQuestions[currentQuestionIndex]?.option3}
            </button>
            <button
              className={selectedOption === quizQuestions[currentQuestionIndex]?.option4 ? 'selected' : ''}
              onClick={() => handleOptionSelect(quizQuestions[currentQuestionIndex]?.option4)}
            >
              {quizQuestions[currentQuestionIndex]?.option4}
            </button>
          </div>
          <button className="next-button" onClick={handleNextQuestion}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};
