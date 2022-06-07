import { useEffect, useReducer } from "react";
import { Link, useParams } from "react-router-dom";
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
  const { questionId } = useParams();

  let thisQuestion: QuestionInterface | [] = [];
  if (questionId === undefined) {
    thisQuestion = questions[0];
  } else {
    thisQuestion = questions[parseInt(questionId) - 1]; //So question 1 appears as Q1 not Q0
  }

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
    //Requesting to put state in dependancy array which triggers infinite loop.
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.answerAssessment]);

  let backgroundStyle = "backgroundIncorrect";

  //Conditionals to change background based on selection
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

  const questionIds: number[] = [];
  for (let id = 1; id <= questions.length; id++) {
    questionIds.push(id);
  }

  const questionNavigationButtons: JSX.Element[] = questionIds.map(
    (questionId) => (
      <Link key={questionId} to={`/${questionId}`}>
        <button className="defaultFont btn btn-success btn-lg m-2">
          <h5>Q{questionId}</h5>
        </button>
      </Link>
    )
  );

  //For the answer message which says incorrect / correct at the bottom of a page
  let message = "";
  if (state.answerAssessment === "") {
    message = "Please select your answers";
  } else {
    state.answerAssessment === assessmentLibrary.CORRECT
      ? (message = "The answer is correct")
      : (message = "The answer is incorrect");
  }

  return (
    <main className={`${backgroundStyle} pageSize`}>
      <div>""</div>
      <section className="mt-1">
        <div className="d-flex flex-row justify-content-center">
          {" "}
          <Link key={questionId} to="/">
            <button className="defaultFont btn btn-success btn-lg m-2">
              <h5>Back to Home</h5>
            </button>
          </Link>
        </div>
        <h1 className="text-center defaultFont questionText mb-5">
          {thisQuestion.question}
        </h1>
        <section className="container mx-auto mb-5">{questionToggles}</section>
        <h2 className="text-center defaultFont resultText">{message}</h2>
        <div className="d-flex flex-row justify-content-center">
          {" "}
          <div>{questionNavigationButtons}</div>
        </div>
      </section>
    </main>
  );
}
