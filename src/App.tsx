import { useEffect, useReducer, useState } from "react";
import { QuestionPage } from "./components/QuestionPage";
import { dummyQuestions } from "./utils/dummyData";
import { QuestionInterface } from "./utils/Interfaces";
import {
  initialState,
  reducer,
  stateActionsLibrary,
} from "./utils/QuestionStateManager";

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  useEffect(() => {
    dispatch({
      type: stateActionsLibrary.SET_QUESTIONS,
      payload: { ...state, questions: dummyQuestions },
    });
  }, []);

  return (
    <>
      <QuestionPage state={state} dispatch={dispatch} />
    </>
  );
}

export default App;
