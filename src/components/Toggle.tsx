import { useState } from "react";
import { StateInterface, StateAction } from "../utils/QuestionStateManager";

interface ToggleProps {
  option: string[];
  state: StateInterface;
  dispatch: React.Dispatch<StateAction>;
}

interface SelectedStyleInterface {
  left: string;
  right: string;
}

export function Toggle({ option, state, dispatch }: ToggleProps): JSX.Element {
  const [selectedStyle, setSelectedStyle] = useState<SelectedStyleInterface>({
    left: "unselected",
    right: "unselected",
  });

  function handleClickLeftOption() {
    setSelectedStyle({ left: "selectedIncorrect", right: "unselected" });
  }

  function handleClickRightOption() {
    setSelectedStyle({ left: "unselected", right: "selectedIncorrect" });
  }

  return (
    <section className="d-flex flex-row rectangle mb-2 mx-auto">
      <div
        onClick={handleClickLeftOption}
        className={`d-flex flex-column w-50 ${selectedStyle.left}`}
      >
        <p className="m-auto defaultFont">{option[0]}</p>
      </div>
      <div
        onClick={handleClickRightOption}
        className={`d-flex flex-column w-50 ${selectedStyle.right}`}
      >
        <p className="m-auto defaultFont">{option[1]}</p>
      </div>
    </section>
  );
}
