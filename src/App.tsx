import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { QuestionPage } from "./components/QuestionPage";
import { dummyQuestions } from "./utils/dummyData";

function App(): JSX.Element {
  const questions = dummyQuestions;

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/:questionId"
          element={<QuestionPage questions={questions} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
