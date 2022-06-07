import {
  assessmentLibrary,
  giveAnswerAssessment,
} from "./giveAnswerAssessment";

export const stateActionsLibrary = {
  SET_SELECTED_ANSWERS_AND_MARK: "SET_SELECTED_ANSWERS_AND_MARK",
  SET_LOCK: "SET_LOCK",
};

export interface StateInterface {
  selectedAnswers: string[];
  answerAssessment: string;
  is_locked: boolean;
}

interface PayloadInterface extends StateInterface {
  actualAnswers: string[];
}

export interface StateAction {
  type: string;
  payload: PayloadInterface;
}

export function reducer(
  state: StateInterface,
  action: StateAction
): StateInterface {
  switch (action.type) {
    case stateActionsLibrary.SET_SELECTED_ANSWERS_AND_MARK: {
      //SET The new selected answers
      //mark the answer, create an answer assessment
      //SET that to in state.
      const newSelectedAnswers = action.payload.selectedAnswers;
      const questionAnswers = action.payload.actualAnswers;
      const markedAnswers: boolean[] = newSelectedAnswers.map(
        (selectedAnswer, answerIndex) =>
          selectedAnswer === questionAnswers[answerIndex]
      );

      const answerAssessment = giveAnswerAssessment(
        markedAnswers,
        assessmentLibrary
      );

      return {
        ...state,
        selectedAnswers: newSelectedAnswers,
        answerAssessment: answerAssessment,
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
