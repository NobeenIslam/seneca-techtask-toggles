import { useReducer } from "react";
import { QuestionPage } from "./components/QuestionPage";
import { initialState, reducer } from "./utils/QuestionStateManager";

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <QuestionPage state={state} dispatch={dispatch} />
    </>
  );
}

export default App;
