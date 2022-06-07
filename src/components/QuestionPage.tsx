import { useReducer, useState } from "react";
import {
  assessmentLibrary,
  giveAnswerAssessment,
} from "../utils/giveAnswerAssessment";
import { QuestionInterface } from "../utils/Interfaces";
import {
  reducer,
  initialState,
} from "../utils/QuestionStateManager";
import { Toggle } from "./Toggle";

interface QuestionProps {
  questions: QuestionInterface[];
}

export function QuestionPage({ questions }: QuestionProps): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  const thisQuestion = questions[3];
  const questionOptions = thisQuestion.options;
  const questionAnswers = thisQuestion.answers;

  const initialSelectedAnswers = new Array(questionOptions.length).fill(""); //For flexibility when number of options changes
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(
    initialSelectedAnswers
  );

  const markedAnswers: boolean[] = selectedAnswers.map(
    (selectedAnswer, answerIndex) =>
      selectedAnswer === questionAnswers[answerIndex]
  );

  const answerAssessment = giveAnswerAssessment(
    markedAnswers,
    assessmentLibrary
  );

  let backgroundStyle = "backgroundIncorrect";

  if (answerAssessment === assessmentLibrary.CORRECT) {
    backgroundStyle = "backgroundCorrect";
  } else if (answerAssessment === assessmentLibrary.ALMOST_THERE) {
    backgroundStyle = "backgroundAlmostThere";
  } else if (answerAssessment === assessmentLibrary.GETTING_BETTER) {
    backgroundStyle = "backgroundGettingBetter";
  } else if (answerAssessment === assessmentLibrary.INCORRECT) {
    backgroundStyle = "backgroundIncorrect";
  }

  console.log({ actualAnswers: questionAnswers, assessment: markedAnswers });

  const questionToggles: JSX.Element[] = questionOptions.map(
    (option, index) => (
      <Toggle
        key={index}
        optionNum={index}
        option={option}
        selectedAnswers={selectedAnswers}
        setSelectedAnswers={setSelectedAnswers}
      />
    )
  );

  return (
    <main className={`${backgroundStyle} pageSize`}>
      <div>""</div>
      <section className="mt-5">
        <h1 className="text-center defaultFont questionText mb-5">
          {thisQuestion.question}
        </h1>
        <section className="container mx-auto mb-5">{questionToggles}</section>
        <h2 className="text-center defaultFont resultText">
          {answerAssessment === assessmentLibrary.CORRECT
            ? "The answer is correct"
            : "The answer is incorrect"}
        </h2>
      </section>
    </main>
  );
}
