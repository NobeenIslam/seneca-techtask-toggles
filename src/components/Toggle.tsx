import { QuestionInterface } from "../utils/Interfaces";

interface ToggleProps {
  question: QuestionInterface;
}

export function Toggle({ question }: ToggleProps): JSX.Element {
  console.log("First Question", question);
  return (
    <>
      <div>Test</div>
      <div>Test</div>
    </>
  );
}
