import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const minRandomInt = 0;
export const maxRandomInt = 100;

const maxAttemptsNumber = 3;

export const makeGame = (gameDescription, getGameData) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(gameDescription);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const iter = (attempt) => {
    if (attempt === maxAttemptsNumber) {
      console.log(`Congratulations, ${userName}!`);
      process.exit();
    }

    const newQuestion = getGameData();
    const questionContent = car(newQuestion);
    const correctAnswer = cdr(newQuestion);

    readlineSync.question(`Question: ${questionContent}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again ${userName}.`);
      process.exit();
    }

    iter(attempt + 1);
  };

  iter(0);
};
