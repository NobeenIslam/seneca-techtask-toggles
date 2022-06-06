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
    <main className="backgroundIncorrect pageSize">
      <div>""</div>
      <section className="mt-5">
        <h1 className="text-center defaultFont questionText mb-5">
          Place Holder Question
        </h1>
        <section className="container mx-auto mb-5">{questionToggles}</section>
        <h2 className="text-center defaultFont resultText">
          The answer is incorrect
        </h2>
      </section>
    </main>
  );
}
