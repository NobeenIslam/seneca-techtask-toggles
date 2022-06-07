export const stateActionsLibrary = {
  SET_SELECTED_ANSWERS_AND_ASSESSMENT: "SET_SELECTED_ANSWERS_AND_ASSESSMENT",
  SET_LOCK: "SET_LOCK",
};

export interface StateInterface {
  selectedAnswers: string[];
  answerAssessment: string;
  is_locked: boolean;
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
    case stateActionsLibrary.SET_LOCK: {
      return { ...state, is_locked: true };
    }
    default: {
      return state;
    }
  }
}
