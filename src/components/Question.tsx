import { Toggle } from "./Toggle"

export function Question(): JSX.Element {
  return (
      <main className = "background-correct">
        <h1 className ="defaultText questionText">Place Holder Question</h1>
        <Toggle/>
        <h2 className="defaultText resultText">The answer is incorrect</h2>
      </main>
  )
}
