import { AssementLevelsInterface } from "./giveAnswerAssessment";
import {
  StateAction,
  stateActionsLibraryInterface,
  StateInterface,
} from "./QuestionStateManager";

export function dispatchCorrectToggleStyle(
  answerAssessment: string,
  assessmentLibrary: AssementLevelsInterface,
  state: StateInterface,
  questionRef: number,
  stateActionsLibrary: stateActionsLibraryInterface,
  dispatch: React.Dispatch<StateAction>
): void {
  if (answerAssessment === assessmentLibrary.CORRECT) {
    dispatch({
      type: stateActionsLibrary.SET_TOGGLE_STYLE,
      stateProperties: { ...state, toggleStyle: "selectedCorrect" },
      questionRef: questionRef,
    });
  } else if (answerAssessment === assessmentLibrary.ALMOST_THERE) {
    dispatch({
      type: stateActionsLibrary.SET_TOGGLE_STYLE,
      stateProperties: { ...state, toggleStyle: "selectedAlmostThere" },
      questionRef: questionRef,
    });
  } else if (answerAssessment === assessmentLibrary.GETTING_BETTER) {
    dispatch({
      type: stateActionsLibrary.SET_TOGGLE_STYLE,
      stateProperties: { ...state, toggleStyle: "selectedGettingBetter" },
      questionRef: questionRef,
    });
  } else if (answerAssessment === assessmentLibrary.INCORRECT) {
    dispatch({
      type: stateActionsLibrary.SET_TOGGLE_STYLE,
      stateProperties: { ...state, toggleStyle: "selectedAlmostThere" },
      questionRef: questionRef,
    });
  }
}
