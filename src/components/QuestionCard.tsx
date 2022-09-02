import { useStore } from "../store";
import { decodeHTMLEntities } from "../utils";

export default function QuestionCard() {
  const indexQuestion = useStore((state) => state.indexQuestion);
  const questions = useStore((state) => state.questions);
  const currentQuestion = questions[indexQuestion];

  return (
    <>
      <div className="App-text-box">
        <h4 className="App-main-title">{currentQuestion?.category}</h4>
      </div>
      <div className="App-text-box App-question-box">
        {decodeHTMLEntities(currentQuestion?.question)}
      </div>
      <div className="App-text-box">
        <h4 className="App-question-control">{`${indexQuestion + 1} of ${
          questions.length
        }`}</h4>
      </div>
    </>
  );
}
