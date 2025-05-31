import React from "react";

const About: React.FC = () => {
  return (
    <div className="shisha-container">
      <div className="shisha-body">
        <div className="shisha-base"></div>
        <div className="shisha-neck"></div>
      </div>
      <div className="smoke">
        <span className="smoke-text">Sota Kimura</span>
      </div>
      <ul className="about-list">
        <li>趣味：バイク、シーシャ、酒</li>
        <li>経歴：2022年からエンジニア学生してます</li>
        <li>今年の目標: バイク2台購入</li>
      </ul>
      <p>救いようがないクズですが、よろしくお願いします</p>
    </div>
  );
};

export default About;
