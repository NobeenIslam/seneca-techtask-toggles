export interface Question {
  question: string;
  optionOne: string[];
  optionTwo: string[];
  optionThree?: string[];
  optionFour?: string[];
  answerOne: string;
  answerTwo: string;
  answerThree?: string;
  answerFour?: string;
}
