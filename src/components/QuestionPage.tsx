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
  type urlParams = { questionId: string };
  const { questionId } = useParams() as urlParams; //To stop typeScript suggesting it could be undefined too

  const questionRef = parseInt(questionId) - 1;
  const thisQuestion = questions[questionRef]; //So question 1 appears as Q1 not Q0

  const questionOptions = thisQuestion.options;
  const actualAnswers = thisQuestion.answers;

  const initialStates = [];

  for (const question of questions) {
    const initialState: StateInterface = {
      selectedAnswers: new Array(question.options.length).fill(""),
      //The way an answer is selected in toggle depends on the array index, so the initialised version needs to match
      answerAssessment: "",
      toggleStyle: "unselected",
      isLocked: false,
    };
    initialStates.push(initialState);
  }

  const [states, dispatch] = useReducer(reducer, initialStates);

  console.log("Global State", states);
  console.log("Questions,", questions);

  //Everytime the assessment changes check if you need to lock the answer
  useEffect(() => {
    if (states[questionRef].answerAssessment === assessmentLibrary.CORRECT) {
      dispatch({
        type: stateActionsLibrary.SET_LOCK,
        stateProperties: states[questionRef],
        questionRef: questionRef,
      });
    }
    //Requesting to put state in dependancy array which triggers infinite loop.
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [states[questionRef].answerAssessment]);

  const backgroundStyle = determineBackgroundStyle(
    states[questionRef].answerAssessment,
    assessmentLibrary
  );

  const optionToggles: JSX.Element[] = questionOptions.map((option, index) => (
    <Toggle
      key={index}
      toggleNum={index}
      option={option}
      state={states[questionRef]}
      questionRef={questionRef}
      dispatch={dispatch}
      actualAnswers={actualAnswers}
    />
  ));

  const message = createMessage(
    states[questionRef].answerAssessment,
    assessmentLibrary
  );

  return (
    <main className={`${backgroundStyle} pageHeight`}>
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
