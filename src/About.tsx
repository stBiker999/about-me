import React from "react";
import "@fontsource/press-start-2p/latin.css";

const About: React.FC = () => {
  return (
    <div className="shisha-container">
      <div className="smoke">
        <span className="smoke-text">Sota Kimura</span>
      </div>
      <div className="smoke">
        <span className="smoke-text" style={{ animationDelay: "2.2s" }}>
          趣味：バイク、シーシャ、酒
        </span>
      </div>
      <div className="smoke">
        <span className="smoke-text" style={{ animationDelay: "3.5s" }}>
          経歴：2022年からエンジニア学生してます
        </span>
      </div>
      <div className="smoke">
        <span className="smoke-text" style={{ animationDelay: "4.8s" }}>
          今年の目標: バイク2台購入
        </span>
      </div>
      <div className="smoke">
        <span className="smoke-text" style={{ animationDelay: "6s" }}>
          ふっ軽な人なので遊びの誘いはいつでも大歓迎
        </span>
      </div>
    </div>
  );
};

export default About;
