interface ToggleProps {
  option: string[];
}

export function Toggle({ option }: ToggleProps): JSX.Element {
  console.log(option);
  return (
    <section className="d-flex flex-row rectangle mb-2 mx-auto">
      <div className="d-flex flex-column w-50 selectedIncorrect">
        <p className="m-auto defaultFont unselected">{option[0]}</p>
      </div>
      <div className="d-flex flex-column w-50 justify-content-center">
        <p className="m-auto defaultFont unselected">{option[1]}</p>
      </div>
    </section>
  );
}
