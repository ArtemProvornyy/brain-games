import { l, random as genRandomOperation } from '@hexlet/pairs-data';
import { cons } from '@hexlet/pairs';
import { genRandomInt, makeGame, maxRandomInt } from '..';

const operationsList = l('+', '-', '*');

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
  const firstNum = genRandomInt(maxRandomInt);
  const secondNum = genRandomInt(maxRandomInt);
  const operation = genRandomOperation(operationsList);

  const correctAnswer = getResultOfExtention(firstNum, secondNum, operation);
  const questionContent = `${firstNum} ${operation} ${secondNum}`;

  return cons(questionContent, correctAnswer);
};

export default () => {
  const gameDescription = 'What is the result of the expression?';

  return makeGame(gameDescription, getGameData);
};
