import readlineSync from 'readline-sync';
import {
  genRandomInt,
  getQuestion,
  getAnswer,
  buildQuestion,
  isCorrectAnswer,
} from '..';

const getGCD = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;

  const iter = (devider) => {
    if (a % devider === 0 && b % devider === 0) {
      return devider;
    }

    return iter(devider - 1);
  };

  const smallerNumber = a < b ? a : b;

  return iter(smallerNumber);
};

export default (maxAttemptsNumber = 3) => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const maxRandomInt = 100;

  const iter = (attempt) => {
    if (attempt === maxAttemptsNumber) {
      console.log(`Congratulations, ${userName}!`);
      process.exit();
    }

    const firstNum = genRandomInt(maxRandomInt);
    const secondNum = genRandomInt(maxRandomInt);

    const correctAnswer = getGCD(firstNum, secondNum);
    const questionContent = `${firstNum} ${secondNum}`;
    const question = buildQuestion(questionContent);

    getQuestion(question);
    const answer = Number(getAnswer(question));

    isCorrectAnswer(userName, answer, correctAnswer);

    return iter(attempt + 1);
  };
  return iter(0);
};
