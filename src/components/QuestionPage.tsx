import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuestionPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleYes = () => {
    navigate('/yes-response'); // Make sure to update '/yes-response' with your actual path
  };

  const handleNoMouseMove = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const offsetX = Math.random() * (window.innerWidth - button.clientWidth - 20); // 20px padding to ensure button doesn't go off screen
    const offsetY = Math.random() * (window.innerHeight - button.clientHeight - 20); // Same padding for Y
    button.style.position = 'absolute';
    button.style.left = `${offsetX}px`;
    button.style.top = `${offsetY}px`;
  };

  return (
    <div className="question-page">
      <h2>Would you be my Valentine? 💖</h2>
      <button className="yes-button" onClick={handleYes}>Absolutely 💕</button>
      <button className="no-button" onMouseOver={handleNoMouseMove} onTouchStart={handleNoMouseMove}>Let me think... 🤔</button>
    </div>
  );
};

export default QuestionPage;
