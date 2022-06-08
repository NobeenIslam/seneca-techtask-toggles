import { AssementLevelsInterface } from "./giveAnswerAssessment";

export function determineBackgroundStyle(
  answerAssessment: string,
  assessmentLibrary: AssementLevelsInterface
): string {
  let backgroundStyle = "backgroundIncorrect";

  //Conditionals to change background based on selection
  if (answerAssessment === assessmentLibrary.CORRECT) {
    backgroundStyle = "backgroundCorrect";
  } else if (answerAssessment === assessmentLibrary.ALMOST_THERE) {
    backgroundStyle = "backgroundAlmostThere";
  } else if (answerAssessment === assessmentLibrary.GETTING_BETTER) {
    backgroundStyle = "backgroundGettingBetter";
  } else if (answerAssessment === assessmentLibrary.INCORRECT) {
    backgroundStyle = "backgroundIncorrect";
  }
  return backgroundStyle;
}
