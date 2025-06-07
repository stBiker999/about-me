import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

const Detail = () => (
  <div className="shisha-container">
    <h1>自己紹介（詳細）</h1>
    <ul className="about-list">
      <li>名前：木村 颯汰（Sota Kimura）</li>
      <li>趣味：バイク、シーシャ、酒、カメラ、旅行</li>
      <li>
        経歴：2022年からエンジニア学生。Web開発・デザイン・IoTにも興味あり。
      </li>
      <li>得意分野：React, TypeScript, CSS, Java, Python</li>
      <li>好きな音楽：Lo-fi, Chill, J-POP</li>
      <li>好きな場所：夜のカフェ、シーシャバー、海沿い</li>
    </ul>
    <p>もっと詳しい話やコラボ依頼はSNSやお問い合わせからどうぞ！</p>
  </div>
);

const SNS = () => (
  <div className="shisha-container">
    <h1>SNS</h1>
    <div className="sns-icons-vertical">
      <a
        href="https://www.instagram.com/kimur_ninja250/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <SiInstagram size={48} style={{ fill: "url(#ig-gradient)" }} />
        <svg width="0" height="0">
          <linearGradient id="ig-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f9ce34" />
            <stop offset="50%" stopColor="#ee2a7b" />
            <stop offset="100%" stopColor="#6228d7" />
          </linearGradient>
        </svg>
      </a>
      <a
        href="https://x.com/Nniki_Rider"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (旧Twitter)"
      >
        <FaXTwitter size={48} color="#fff" />
      </a>
      <a
        href="https://github.com/stBiker999"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={48} color="#fff" />
      </a>
    </div>
  </div>
);

const Contact = () => (
  <div className="shisha-container">
    <h1>お問い合わせ・連絡先</h1>
    <ul className="about-list">
      <li>
        メール:{" "}
        <a href="mailto:sota.kimura@example.com">sota.kimura@example.com</a>
      </li>
      <li>
        Instagram DM:{" "}
        <a
          href="https://www.instagram.com/kimur_ninja250/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @kimur_ninja250
        </a>
      </li>
      <li>
        Twitter DM:{" "}
        <a href="#" target="_blank" rel="noopener noreferrer">
          @sota_kimura
        </a>
      </li>
    </ul>
    <p>お仕事・コラボ・ご相談などお気軽にご連絡ください。</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">ホーム</Link> | <Link to="/about">自己紹介</Link> |{" "}
        <Link to="/detail">詳細</Link> | <Link to="/sns">SNS</Link> |{" "}
        <Link to="/contact">お問い合わせ</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div className="home-shisha-bg">
              <div className="smoke home-smoke"></div>
              <div
                className="smoke home-smoke"
                style={{ animationDelay: "1.5s" }}
              ></div>
              <div
                className="smoke home-smoke"
                style={{ animationDelay: "3s" }}
              ></div>
              <div className="neon-circle"></div>
              <div className="neon-circle neon-circle2"></div>
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/sns" element={<SNS />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
