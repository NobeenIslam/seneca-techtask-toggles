import { QuestionInterface } from "./Interfaces";

const questionOneOptions = [
  ["Cell Wall", "Ribosomes"],
  ["Cytoplasms", "Chloroplast"],
  ["Partially permeable membrane", "Impermeable membrane"],
  ["Cellulose", "Mitochondria"],
];

export const questionOne: QuestionInterface = {
  questionId: 1,
  question: "What is in an animal cell?",
  options: questionOneOptions,
  answers: [
    questionOneOptions[0][1],
    questionOneOptions[1][1],
    questionOneOptions[2][1],
    questionOneOptions[3][0],
  ],
};

const questionTwoOptions = [
  ["Good pay", "Bad pay"],
  ["Lots of meetings", "Less meetings"],
  ["Free coffee", "Expensive coffee"],
  ["Bear in office", "Dog in office"],
];

export const questionTwo: QuestionInterface = {
  questionId: 2,
  question: "What are the ideal conditions inside an office",
  options: questionTwoOptions,
  answers: [
    questionTwoOptions[0][0],
    questionTwoOptions[1][1],
    questionTwoOptions[2][0],
    questionTwoOptions[3][0],
  ],
};

const questionThreeOptions = [
  ["Liverpool", "Chelsea", "Man Utd"],
  ["Serena Williams", "Naomi Osaka"],
];

export const questionThree: QuestionInterface = {
  questionId: 3,
  question: "What are the best sports people & teams?",
  options: questionThreeOptions,
  answers: [questionThreeOptions[0][0], questionThreeOptions[1][1]],
};

export const dummyQuestions: QuestionInterface[] = [
  questionOne,
  questionTwo,
  questionThree,
];
