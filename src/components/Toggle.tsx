import { useState } from "react";
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
  toggleNum: number;
  option: string[];
  state: StateInterface;
  dispatch: React.Dispatch<StateAction>;
  actualAnswers: string[];
}

interface isSelectedInterface {
  left: boolean;
  right: boolean;
}

export function Toggle({
  toggleNum,
  option,
  state,
  dispatch,
  actualAnswers,
}: ToggleProps): JSX.Element {
  const [isSelected, setIsSelected] = useState<isSelectedInterface>({
    left: false,
    right: false,
  });

  const optionOne = option[0];
  const optionTwo = option[1];

  function handleClickToggle(
    selectedToggle: isSelectedInterface,
    selectedOption: string,
    isLocked: boolean
  ) {
    if (isLocked) {
      return;
    }
    setIsSelected(selectedToggle);
    state.selectedAnswers[toggleNum] = selectedOption;
    const newSelectedAnswers = [...state.selectedAnswers];

    const areSelectionsCorrect: boolean[] = newSelectedAnswers.map(
      (selectedAnswer, answerIndex) =>
        selectedAnswer === actualAnswers[answerIndex]
    );

    const answerAssessment = giveAnswerAssessment(
      areSelectionsCorrect,
      assessmentLibrary
    );

    dispatch({
      type: stateActionsLibrary.SET_SELECTED_ANSWERS_AND_ASSESSMENT,
      payload: {
        ...state,
        selectedAnswers: newSelectedAnswers,
        answerAssessment: answerAssessment,
      },
    });
    if (answerAssessment === assessmentLibrary.CORRECT) {
      dispatch({
        type: stateActionsLibrary.SET_TOGGLE_STYLE,
        payload: { ...state, toggleStyle: "selectedCorrect" },
      });
    } else if (answerAssessment === assessmentLibrary.ALMOST_THERE) {
      dispatch({
        type: stateActionsLibrary.SET_TOGGLE_STYLE,
        payload: { ...state, toggleStyle: "selectedAlmostThere" },
      });
    } else if (answerAssessment === assessmentLibrary.GETTING_BETTER) {
      dispatch({
        type: stateActionsLibrary.SET_TOGGLE_STYLE,
        payload: { ...state, toggleStyle: "selectedGettingBetter" },
      });
    } else if (answerAssessment === assessmentLibrary.INCORRECT) {
      dispatch({
        type: stateActionsLibrary.SET_TOGGLE_STYLE,
        payload: { ...state, toggleStyle: "selectedAlmostThere" },
      });
    }
  }

  const leftToggleStyle = isSelected.left ? state.toggleStyle : "unselected";
  const rightToggleStyle = isSelected.right ? state.toggleStyle : "unselected";

  return (
    <section className="d-flex flex-row rectangle mb-2 mx-auto">
      <div
        onClick={() =>
          handleClickToggle(
            { left: true, right: false },
            optionOne,
            state.isLocked
          )
        }
        className={`d-flex flex-column w-50 ${leftToggleStyle}`}
      >
        <p className="m-auto defaultFont">{optionOne}</p>
      </div>
      <div
        onClick={() =>
          handleClickToggle(
            { left: false, right: true },
            optionTwo,
            state.isLocked
          )
        }
        className={`d-flex flex-column w-50 ${rightToggleStyle}`}
      >
        <p className="m-auto defaultFont">{optionTwo}</p>
      </div>
    </section>
  );
}
