import readlineSync from 'readline-sync';
import {
  genRandomInt,
  getQuestion,
  getAnswer,
  buildQuestion,
  isCorrectAnswer,
} from '..';

const genRandomOperation = (amountOfOperations) => {
  const operationNumber = genRandomInt(amountOfOperations);

  switch (operationNumber) {
    case 0:
      return '+';
    case 1:
      return '-';
    case 2:
      return '*';
    default:
      return null;
  }
};

const getResultOfExtention = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

export default (maxAttemptsNumber = 3) => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const maxRandomInt = 100;
  const maxRandomOperations = 3;

  const iter = (attempt) => {
    if (attempt === maxAttemptsNumber) {
      console.log(`Congratulations, ${userName}!`);
      process.exit();
    }

    const firstNum = genRandomInt(maxRandomInt);
    const secondNum = genRandomInt(maxRandomInt);
    const operation = genRandomOperation(maxRandomOperations);

    const correctAnswer = getResultOfExtention(firstNum, secondNum, operation);
    const questionContent = `${firstNum} ${operation} ${secondNum}`;
    const question = buildQuestion(questionContent);

    getQuestion(question);
    const answer = Number(getAnswer(question));

    isCorrectAnswer(userName, answer, correctAnswer);

    return iter(attempt + 1);
  };
  return iter(0);
};
