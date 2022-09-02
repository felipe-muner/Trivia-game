import { useEffect } from "react";
import "./styles/App.css";
import { useStore } from "./store";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  const getQuestions = useStore((state) => state.getQuestions);

  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  return (
    <div className="App">
      <div className="App-welcome">
        <div className="App-content">
          <div className="App-text-box">
            <h4 className="App-main-title">Welcome to the Trivia Challenge!</h4>
          </div>
          <div className="App-text-box">
            <h5>You will be presented with 10 True or False questions.</h5>
          </div>
          <h5>Can you score 100%?</h5>
          <button className="App-btn" onClick={() => navigate("/quiz")}>
            BEGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
