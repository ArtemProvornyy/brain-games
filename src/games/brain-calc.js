import {
  genRandomInt,
  makeGame,
  makeQuestion,
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

const getGameData = () => {
  const maxRandomInt = 100;
  const maxRandomOperations = 3;

  const firstNum = genRandomInt(maxRandomInt);
  const secondNum = genRandomInt(maxRandomInt);
  const operation = genRandomOperation(maxRandomOperations);

  const correctAnswer = getResultOfExtention(firstNum, secondNum, operation);
  const questionContent = `${firstNum} ${operation} ${secondNum}`;

  return makeQuestion(questionContent, correctAnswer);
};

export default () => makeGame(getGameData);
