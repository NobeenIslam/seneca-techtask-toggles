import { markSelectedAnswers } from "./markSelectedAnswers";

const answerWithFourChoices = ["a", "b", "c", "d"];
const answerWithThreeChoices = ["a", "b", "c"];
const answerWithTwoChoices = ["a", "b"];

test("Marks a 4 choice answer correctly based on input", () => {
  expect(
    markSelectedAnswers(["a", "b", "c", "d"], answerWithFourChoices)
  ).toStrictEqual([true, true, true, true]);
  expect(
    markSelectedAnswers(["b", "c", "d", "a"], answerWithFourChoices)
  ).toStrictEqual([true, true, true, true]);
  expect(
    markSelectedAnswers(["b", "wrong", "d", "a"], answerWithFourChoices)
  ).toStrictEqual([true, false, true, true]);
  expect(
    markSelectedAnswers(["wrong", "c", "d", "gcf"], answerWithFourChoices)
  ).toStrictEqual([false, true, true, false]);
  expect(
    markSelectedAnswers(["bqwfwef", "cww", "dee", "a"], answerWithFourChoices)
  ).toStrictEqual([false, false, false, true]);
});

test("Marks a 3 choice answer correctly based on input", () => {
  expect(
    markSelectedAnswers(["a", "b", "c"], answerWithThreeChoices)
  ).toStrictEqual([true, true, true]);
  expect(
    markSelectedAnswers(["b", "c", "a"], answerWithThreeChoices)
  ).toStrictEqual([true, true, true]);
  expect(
    markSelectedAnswers(["b", "wrong", "a"], answerWithThreeChoices)
  ).toStrictEqual([true, false, true]);
  expect(
    markSelectedAnswers(["wrong", "c", "gcf"], answerWithThreeChoices)
  ).toStrictEqual([false, true, false]);
  expect(
    markSelectedAnswers(["bqwfwef", "cww", "dee"], answerWithThreeChoices)
  ).toStrictEqual([false, false, false]);
});

test("Marks a 2 choice answer correctly based on input", () => {
  expect(markSelectedAnswers(["a", "b"], answerWithTwoChoices)).toStrictEqual([
    true,
    true,
  ]);
  expect(markSelectedAnswers(["b", "a"], answerWithTwoChoices)).toStrictEqual([
    true,
    true,
  ]);
  expect(
    markSelectedAnswers(["b", "wrong"], answerWithTwoChoices)
  ).toStrictEqual([true, false]);
  expect(
    markSelectedAnswers(["wrong", "b"], answerWithTwoChoices)
  ).toStrictEqual([false, true]);
  expect(
    markSelectedAnswers(["bqwfwef", "cww"], answerWithTwoChoices)
  ).toStrictEqual([false, false]);
});
