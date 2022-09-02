import { useStore } from "../store";
import { decodeHTMLEntities } from "../utils";

const ResultReport = () => {
  const questions = useStore((state) => state.questions);
  const answers = useStore((state) => state.answers);
  
  const questionsWithUserAnswer = questions.map((it, i) => ({
    ...it,
    ...(it.correct_answer === answers[i] && { user_answer: true }),
  }));

  const scored = questionsWithUserAnswer.filter((it) =>
    Boolean(it.user_answer)
  ).length;

  return (
    <>
      <div className="App-text-box">
        <h4 className="App-main-title" style={{marginBottom: "5px"}}>
          You Scored
          <br />
          {`${scored} / ${questions.length}`}
        </h4>
      </div>
      <ul className="App-report-list">
        {questionsWithUserAnswer.map((it, index) => {
          const isCorrect = it.user_answer ? "+" : "-";
          return (
            <li className="App-report-item" key={index.toString()}>
              <span className="App-correct-sign">{`${isCorrect}`}</span>
              <span>{`${decodeHTMLEntities(it.question)}`}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ResultReport;
