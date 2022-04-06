import React from "react";

const Add = ({ text ,onClick , color}) => {
 

  return (
    <button style={{background:color}} onClick={onClick} className="btn2">
      {text}
    </button>
  );
};

export default Add;
