import React from 'react'
import { useState, useCallback } from 'react'

import QUESTIONS  from '../question.js';
import quizCompleteImg from '../assets/quiz-complete.png'
import { Question } from './Question.jsx';

export const Quiz = () => {

    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback (function handleSelectAnswer (selectedAnswer) {

      setUserAnswers((prevUserAnswer)=>{
        return [...prevUserAnswer,selectedAnswer]
      });
    },[activeQuestionIndex]);

    const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer]);

    if(quizIsComplete){
        return <div id="summary">
            <img src={quizCompleteImg} alt="Trophy icon"/>
            <h2>Quiz Completed!</h2>
        </div>
    }
  
    return (
        <div id="quiz">
           <Question
             key={activeQuestionIndex}
             questionIndex={activeQuestionIndex}
             onSelectAnswer={handleSelectAnswer}
             onSkipAnswer={handleSkipAnswer}
           />
        </div>
    
  ) 
}
