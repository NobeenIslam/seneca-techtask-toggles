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
  const currQuestionPropertiesToUpdate = states[action.questionRef];

  switch (action.type) {
    case stateActionsLibrary.SET_SELECTED_ANSWERS_AND_ASSESSMENT: {
      const updatedQuestionProperties = {
        ...currQuestionPropertiesToUpdate,
        selectedAnswers: action.questionProperties.selectedAnswers,
        answerAssessment: action.questionProperties.answerAssessment,
      };
      states[action.questionRef] = updatedQuestionProperties;
      return [...states];
    }
    case stateActionsLibrary.SET_SELECTED_TOGGLES: {
      const updatedQuestionProperties = {
        ...currQuestionPropertiesToUpdate,
        selectedToggles: action.questionProperties.selectedToggles,
      };
      states[action.questionRef] = updatedQuestionProperties;
      return [...states];
    }
    case stateActionsLibrary.SET_TOGGLE_STYLE: {
      const updatedQuestionProperties = {
        ...currQuestionPropertiesToUpdate,
        toggleStyle: action.questionProperties.toggleStyle,
      };
      states[action.questionRef] = updatedQuestionProperties;
      return [...states];
    }
    case stateActionsLibrary.SET_LOCK: {
      const updatedQuestionProperties = {
        ...currQuestionPropertiesToUpdate,
        isLocked: true,
      };
      states[action.questionRef] = updatedQuestionProperties;
      return [...states];
    }
    default: {
      return states;
    }
  }
}
