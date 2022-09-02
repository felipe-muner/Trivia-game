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
    <div className="Result-report-card">
      <h2>You Scored</h2>
      <h2>{`${scored} / ${questions.length}`}</h2>
      <ul>
        {questionsWithUserAnswer.map((it, index) => {
          const isCorrect = it.user_answer ? "+" : "-";
          return (
            <li key={index.toString()}>{`${isCorrect}  ${decodeHTMLEntities(
              it.question
            )}`}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResultReport;
