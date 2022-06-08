import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { QuestionPage } from "./components/QuestionPage";
import { dummyQuestions } from "./utils/dummyData";
import { shuffleOptions, shuffleQuestions } from "./utils/shuffle";

function App(): JSX.Element {
  const questions = dummyQuestions;

  const shuffledQuestions = shuffleQuestions(questions);
  const shuffledQuestionAndOptions = shuffledQuestions.map((question) => {
    return { ...question, options: shuffleOptions(question.options) };
  });

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<HomePage questions={shuffledQuestionAndOptions} />}
        ></Route>
        <Route
          path="/:questionId"
          element={<QuestionPage questions={shuffledQuestionAndOptions} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
