import { Link } from "react-router-dom";
import { QuestionInterface } from "../utils/Interfaces";
import {
  StateAction,
  stateActionsLibrary,
} from "../utils/QuestionStateManager";

interface QuestionNavsProps {
  questions: QuestionInterface[];
  dispatch: React.Dispatch<StateAction>;
}

export function QuestionNavs({
  questions,
  dispatch,
}: QuestionNavsProps): JSX.Element {
  const questionIds: number[] = [];
  for (let id = 1; id <= questions.length; id++) {
    questionIds.push(id);
  }

  //Need to reset the state when going to a new question or things break
  function handleClickNavigationButton(questionId: number) {
    const questionDestination = questions[questionId - 1]; //Q4 accesses index 3 of array
    const initialEmptyOptions = new Array(
      questionDestination.options.length
    ).fill("");
    dispatch({
      type: stateActionsLibrary.RESET,
      payload: {
        selectedAnswers: initialEmptyOptions,
        answerAssessment: "",
        toggleStyle: "unselected",
        isLocked: false,
      },
    });
  }

  const questionNavigationButtons: JSX.Element[] = questionIds.map(
    (questionId) => (
      <Link key={questionId} to={`/${questionId}`}>
        <button
          onClick={() => handleClickNavigationButton(questionId)}
          className="defaultFont btn btn-success btn-lg m-2"
        >
          <h5>Q{questionId}</h5>
        </button>
      </Link>
    )
  );

  return (
    <div className="d-flex flex-row justify-content-center">
      {" "}
      <div>{questionNavigationButtons}</div>
    </div>
  );
}
