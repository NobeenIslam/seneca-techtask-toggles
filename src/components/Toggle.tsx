import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { dispatchCorrectToggleStyle } from "../utils/dispatchCorrectToggleStyle";
import {
  assessmentLibrary,
  giveAnswerAssessment,
} from "../utils/giveAnswerAssessment";
import { markSelectedAnswers } from "../utils/markSelectedAnswers";
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
  first: boolean;
  second: boolean;
  third: boolean;
}

export function Toggle({
  toggleNum,
  option,
  state,
  dispatch,
  actualAnswers,
}: ToggleProps): JSX.Element {
  const [isSelected, setIsSelected] = useState<isSelectedInterface>({
    first: false,
    second: false,
    third: false,
  });

  //Reset togglestates to not be selected when changing pages
  const location = useLocation();
  useEffect(() => {
    setIsSelected({
      first: false,
      second: false,
      third: false,
    });
  }, [location]);

  //console.log("Toggle State", isSelected);

  const optionOne = option[0];
  const optionTwo = option[1];
  const optionThree: string | undefined = option[2];

  function handleClickToggle(
    selectedToggle: isSelectedInterface,
    selectedOption: string,
    isLocked: boolean
  ) {
    if (isLocked) {
      return;
    }
    setIsSelected(selectedToggle);

    //Update selected answers and "mark them"
    state.selectedAnswers[toggleNum] = selectedOption;
    const newSelectedAnswers = [...state.selectedAnswers];

    const areSelectionsCorrect: boolean[] = markSelectedAnswers(
      newSelectedAnswers,
      actualAnswers
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

    //Conditionals to set toggle styles based on how correct answer is
    dispatchCorrectToggleStyle(
      answerAssessment,
      assessmentLibrary,
      state,
      stateActionsLibrary,
      dispatch
    );
  }

  //Style toggle if it's selected
  const firstToggleStyle = isSelected.first ? state.toggleStyle : "unselected";
  const secondToggleStyle = isSelected.second
    ? state.toggleStyle
    : "unselected";
  const thirdToggleStyle = isSelected.third ? state.toggleStyle : "unselected";

  return (
    <section className="d-flex flex-row rectangle mb-2 mx-auto">
      <div
        onClick={() =>
          handleClickToggle(
            { first: true, second: false, third: false },
            optionOne,
            state.isLocked
          )
        }
        className={`d-flex flex-column w-50 ${firstToggleStyle}`}
      >
        <p className="text-center m-auto defaultFont">{optionOne}</p>
      </div>
      <div
        onClick={() =>
          handleClickToggle(
            { first: false, second: true, third: false },
            optionTwo,
            state.isLocked
          )
        }
        className={`d-flex flex-column w-50 ${secondToggleStyle}`}
      >
        <p className="text-center m-auto defaultFont">{optionTwo}</p>
      </div>
      {optionThree && (
        <div
          onClick={() =>
            handleClickToggle(
              { first: false, second: false, third: true },
              optionThree,
              state.isLocked
            )
          }
          className={`d-flex flex-column w-50 ${thirdToggleStyle}`}
        >
          <p className="m-auto defaultFont">{optionThree}</p>
        </div>
      )}
    </section>
  );
}
