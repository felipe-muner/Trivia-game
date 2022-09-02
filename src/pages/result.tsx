import { useStore } from "../store";
import ResultCard from "../components/ResultCard";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const navigate = useNavigate();  
  const questions = useStore((state) => state.questions);
  const playAgain = useStore((state) => state.playAgain);

  const handlePlayAgain = () => {
    playAgain()
    navigate("/")
  }
  return <div>
    <ResultCard />
    <button onClick={() => handlePlayAgain()}>PLAY AGAIN</button>
  </div>;
  
}
