import { giveAnswerAssessment } from "./giveAnswerAssessments";

test("Gives right assessment for different answer suggestions for 4 option questions", () => {
  expect(giveAnswerAssessment([true, true, true, true])).toStrictEqual(
    "correct"
  );
  expect(giveAnswerAssessment([true, true, true, false])).toStrictEqual(
    "almost-there"
  );
  expect(giveAnswerAssessment([true, true, false, true])).toStrictEqual(
    "almost-there"
  );
  expect(giveAnswerAssessment([true, true, false, false])).toStrictEqual(
    "getting-better"
  );
  expect(giveAnswerAssessment([false, true, false, false])).toStrictEqual(
    "incorrect"
  );
  expect(giveAnswerAssessment([false, false, false, false])).toStrictEqual(
    "incorrect"
  );
});

test("Gives right assessment for different answer suggestions for 3 option questions", () => {
  expect(giveAnswerAssessment([true, true, true])).toStrictEqual("correct");
  expect(giveAnswerAssessment([true, false, true])).toStrictEqual(
    "almost-there"
  );
  expect(giveAnswerAssessment([true, true, false])).toStrictEqual(
    "almost-there"
  );
  expect(giveAnswerAssessment([true, false, false])).toStrictEqual("incorrect");
  expect(giveAnswerAssessment([false, true, false])).toStrictEqual("incorrect");
});

test("Gives right assessment for different answer suggestions for 2 option questions", () => {
  expect(giveAnswerAssessment([true, true])).toStrictEqual("correct");
  expect(giveAnswerAssessment([false, true])).toStrictEqual("incorrect");
  expect(giveAnswerAssessment([false, false])).toStrictEqual("incorrect");
});
