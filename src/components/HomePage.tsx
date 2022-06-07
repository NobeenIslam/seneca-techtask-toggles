import { Link } from "react-router-dom";
import { QuestionInterface } from "../utils/Interfaces";

interface HomePageProps {
  questions: QuestionInterface[];
}

export function HomePage({ questions }: HomePageProps): JSX.Element {
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const randomQuestionId = getRandomInt(questions.length);

  return (
    <main className="d-flex backgroundCorrect pageSize">
      <div className="m-auto">
        <Link to={`/${randomQuestionId}`}>
          <button className="defaultFont btn btn-success btn-lg">
            <h1>Begin Learning</h1>
          </button>
        </Link>
      </div>
    </main>
  );
}
