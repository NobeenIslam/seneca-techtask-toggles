import { determineBackgroundStyle } from "./determineBackgroundStyle";
import { assessmentLibrary } from "./giveAnswerAssessment";

test("Choose the right background style based on how correct the answer is", () => {
  expect(determineBackgroundStyle("correct", assessmentLibrary)).toStrictEqual(
    "backgroundCorrect"
  );
  expect(
    determineBackgroundStyle("almost-there", assessmentLibrary)
  ).toStrictEqual("backgroundAlmostThere");
  expect(
    determineBackgroundStyle("getting-better", assessmentLibrary)
  ).toStrictEqual("backgroundGettingBetter");
  expect(
    determineBackgroundStyle("incorrect", assessmentLibrary)
  ).toStrictEqual("backgroundIncorrect");
});
