import { useStore } from "../store";
import ResultReport from "../components/ResultReport";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const navigate = useNavigate();
  const playAgain = useStore((state) => state.playAgain);

  const handlePlayAgain = () => {
    playAgain();
    navigate("/");
  };
  return (
    <div>
      <ResultReport />
      <button onClick={() => handlePlayAgain()}>PLAY AGAIN</button>
    </div>
  );
}
