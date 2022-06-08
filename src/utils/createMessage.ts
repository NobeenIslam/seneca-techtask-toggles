import { AssementLevelsInterface } from "./giveAnswerAssessment";

export function createMessage(
  answerAssessment: string,
  assessmentLibrary: AssementLevelsInterface
): string {
  let message = "";
  if (answerAssessment === "") {
    message = "Please select your answers";
  } else {
    answerAssessment === assessmentLibrary.CORRECT
      ? (message = "The answer is correct")
      : (message = "The answer is incorrect");
  }

  return message;
}
