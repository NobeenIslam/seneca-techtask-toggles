export function markSelectedAnswers(
  selectedAnswers: string[],
  answers: string[]
): boolean[] {
  const marks = [];
  for (const selection of selectedAnswers) {
    if (answers.includes(selection)) {
      marks.push(true);
    } else {
      marks.push(false);
    }
  }
  return marks;
}
