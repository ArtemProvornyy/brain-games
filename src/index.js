import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

export const maxAttemptsNumber = 3;

// Absrtaction Questions
export const makeQuestion = (question, answer) => cons(question, answer);
export const getQuestion = (question) => car(question);
export const getAnswer = (question) => cdr(question);

export const getWelcomeString = () => console.log('Welcome to the Brain Games!');

export const getUserName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const genRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const buildQuestion = (questionContent) => makeQuestion(readlineSync.question(`Question: ${questionContent}`), readlineSync.question('Your answer: '));

export const isCorrectAnswer = (name, answer, correctAnswer) => {
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again ${name}.`);
    process.exit();
  }
};
