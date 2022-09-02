import { useStore } from "../store";
import ResultReport from "../components/ResultReport";
import { useNavigate } from "react-router-dom";
import { checkRequirements } from "../utils/hocs/checkRequirements";

const Result = () => {
  const navigate = useNavigate();
  const playAgain = useStore((state) => state.playAgain);
  
  const handlePlayAgain = () => {
    playAgain();
    navigate("/");
  };
  return (
    <div className="App-main">
      <div className="App-content">
        <ResultReport />
        <div>
          <button className="App-btn" onClick={() => handlePlayAgain()}>PLAY AGAIN ?</button>
        </div>
      </div>
    </div>
  );
}

export default checkRequirements(Result);