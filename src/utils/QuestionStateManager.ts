import { dummyQuestions } from "./dummyData";
import { QuestionInterface } from "./Interfaces";

export const stateActionsLibrary = {
  SET_QUESTIONS: "SET_QUESTIONS",
  SET_ANSWERS: "SET_ANSWERS",
  SET_LOCK: "SET_LOCK",
};

export interface StateInterface {
  questions: QuestionInterface[];
  answers: string[];
  is_locked: boolean;
}

export const initialState: StateInterface = {
  questions: dummyQuestions,
  answers: [],
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
    case stateActionsLibrary.SET_QUESTIONS: {
      return { ...state, questions: action.payload.questions };
    }
    case stateActionsLibrary.SET_ANSWERS: {
      return { ...state, answers: action.payload.answers };
    }
    case stateActionsLibrary.SET_LOCK: {
      return { ...state, is_locked: true };
    }
    default: {
      return state;
    }
  }
}
