import { useEffect, useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import { createMessage } from "../utils/createMessage";
import { determineBackgroundStyle } from "../utils/determineBackgroundStyle";
import { assessmentLibrary } from "../utils/giveAnswerAssessment";
import { QuestionInterface } from "../utils/Interfaces";
import {
  reducer,
  stateActionsLibrary,
  StateInterface,
} from "../utils/QuestionStateManager";
import { QuestionNavs } from "./QuestionNavs";
import { Toggle } from "./Toggle";

interface QuestionProps {
  questions: QuestionInterface[];
}

export function QuestionPage({ questions }: QuestionProps): JSX.Element {
  const { questionId } = useParams();

  let thisQuestion: QuestionInterface = {
    questionId: 0,
    question: "",
    options: [],
    answers: [],
  };

  if (questionId === undefined) {
    console.error("useParams has extracted an undefined questionId");
  } else {
    thisQuestion = questions[parseInt(questionId) - 1]; //So question 1 appears as Q1 not Q0
  }

  const questionOptions = thisQuestion.options;
  const actualAnswers = thisQuestion.answers;

  const initialState: StateInterface = {
    selectedAnswers: new Array(questionOptions.length).fill(""),
    //The way an answer is selected in toggle depends on the array index, so the initialised version needs to match
    answerAssessment: "",
    toggleStyle: "unselected",
    isLocked: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //console.log("Global State", state);

  //Everytime the assessment changes check if you need to lock the answer
  useEffect(() => {
    if (state.answerAssessment === assessmentLibrary.CORRECT) {
      dispatch({ type: stateActionsLibrary.SET_LOCK, payload: { ...state } });
    }
    //Requesting to put state in dependancy array which triggers infinite loop.
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.answerAssessment]);

  const backgroundStyle = determineBackgroundStyle(
    state.answerAssessment,
    assessmentLibrary
  );

  const optionToggles: JSX.Element[] = questionOptions.map((option, index) => (
    <Toggle
      key={index}
      toggleNum={index}
      option={option}
      state={state}
      dispatch={dispatch}
      actualAnswers={actualAnswers}
    />
  ));

  const message = createMessage(state.answerAssessment, assessmentLibrary);

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
        <section className="container mx-auto mb-5">{optionToggles}</section>
        <h2 className="text-center defaultFont resultText">{message}</h2>
        <QuestionNavs questions={questions} dispatch={dispatch} />
      </section>
    </main>
  );
}
