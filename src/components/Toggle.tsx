import { useEffect, useState } from "react";
import {
  assessmentLibrary,
  giveAnswerAssessment,
} from "../utils/giveAnswerAssessment";
import {
  StateAction,
  stateActionsLibrary,
  StateInterface,
} from "../utils/QuestionStateManager";

interface ToggleProps {
  optionNum: number;
  option: string[];
  state: StateInterface;
  dispatch: React.Dispatch<StateAction>;
  actualAnswers: string[];
}

interface SelectedStyleInterface {
  left: string;
  right: string;
}

export function Toggle({
  optionNum,
  option,
  state,
  dispatch,
  actualAnswers,
}: ToggleProps): JSX.Element {
  const [selectedStyle, setSelectedStyle] = useState<SelectedStyleInterface>({
    left: "unselected",
    right: "unselected",
  });

  const optionOne = option[0];
  const optionTwo = option[1];

  function handleClickLeftOption() {
    state.selectedAnswers[optionNum] = optionOne;
    const newSelectedAnswers = [...state.selectedAnswers];

    const markedAnswers: boolean[] = newSelectedAnswers.map(
      (selectedAnswer, answerIndex) =>
        selectedAnswer === actualAnswers[answerIndex]
    );

    const answerAssessment = giveAnswerAssessment(
      markedAnswers,
      assessmentLibrary
    );

    dispatch({
      type: stateActionsLibrary.SET_SELECTED_ANSWERS_AND_MARK,
      payload: {
        ...state,
        selectedAnswers: newSelectedAnswers,
        actualAnswers: actualAnswers,
      },
    });
    if (answerAssessment === assessmentLibrary.CORRECT) {
      setSelectedStyle({ left: "selectedCorrect", right: "unselected" });
    } else if (answerAssessment === assessmentLibrary.ALMOST_THERE) {
      setSelectedStyle({ left: "selectedAlmostThere", right: "unselected" });
    } else if (answerAssessment === assessmentLibrary.GETTING_BETTER) {
      setSelectedStyle({ left: "selectedGettingBetter", right: "unselected" });
    } else if (answerAssessment === assessmentLibrary.INCORRECT) {
      setSelectedStyle({ left: "selectedIncorrect", right: "unselected" });
    }
  }

  function handleClickRightOption() {
    state.selectedAnswers[optionNum] = optionTwo;
    const newSelectedAnswers = [...state.selectedAnswers];
    dispatch({
      type: stateActionsLibrary.SET_SELECTED_ANSWERS_AND_MARK,
      payload: {
        ...state,
        selectedAnswers: newSelectedAnswers,
        actualAnswers: actualAnswers,
      },
    });

    const markedAnswers: boolean[] = newSelectedAnswers.map(
      (selectedAnswer, answerIndex) =>
        selectedAnswer === actualAnswers[answerIndex]
    );

    const answerAssessment = giveAnswerAssessment(
      markedAnswers,
      assessmentLibrary
    );

    if (answerAssessment === assessmentLibrary.CORRECT) {
      setSelectedStyle({ left: "unselected", right: "selectedCorrect" });
    } else if (answerAssessment === assessmentLibrary.ALMOST_THERE) {
      setSelectedStyle({ left: "unselected", right: "selectedAlmostThere" });
    } else if (answerAssessment === assessmentLibrary.GETTING_BETTER) {
      setSelectedStyle({ left: "unselected", right: "selectedGettingBetter" });
    } else if (answerAssessment === assessmentLibrary.INCORRECT) {
      setSelectedStyle({ left: "unselected", right: "selectedIncorrect" });
    }
  }

  return (
    <section className="d-flex flex-row rectangle mb-2 mx-auto">
      <div
        onClick={handleClickLeftOption}
        className={`d-flex flex-column w-50 ${selectedStyle.left}`}
      >
        <p className="m-auto defaultFont">{optionOne}</p>
      </div>
      <div
        onClick={handleClickRightOption}
        className={`d-flex flex-column w-50 ${selectedStyle.right}`}
      >
        <p className="m-auto defaultFont">{optionTwo}</p>
      </div>
    </section>
  );
}
