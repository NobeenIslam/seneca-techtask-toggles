import {
  StateInterface,
  StateAction,
  stateActionsLibrary,
} from "../utils/QuestionStateManager";

interface ToggleProps {
  option: string[];
  state: StateInterface;
  dispatch: React.Dispatch<StateAction>;
}

export function Toggle({ option, state, dispatch }: ToggleProps): JSX.Element {
  function handleClickLeftOption() {
    dispatch({
      type: stateActionsLibrary.SET_LEFT_SELECTED_STYLE,
      payload: { ...state, leftSelectedStyle: "selectedIncorrect" },
    });
    //the disabling of the other option is done directly in reducer
  }

  function handleClickRightOption() {
    dispatch({
      type: stateActionsLibrary.SET_RIGHT_SELECTED_STYLE,
      payload: { ...state, rightSelectedStyle: "selectedIncorrect" },
    });
  }

  return (
    <section className="d-flex flex-row rectangle mb-2 mx-auto">
      <div
        onClick={handleClickLeftOption}
        className={`d-flex flex-column w-50 ${state.leftSelectedStyle}`}
      >
        <p className="m-auto defaultFont">{option[0]}</p>
      </div>
      <div
        onClick={handleClickRightOption}
        className={`d-flex flex-column w-50 ${state.rightSelectedStyle}`}
      >
        <p className="m-auto defaultFont">{option[1]}</p>
      </div>
    </section>
  );
}
