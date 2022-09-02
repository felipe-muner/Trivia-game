import { useEffect } from "react";
import "./styles/App.css";
import { useStore } from "./store";
import { Link, useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  const getQuestions = useStore((state) => state.getQuestions);  
  
  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

  return (
    <div className="App">
      <Link to="/">Welcome</Link> | 
      <Link to="/quiz">Quiz</Link> |{" "}
      <Link to="/result">Result</Link>
      <div className="App-welcome">
        <h2>Welcome to the Trivia Challenge</h2>
        <h3>You will be presented with 10 True or False questions.</h3>
        <h3>Can you score 100%?</h3>
        <button onClick={() => navigate("/quiz")}>BEGIN</button>
      </div>
    </div>
  );
}

export default App;
