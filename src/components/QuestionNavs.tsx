import { Link } from "react-router-dom";
import { QuestionInterface } from "../utils/Interfaces";
import { StateAction } from "../utils/QuestionStateManager";

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

  const questionNavigationButtons: JSX.Element[] = questionIds.map(
    (questionId) => (
      <Link key={questionId} to={`/${questionId}`}>
        <button className="defaultFont btn btn-success btn-lg m-2">
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
