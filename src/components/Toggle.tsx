import { useState } from "react";
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
    setSelectedStyle({ left: "selectedIncorrect", right: "unselected" });
    state.selectedAnswers[optionNum] = optionOne;
    const newSelectedAnswers = [...state.selectedAnswers];
    dispatch({
      type: stateActionsLibrary.SET_SELECTED_ANSWERS_AND_MARK,
      payload: {
        ...state,
        selectedAnswers: newSelectedAnswers,
        actualAnswers: actualAnswers,
      },
    });
  }

  function handleClickRightOption() {
    setSelectedStyle({ left: "unselected", right: "selectedIncorrect" });
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
