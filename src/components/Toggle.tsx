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
  questionProperties: StateInterface;
  questionRef: number;
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
  questionProperties,
  questionRef,
  dispatch,
  actualAnswers,
}: ToggleProps): JSX.Element {
  const optionOne = option[0];
  const optionTwo = option[1];
  const optionThree: string | undefined = option[2];
  //For a question with 4 options, the array contains 4 selected states.
  const currSelectedTogglesForQuestion = questionProperties.selectedToggles;

  function handleClickToggle(
    selectedToggle: isSelectedInterface,
    selectedOption: string,
    isLocked: boolean
  ) {
    if (isLocked) {
      return;
    }

    currSelectedTogglesForQuestion[toggleNum] = selectedToggle;
    const updatedSelectedToggles = [...currSelectedTogglesForQuestion];

    dispatch({
      type: stateActionsLibrary.SET_SELECTED_TOGGLES,
      questionRef: questionRef,
      questionProperties: {
        ...questionProperties,
        selectedToggles: updatedSelectedToggles,
      },
    });

    //Update selected answers and "mark them"
    const currSelectedAnswers = [...questionProperties.selectedAnswers];
    currSelectedAnswers[toggleNum] = selectedOption; //If the first toggle, inserts selected answer into first element (0th index)

    const areSelectionsCorrect: boolean[] = markSelectedAnswers(
      currSelectedAnswers,
      actualAnswers
    );

    const answerAssessment = giveAnswerAssessment(
      areSelectionsCorrect,
      assessmentLibrary
    );

    dispatch({
      type: stateActionsLibrary.SET_SELECTED_ANSWERS_AND_ASSESSMENT,
      questionProperties: {
        ...questionProperties,
        selectedAnswers: currSelectedAnswers,
        answerAssessment: answerAssessment,
      },
      questionRef: questionRef,
    });

    //Conditionals to set toggle styles based on how correct answer is
    dispatchCorrectToggleStyle(
      answerAssessment,
      assessmentLibrary,
      questionProperties,
      questionRef,
      stateActionsLibrary,
      dispatch
    );
  }

  //Style toggle if it's selected. If one toggleNum == 0 then style that toggle
  const firstToggleStyle = currSelectedTogglesForQuestion[toggleNum].first
    ? questionProperties.toggleStyle
    : "unselected";
  const secondToggleStyle = currSelectedTogglesForQuestion[toggleNum].second
    ? questionProperties.toggleStyle
    : "unselected";
  const thirdToggleStyle = currSelectedTogglesForQuestion[toggleNum].third
    ? questionProperties.toggleStyle
    : "unselected";

  const sceondOptionBorder320px =
    option.length === 3 ? "borderMiddle" : "borderBottom";

  return (
    <section className="toggleFrame">
      <div
        onClick={() =>
          handleClickToggle(
            { first: true, second: false, third: false },
            optionOne,
            questionProperties.isLocked
          )
        }
        className={`buttonContainer defaultFont ${firstToggleStyle}`}
      >
        {optionOne}
      </div>
      <div
        onClick={() =>
          handleClickToggle(
            { first: false, second: true, third: false },
            optionTwo,
            questionProperties.isLocked
          )
        }
        className={`buttonContainer defaultFont ${sceondOptionBorder320px} ${secondToggleStyle}`}
      >
        {optionTwo}
      </div>
      {optionThree && (
        <div
          onClick={() =>
            handleClickToggle(
              { first: false, second: false, third: true },
              optionThree,
              questionProperties.isLocked
            )
          }
          className={`buttonContainer defaultFont borderBottom ${thirdToggleStyle}`}
        >
          {optionThree}
        </div>
      )}
    </section>
  );
}
