import React from 'react';

const FlagAnswer = ({correct, answer, onNext}) => (
  <div className = "flag-answer">
    { correct ?
      `Correct! This is indeed the flag of ${answer}.` :
      `Incorrect: This is the flag of ${answer}.` }
    <button onClick={onNext}>Next Question</button>
  </div>
);

export default FlagAnswer;
