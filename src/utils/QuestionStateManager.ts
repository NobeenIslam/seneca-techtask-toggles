export interface stateActionsLibraryInterface {
  SET_SELECTED_ANSWERS_AND_ASSESSMENT: "SET_SELECTED_ANSWERS_AND_ASSESSMENT";
  SET_TOGGLE_STYLE: "SET_TOGGLE_STYLE";
  SET_LOCK: "SET_LOCK";
  SET_SELECTED_TOGGLES: "SET_SELECTED_TOGGLES";
}

export const stateActionsLibrary: stateActionsLibraryInterface = {
  SET_SELECTED_ANSWERS_AND_ASSESSMENT: "SET_SELECTED_ANSWERS_AND_ASSESSMENT",
  SET_TOGGLE_STYLE: "SET_TOGGLE_STYLE",
  SET_LOCK: "SET_LOCK",
  SET_SELECTED_TOGGLES: "SET_SELECTED_TOGGLES",
};

interface isSelectedInterface {
  first: boolean;
  second: boolean;
  third: boolean;
}

export interface StateInterface {
  selectedAnswers: string[];
  toggleStyle: string;
  answerAssessment: string;
  isLocked: boolean;
  selectedToggles: isSelectedInterface[];
}

export interface StateAction {
  type: string;
  questionProperties: StateInterface;
  questionRef: number;
}

export function reducer(
  states: StateInterface[],
  action: StateAction
): StateInterface[] {
  switch (action.type) {
    case stateActionsLibrary.SET_SELECTED_ANSWERS_AND_ASSESSMENT: {
      //console.log("Before:", states[action.questionRef]);
      states[action.questionRef].selectedAnswers =
        action.questionProperties.selectedAnswers;
      states[action.questionRef].answerAssessment =
        action.questionProperties.answerAssessment;
      //console.log("After:", states[action.questionRef]);

      return [...states];
    }
    case stateActionsLibrary.SET_SELECTED_TOGGLES: {
      states[action.questionRef].selectedToggles =
        action.questionProperties.selectedToggles;
      return [...states];
    }
    case stateActionsLibrary.SET_TOGGLE_STYLE: {
      states[action.questionRef].toggleStyle =
        action.questionProperties.toggleStyle;
      return [...states];
    }
    case stateActionsLibrary.SET_LOCK: {
      states[action.questionRef].isLocked = true;
      return [...states];
    }
    default: {
      return states;
    }
  }
}
