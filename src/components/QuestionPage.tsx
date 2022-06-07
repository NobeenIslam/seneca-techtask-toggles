import { useEffect, useReducer } from "react";
import { assessmentLibrary } from "../utils/giveAnswerAssessment";
import { QuestionInterface } from "../utils/Interfaces";
import {
  reducer,
  stateActionsLibrary,
  StateInterface,
} from "../utils/QuestionStateManager";
import { Toggle } from "./Toggle";

interface QuestionProps {
  questions: QuestionInterface[];
}

export function QuestionPage({ questions }: QuestionProps): JSX.Element {
  const thisQuestion = questions[0];
  const questionOptions = thisQuestion.options;
  const actualAnswers = thisQuestion.answers;

  const initialState: StateInterface = {
    selectedAnswers: new Array(questionOptions.length).fill(""),
    //For flexibility when number of options changes,
    answerAssessment: "",
    toggleStyle: "unselected",
    isLocked: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.answerAssessment === assessmentLibrary.CORRECT) {
      dispatch({ type: stateActionsLibrary.SET_LOCK, payload: { ...state } });
    }
    //Requesint to put state in dependancy array which triggers infinite loop.
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.answerAssessment]);

  console.log(state);

  let backgroundStyle = "backgroundIncorrect";

  if (state.answerAssessment === assessmentLibrary.CORRECT) {
    backgroundStyle = "backgroundCorrect";
  } else if (state.answerAssessment === assessmentLibrary.ALMOST_THERE) {
    backgroundStyle = "backgroundAlmostThere";
  } else if (state.answerAssessment === assessmentLibrary.GETTING_BETTER) {
    backgroundStyle = "backgroundGettingBetter";
  } else if (state.answerAssessment === assessmentLibrary.INCORRECT) {
    backgroundStyle = "backgroundIncorrect";
  }

  const questionToggles: JSX.Element[] = questionOptions.map(
    (option, index) => (
      <Toggle
        key={index}
        toggleNum={index}
        option={option}
        state={state}
        dispatch={dispatch}
        actualAnswers={actualAnswers}
      />
    )
  );

  return (
    <main className={`${backgroundStyle} pageSize`}>
      <div>""</div>
      <section className="mt-5">
        <h1 className="text-center defaultFont questionText mb-5">
          {thisQuestion.question}
        </h1>
        <section className="container mx-auto mb-5">{questionToggles}</section>
        <h2 className="text-center defaultFont resultText">
          {state.answerAssessment === assessmentLibrary.CORRECT
            ? "The answer is correct"
            : "The answer is incorrect"}
        </h2>
      </section>
    </main>
  );
}
