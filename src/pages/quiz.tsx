import { useStore } from "../store";
import QuestionCard from "../components/QuestionCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { checkRequirements } from "../utils/hocs/checkRequirements";

const Quiz = () => {
  const navigate = useNavigate();
  const questions = useStore((state) => state.questions);
  const indexQuestion = useStore((state) => state.indexQuestion);
  const answerQuestion = useStore((state) => state.answerQuestion);

  useEffect(() => {
    if (indexQuestion + 1 > questions.length) navigate("/result");
  }, [navigate, indexQuestion, questions.length]);

  return (
    <div className="App-main">
      <div className="App-content">
        <QuestionCard />
        <div>
          <button className="App-btn" onClick={() => answerQuestion("False")}>
            {" "}
            FALSE{" "}
          </button>
          <button className="App-btn" onClick={() => answerQuestion("True")}>
            {" "}
            TRUE{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default checkRequirements(Quiz);
