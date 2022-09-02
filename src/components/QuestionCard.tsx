import { useStore } from "../store";
import { decodeHTMLEntities } from "../utils";

export default function QuestionCard() {
  const answerQuestion = useStore((state) => state.answerQuestion);
  const indexQuestion = useStore((state) => state.indexQuestion);
  const questions = useStore((state) => state.questions);
  const currentQuestion = questions[indexQuestion];
  
  return (
    <div className="Quiz-question-card">
      <h2>{currentQuestion?.category}</h2>
      <h2>{decodeHTMLEntities(currentQuestion?.question)}</h2>
      <h2>{currentQuestion?.correct_answer}</h2>

      <button onClick={() => answerQuestion("False")}> FALSE </button>
      <button onClick={() => answerQuestion("True")}> TRUE </button>
    </div>
  );
}
