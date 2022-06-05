import { QuestionInterface } from "../utils/Interfaces";
import { StateAction, StateInterface } from "../utils/QuestionStateManager";
import { Toggle } from "./Toggle";

interface QuestionProps {
  state: StateInterface;
  dispatch: React.Dispatch<StateAction>;
}
export function QuestionPage({ state, dispatch }: QuestionProps): JSX.Element {
  return (
    <main className="background-correct">
      <h1 className="defaultText questionText">Place Holder Question</h1>
      <Toggle question={state.questions[0]} />
      <h2 className="defaultText resultText">The answer is incorrect</h2>
    </main>
  );
}
