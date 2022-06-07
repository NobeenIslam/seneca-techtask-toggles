export const stateActionsLibrary = {
  SET_SELECTED_ANSWERS_AND_ASSESSMENT: "SET_SELECTED_ANSWERS_AND_ASSESSMENT",
  SET_TOGGLE_STYLE: "SET_TOGGLE_STYLE",
  SET_LOCK: "SET_LOCK",
};

export interface StateInterface {
  selectedAnswers: string[];
  toggleStyle: string;
  answerAssessment: string;
  isLocked: boolean;
}

export interface StateAction {
  type: string;
  payload: StateInterface;
}

export function reducer(
  state: StateInterface,
  action: StateAction
): StateInterface {
  switch (action.type) {
    case stateActionsLibrary.SET_SELECTED_ANSWERS_AND_ASSESSMENT: {
      return {
        ...state,
        selectedAnswers: action.payload.selectedAnswers,
        answerAssessment: action.payload.answerAssessment,
      };
    }
    case stateActionsLibrary.SET_TOGGLE_STYLE: {
      return {
        ...state,
        toggleStyle: action.payload.toggleStyle,
      };
    }
    case stateActionsLibrary.SET_LOCK: {
      return { ...state, isLocked: true };
    }
    default: {
      return state;
    }
  }
}
