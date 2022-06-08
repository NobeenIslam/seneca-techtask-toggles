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
  stateActionsLibrary: stateActionsLibraryInterface,
  dispatch: React.Dispatch<StateAction>
): void {
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
