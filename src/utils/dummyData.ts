import { QuestionInterface } from "./Interfaces";

export const questionOne: QuestionInterface = {
  questionId: 1,
  question: "What is in an animal cell?",
  options: [
    ["Cell Wall", "Ribosomes"],
    ["Cytoplasms", "Chloroplast"],
    ["Partially permeable membrane", " Impermeable membrane"],
    ["Cellulose", "Mitochondria"],
  ],
  answers: ["Ribosomes", "Chloroplast", "Impermeable Membrane", "Cellulose"],
};

export const questionTwo: QuestionInterface = {
  questionId: 2,
  question: "What are the ideal conditions inside an office",
  options: [
    ["Good pay", "Bad pay"],
    ["Lots of meetings", "Less meetings"],
    ["Free coffee", "Expensive coffee"],
    ["Bear in office", "Dog in office"],
  ],
  answers: ["Good pay", "Lots of meetings", "Free coffee", "Bear in office"],
};

export const questionThree: QuestionInterface = {
  questionId: 3,
  question: "What are the best sports people & teams?",
  options: [
    ["Liverpool", "Chelsea", "Man Utd"],
    ["Serena Williams", "Naomi Osaka"],
  ],
  answers: ["Liverpool", "Naomi Osaka"],
};

export const dummyQuestions: QuestionInterface[] = [
  questionOne,
  questionTwo,
  questionThree,
];
