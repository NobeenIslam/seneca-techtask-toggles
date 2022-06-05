import { QuestionInterface } from "./Interfaces";

export const questionOne: QuestionInterface = {
  questionId: 1,
  question: "What is in an animal cell?",
  optionOne: ["Cell Wall", "Ribosomes"],
  optionTwo: ["Cytoplasms", "Chloroplast"],
  optionThree: ["Partially permeable membrane", " Impermeable membrane"],
  optionFour: ["Cellulose, Mitochondria"],
  answerOne: "Ribosomes",
  answerTwo: "Chloroplast",
  answerThree: "Impermeable Membrane",
  answerFour: "Cellulose",
};

export const questionTwo: QuestionInterface = {
  questionId: 2,
  question: "What are the ideal conditions inside an office",
  optionOne: ["Good pay", "Bad pay"],
  optionTwo: ["Lots of meetings", "Less meetings"],
  optionThree: ["Free coffee", "Expensive coffee"],
  optionFour: ["Bear in office", "Dog in office"],
  answerOne: "Good pay",
  answerTwo: "Lots of meetings",
  answerThree: "Free coffee",
  answerFour: "Bear in office",
};

export const questionThree: QuestionInterface = {
  questionId: 3,
  question: "What are the best sports people & teams?",
  optionOne: ["Liverpool", "Chelsea", "Man Utd"],
  optionTwo: ["Serena Williams", "Naomi Osaka"],
  answerOne: "Liverpool",
  answerTwo: "Naomi Osaka",
};

export const dummyQuestions: QuestionInterface[] = [
  questionOne,
  questionTwo,
  questionThree,
];
