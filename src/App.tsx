import { useEffect, useState } from "react";
import { Question } from "./components/Question";
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
      <Question />
    </>
  );
}

export default App;
