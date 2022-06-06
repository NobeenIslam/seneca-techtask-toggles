interface ToggleProps {
  option: string[];
}

export function Toggle({ option }: ToggleProps): JSX.Element {
  console.log(option);
  return (
    <section className="rectangle red">
      <div className="optionBox">
        <p className="defaultText textUnselected">{option[0]}</p>
      </div>

      <div className="optionBox ">
        <p className="defaultText textUnselected">{option[1]}</p>
      </div>
    </section>
  );
}
