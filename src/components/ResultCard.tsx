import { useStore } from "../store";

export default function ResultCard() {
  const questions = useStore((state) => state.questions);
  const answers = useStore((state) => state.answers);  

  return (
    <div className="Quiz-question-card">
      {JSON.stringify(answers)}
    </div>
  );
}
