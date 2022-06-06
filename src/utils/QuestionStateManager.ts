import { dummyQuestions } from "./dummyData";
import { QuestionInterface } from "./Interfaces";

export const stateActionsLibrary = {
  SET_QUESTIONS: "SET_QUESTIONS",
  SET_ANSWERS: "SET_ANSWERS",
  SET_LOCK: "SET_LOCK",
  SET_LEFT_SELECTED_STYLE: "SET_LEFT_SELECTED_STYLE",
  SET_RIGHT_SELECTED_STYLE: "SET_RIGHT_SELECTED_STYLE",
};

export interface StateInterface {
  questions: QuestionInterface[];
  answers: string[];
  is_locked: boolean;
  leftSelectedStyle: string;
  rightSelectedStyle: string;
}

export const initialState: StateInterface = {
  questions: dummyQuestions,
  answers: [],
  is_locked: false,
  leftSelectedStyle: "",
  rightSelectedStyle: "",
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
    case stateActionsLibrary.SET_QUESTIONS: {
      return { ...state, questions: action.payload.questions };
    }
    case stateActionsLibrary.SET_ANSWERS: {
      return { ...state, answers: action.payload.answers };
    }
    case stateActionsLibrary.SET_LOCK: {
      return { ...state, is_locked: true };
    }
    case stateActionsLibrary.SET_LEFT_SELECTED_STYLE: {
      return {
        ...state,
        leftSelectedStyle: action.payload.leftSelectedStyle,
        rightSelectedStyle: "unselected",
      };
    }
    case stateActionsLibrary.SET_RIGHT_SELECTED_STYLE: {
      return {
        ...state,
        leftSelectedStyle: "unselected",
        rightSelectedStyle: action.payload.rightSelectedStyle,
      };
    }
    default: {
      return state;
    }
  }
}
