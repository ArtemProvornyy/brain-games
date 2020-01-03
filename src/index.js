import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const maxRandomInt = 100;

export const getUserName = () => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const genRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const makeGame = (gameDescription, getGameData) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(gameDescription);
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const maxAttemptsNumber = 3;

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
    const isAnswerStr = correctAnswer === Number(correctAnswer) ? Number(answer) : answer;

    if (isAnswerStr === correctAnswer) {
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
