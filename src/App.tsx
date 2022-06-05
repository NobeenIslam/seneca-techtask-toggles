import { useEffect, useState } from "react";
import { QuestionPage } from "./components/QuestionPage";
import { dummyQuestions } from "./utils/dummyData";
import { QuestionInterface } from "./utils/Interfaces";

function App(): JSX.Element {
  const [questions, setQuestions] = useState<QuestionInterface[]>([]);
  console.log(questions);
  useEffect(() => {
    setQuestions(dummyQuestions);
  }, []);

  return (
    <>
      <QuestionPage questions={questions} />
    </>
  );
}

export default App;
