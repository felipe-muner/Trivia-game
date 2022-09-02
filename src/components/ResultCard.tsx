import { useStore } from "../store";

export default function ResultCard() {
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
    <div className="Quiz-question-card">
      <h2>You Scored</h2>
      <h2>{`${scored} / ${questions.length}`}</h2>
      <ul>
        {questionsWithUserAnswer.map((it, index) => {
          const isCorrect = it.user_answer?.toString();
          return (
            <li key={index.toString()}>{`${isCorrect} - ${it.question}`}</li>
          );
        })}
      </ul>
    </div>
  );
}
