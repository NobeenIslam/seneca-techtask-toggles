import { useState } from "react";
import { StateAction, StateInterface } from "../utils/QuestionStateManager";
import { Toggle } from "./Toggle";

interface QuestionProps {
  state: StateInterface;
  dispatch: React.Dispatch<StateAction>;
}

export function QuestionPage({ state, dispatch }: QuestionProps): JSX.Element {
  const questionOptions = state.questions[0].options;
  const questionAnswers = state.questions[0].answers;

  const initialSelectedAnswers = new Array(questionOptions.length).fill(""); //For flexibility when number of options changes
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    initialSelectedAnswers
  );

  const [backgroundStyle, setBackgroundStyle] = useState<string>(
    "backgroundIncorrect"
  );

  const answerAssessment = selectedAnswers.map(
    (selectedAnswer, answerIndex) =>
      selectedAnswer === questionAnswers[answerIndex]
  );
  console.log({ a: selectedAnswers[2], b: questionAnswers[2] });
  console.log(selectedAnswers[2] === questionAnswers[2]);
  console.log({ actualAnswers: questionAnswers, assessment: answerAssessment });

  const questionToggles: JSX.Element[] = questionOptions.map(
    (option, index) => (
      <Toggle
        key={index}
        optionNum={index}
        option={option}
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
      />
    )
  );

  return (
    <main className="backgroundIncorrect pageSize">
      <div>""</div>
      <section className="mt-5">
        <h1 className="text-center defaultFont questionText mb-5">
          {state.questions[0].question}
        </h1>
        <section className="container mx-auto mb-5">{questionToggles}</section>
        <h2 className="text-center defaultFont resultText">
          The answer is incorrect
        </h2>
      </section>
    </main>
  );
}
