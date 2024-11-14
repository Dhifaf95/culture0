import React from 'react';
import './button.css';

const Button = ({ label = 'Company Booking', className = '', width = 'auto', height = 'auto', fontSize = '18px' }) => {
  return (
    <div className={`butt ${className}`} style={{ width: width,fontSize: fontSize,height: height }}>
     <button 
      type="submit" 
      className={`submit-btn ${className}`} 
      style={{ width, height, fontSize }}>
      {label}
    </button>
    </div>
  );
};





export default Button;
