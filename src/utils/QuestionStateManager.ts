export interface stateActionsLibraryInterface {
  SET_SELECTED_ANSWERS_AND_ASSESSMENT: "SET_SELECTED_ANSWERS_AND_ASSESSMENT";
  SET_TOGGLE_STYLE: "SET_TOGGLE_STYLE";
  SET_LOCK: "SET_LOCK";
  RESET: "RESET";
}

export const stateActionsLibrary: stateActionsLibraryInterface = {
  SET_SELECTED_ANSWERS_AND_ASSESSMENT: "SET_SELECTED_ANSWERS_AND_ASSESSMENT",
  SET_TOGGLE_STYLE: "SET_TOGGLE_STYLE",
  SET_LOCK: "SET_LOCK",
  RESET: "RESET",
};

export interface StateInterface {
  selectedAnswers: string[];
  toggleStyle: string;
  answerAssessment: string;
  isLocked: boolean;
}

export interface StateAction {
  type: string;
  stateProperties: StateInterface;
  questionRef: number;
}

export function reducer(
  states: StateInterface[],
  action: StateAction
): StateInterface[] {
  switch (action.type) {
    case stateActionsLibrary.SET_SELECTED_ANSWERS_AND_ASSESSMENT: {
      console.log("Before:", states[action.questionRef]);
      states[action.questionRef].selectedAnswers =
        action.stateProperties.selectedAnswers;
      states[action.questionRef].answerAssessment =
        action.stateProperties.answerAssessment;
      console.log("After:", states[action.questionRef]);

      return [...states];
    }
    case stateActionsLibrary.SET_TOGGLE_STYLE: {
      states[action.questionRef].toggleStyle =
        action.stateProperties.toggleStyle;
      return [...states];
    }
    case stateActionsLibrary.SET_LOCK: {
      states[action.questionRef].isLocked = true;
      return [...states];
    }
    // case stateActionsLibrary.RESET: {
    //   //Spreading state to keep the selectedAnswers array
    //   return { ...action.payload };
    // }
    default: {
      return states;
    }
  }
}
