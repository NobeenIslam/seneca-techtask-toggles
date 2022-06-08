import { createMessage } from "./createMessage";
import { assessmentLibrary } from "./giveAnswerAssessment";

test("Display the right message based on selected answer conditions", () => {
  expect(createMessage("correct", assessmentLibrary)).toStrictEqual(
    "The answer is correct"
  );
  expect(createMessage("incorrect", assessmentLibrary)).toStrictEqual(
    "The answer is incorrect"
  );
  expect(createMessage("", assessmentLibrary)).toStrictEqual(
    "Please select your answers"
  );
});
