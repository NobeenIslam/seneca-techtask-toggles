import { Link } from "react-router-dom";
import { QuestionInterface } from "../utils/Interfaces";

interface HomePageProps {
  questions: QuestionInterface[];
}

export function HomePage({ questions }: HomePageProps): JSX.Element {
  return (
    <main className="d-flex backgroundCorrect pageSize">
      <div className="m-auto">
        <Link to="/1">
          <button className="defaultFont btn btn-success btn-lg">
            <h1>Begin Learning</h1>
          </button>
        </Link>
      </div>
    </main>
  );
}
