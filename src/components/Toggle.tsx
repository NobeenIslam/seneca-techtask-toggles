import { useState } from "react";

interface ToggleProps {
  optionNum: number;
  option: string[];
  selectedAnswers: string[];
  setSelectedAnswers: (arg0: string[]) => void;
}

interface SelectedStyleInterface {
  left: string;
  right: string;
}

export function Toggle({
  optionNum,
  option,
  selectedAnswers,
  setSelectedAnswers,
}: ToggleProps): JSX.Element {
  const [selectedStyle, setSelectedStyle] = useState<SelectedStyleInterface>({
    left: "unselected",
    right: "unselected",
  });

  console.log("Selected Answers", selectedAnswers);

  const optionOne = option[0];
  const optionTwo = option[1];

  function handleClickLeftOption() {
    setSelectedStyle({ left: "selectedIncorrect", right: "unselected" });
    selectedAnswers[optionNum] = optionOne;
    const newSelectedAnswers = [...selectedAnswers];
    setSelectedAnswers(newSelectedAnswers);
  }

  function handleClickRightOption() {
    setSelectedStyle({ left: "unselected", right: "selectedIncorrect" });
    selectedAnswers[optionNum] = optionTwo;
    const newSelectedAnswers = [...selectedAnswers];
    setSelectedAnswers(newSelectedAnswers);
  }

  return (
    <section className="d-flex flex-row rectangle mb-2 mx-auto">
      <div
        onClick={handleClickLeftOption}
        className={`d-flex flex-column w-50 ${selectedStyle.left}`}
      >
        <p className="m-auto defaultFont">{optionOne}</p>
      </div>
      <div
        onClick={handleClickRightOption}
        className={`d-flex flex-column w-50 ${selectedStyle.right}`}
      >
        <p className="m-auto defaultFont">{optionTwo}</p>
      </div>
    </section>
  );
}
