import {
  assessmentLibrary,
  giveAnswerAssessment,
} from "./giveAnswerAssessment";

test("Gives right assessment for different answer suggestions for 4 option questions", () => {
  expect(
    giveAnswerAssessment([true, true, true, true], assessmentLibrary)
  ).toStrictEqual(assessmentLibrary.CORRECT);
  expect(
    giveAnswerAssessment([true, true, true, false], assessmentLibrary)
  ).toStrictEqual(assessmentLibrary.ALMOST_THERE);
  expect(
    giveAnswerAssessment([true, true, false, true], assessmentLibrary)
  ).toStrictEqual(assessmentLibrary.ALMOST_THERE);
  expect(
    giveAnswerAssessment([true, true, false, false], assessmentLibrary)
  ).toStrictEqual(assessmentLibrary.GETTING_BETTER);
  expect(
    giveAnswerAssessment([false, true, false, false], assessmentLibrary)
  ).toStrictEqual(assessmentLibrary.INCORRECT);
  expect(
    giveAnswerAssessment([false, false, false, false], assessmentLibrary)
  ).toStrictEqual(assessmentLibrary.INCORRECT);
});

test("Gives right assessment for different answer suggestions for 3 option questions", () => {
  expect(
    giveAnswerAssessment([true, true, true], assessmentLibrary)
  ).toStrictEqual(assessmentLibrary.CORRECT);
  expect(
    giveAnswerAssessment([true, false, true], assessmentLibrary)
  ).toStrictEqual(assessmentLibrary.ALMOST_THERE);
  expect(
    giveAnswerAssessment([true, true, false], assessmentLibrary)
  ).toStrictEqual(assessmentLibrary.ALMOST_THERE);
  expect(
    giveAnswerAssessment([true, false, false], assessmentLibrary)
  ).toStrictEqual(assessmentLibrary.INCORRECT);
  expect(
    giveAnswerAssessment([false, true, false], assessmentLibrary)
  ).toStrictEqual(assessmentLibrary.INCORRECT);
});

test("Gives right assessment for different answer suggestions for 2 option questions", () => {
  expect(giveAnswerAssessment([true, true], assessmentLibrary)).toStrictEqual(
    assessmentLibrary.CORRECT
  );
  expect(giveAnswerAssessment([false, true], assessmentLibrary)).toStrictEqual(
    assessmentLibrary.ALMOST_THERE
  );
  expect(giveAnswerAssessment([true, false], assessmentLibrary)).toStrictEqual(
    assessmentLibrary.ALMOST_THERE
  );
  expect(giveAnswerAssessment([false, false], assessmentLibrary)).toStrictEqual(
    assessmentLibrary.INCORRECT
  );
});
