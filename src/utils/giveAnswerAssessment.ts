interface AssementLevelsInterface {
  CORRECT: "correct";
  ALMOST_THERE: "almost-there";
  GETTING_BETTER: "getting-better";
  INCORRECT: "incorrect";
}

export const assessmentLibrary: AssementLevelsInterface = {
  CORRECT: "correct",
  ALMOST_THERE: "almost-there",
  GETTING_BETTER: "getting-better",
  INCORRECT: "incorrect",
};

export function giveAnswerAssessment(
  areSelectionsCorrect: boolean[],
  assessmentLibrary: AssementLevelsInterface
): string {
  let countCorrect = 0;
  let countIncorrect = 0;
  for (const isSelectionCorrect of areSelectionsCorrect) {
    isSelectionCorrect
      ? (countCorrect = countCorrect + 1)
      : (countIncorrect = countIncorrect + 1);
  }

  if (areSelectionsCorrect.length === 2 && countCorrect === 1) {
    return assessmentLibrary.ALMOST_THERE;
  }

  if (countCorrect === areSelectionsCorrect.length) {
    return assessmentLibrary.CORRECT;
  } else if (countCorrect === 0 || countCorrect === 1) {
    return assessmentLibrary.INCORRECT;
  } else if (countIncorrect === 1) {
    return assessmentLibrary.ALMOST_THERE;
  } else if (countCorrect === countIncorrect || countCorrect < countIncorrect) {
    return assessmentLibrary.GETTING_BETTER;
  }

  return "something has gone wrong";
}
