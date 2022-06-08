import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { QuestionPage } from "./components/QuestionPage";
import { dummyQuestions } from "./utils/dummyData";
import { shuffleQuestions } from "./utils/shuffle";

function App(): JSX.Element {
  const questions = dummyQuestions;

  const shuffledQuestions = shuffleQuestions(questions);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage questions={shuffledQuestions} />}
        ></Route>
        <Route
          path="/:questionId"
          element={<QuestionPage questions={shuffledQuestions} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
