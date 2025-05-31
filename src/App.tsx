import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">ホーム</Link> | <Link to="/about">自己紹介</Link>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
