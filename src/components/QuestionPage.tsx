import { StateAction, StateInterface } from "../utils/QuestionStateManager";
import { Toggle } from "./Toggle";

interface QuestionProps {
  state: StateInterface;
  dispatch: React.Dispatch<StateAction>;
}

export function QuestionPage({ state, dispatch }: QuestionProps): JSX.Element {
  const questionOptions = state.questions[0].options;
  const questionToggles: JSX.Element[] = questionOptions.map(
    (option, index) => <Toggle key={index} option={option} />
  );

  return (
    <main className="background-incorrect">
      <h1 className="defaultText questionText">Place Holder Question</h1>
      <section className="toggleBlock">{questionToggles}</section>
      <h2 className="defaultText resultText">The answer is incorrect</h2>
    </main>
  );
}
