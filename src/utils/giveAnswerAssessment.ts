export function giveAnswerAssessment(markedAnswers: boolean[]): string {
  let countCorrect = 0;
  let countIncorrect = 0;
  for (const mark of markedAnswers) {
    mark
      ? (countCorrect = countCorrect + 1)
      : (countIncorrect = countIncorrect + 1);
  }
  console.log(
    "Marked Answers",
    markedAnswers,
    "Correct:",
    countCorrect,
    "Incorrect",
    countIncorrect
  );
  if (countCorrect === markedAnswers.length) {
    return "correct";
  } else if (countCorrect === 0 || countCorrect === 1) {
    return "incorrect";
  } else if (countIncorrect === 1) {
    return "almost-there";
  } else if (countCorrect === countIncorrect || countCorrect < countIncorrect) {
    return "getting-better";
  }

  return "something has gone wrong";
}
