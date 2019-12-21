import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';

// Absrtaction Questions
export const makeQuestion = (question, answer) => cons(question, answer);
export const getQuestion = (question) => car(question);
export const getAnswer = (question) => cdr(question);

export const getUserName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const genRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const buildQuestion = (questionContent) => makeQuestion(readlineSync.question(`Question: ${questionContent}`), readlineSync.question('Your answer: '));

export const makeGame = (questionContent, correctAnswer, maxAttemptsNumber) => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (attempt) => {
    if (attempt === maxAttemptsNumber) {
      console.log(`Congratulations, ${userName}!`);
      process.exit();
    }

    const question = buildQuestion(questionContent);

    getQuestion(question);
    const answer = Number(getAnswer(question));

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again ${userName}.`);
      process.exit();
    }

    return iter(attempt + 1);
  };

  return iter(0);
};
