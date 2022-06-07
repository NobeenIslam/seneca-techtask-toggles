
export const stateActionsLibrary = {
  SET_ANSWERS: "SET_ANSWERS",
  SET_LOCK: "SET_LOCK",
};

export interface StateInterface {
  selectedAnswers: string[];
  is_locked: boolean;
}

export const initialState: StateInterface = {
  selectedAnswers: [],
  is_locked: false,
};

export interface StateAction {
  type: string;
  payload: StateInterface;
}

export function reducer(
  state: StateInterface,
  action: StateAction
): StateInterface {
  switch (action.type) {
    case stateActionsLibrary.SET_ANSWERS: {
      return { ...state, selectedAnswers: action.payload.selectedAnswers };
    }
    case stateActionsLibrary.SET_LOCK: {
      return { ...state, is_locked: true };
    }
    default: {
      return state;
    }
  }
}
