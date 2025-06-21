import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

const Detail = () => (
  <div className="shisha-container">
    <h1>自己紹介（詳細）</h1>
    <div className="detail-media-flex">
      <img
        src="/public/sample-photo.jpg"
        alt="プロフィール写真"
        className="detail-photo"
      />
      <div className="about-detail-text">
        <ul className="about-list">
          <li>名前：木村 颯汰（Sota Kimura）</li>
          <li>趣味：バイク、シーシャ、酒</li>
          <li>経歴：2022年からエンジニア学生。Web開発・Webデザイン。</li>
          <li>得意分野：HTML, CSS, Java</li>
          <li>好きな音楽：HIPHOP</li>
          <li>好きな場所：シーシャバー、居酒屋、パチ屋</li>
        </ul>
        <video
          src="/public/sample-movie.mp4"
          controls
          className="detail-video"
        />
      </div>
    </div>
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
    <h1>お問い合わせ</h1>
    <form
      className="contact-form"
      action="mailto:sota.kimura@example.com"
      method="POST"
      encType="text/plain"
    >
      <div className="form-group">
        <label htmlFor="name">お名前</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">メールアドレス</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">お問い合わせ内容</label>
        <textarea id="message" name="message" rows={5} required></textarea>
      </div>
      <button type="submit">送信</button>
    </form>
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
            <div className="home-bike-bg">
              <div className="bike-title">BIKE LIFE</div>
              <div className="bike-sub">バイクと共に走る毎日</div>
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
