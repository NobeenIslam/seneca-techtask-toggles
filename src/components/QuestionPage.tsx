import { QuestionInterface } from "../utils/Interfaces";
import { Toggle } from "./Toggle";

interface QuestionProps {
  questions: QuestionInterface[];
}
export function QuestionPage({ questions }: QuestionProps): JSX.Element {
  return (
    <main className="background-correct">
      <h1 className="defaultText questionText">Place Holder Question</h1>
      <Toggle question={questions[0]} />
      <h2 className="defaultText resultText">The answer is incorrect</h2>
    </main>
  );
}
