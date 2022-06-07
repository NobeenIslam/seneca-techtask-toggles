import { QuestionPage } from "./components/QuestionPage";
import { dummyQuestions } from "./utils/dummyData";

function App(): JSX.Element {
  const questions = dummyQuestions;

  return (
    <>
      <QuestionPage questions={questions} />
    </>
  );
}

export default App;
