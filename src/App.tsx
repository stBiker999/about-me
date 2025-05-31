import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">ホーム</Link> | <Link to="/about">自己紹介</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <a href="https://vite.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                  <img
                    src={reactLogo}
                    className="logo react"
                    alt="React logo"
                  />
                </a>
              </div>
              <h1>Vite + React</h1>
              <div className="smoke">
                <span className="smoke-text">Sota Kimura</span>
              </div>
              <ul className="about-list">
                <li>趣味：バイク、シーシャ、酒</li>
                <li>経歴：2022年からエンジニア学生してます</li>
                <li>今年の目標: バイク2台購入</li>
              </ul>
              <p>救いようがないクズですが、よろしくお願いします</p>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
