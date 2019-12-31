import {
  l,
  length,
  head,
  tail,
} from '@hexlet/pairs-data';
import { cons } from '@hexlet/pairs';
import { genRandomInt, makeGame } from '..';

const operationsList = l('+', '-', '*');

const genRandomOperation = (amountOfOperations, listOfOperations) => {
  const operationNumber = genRandomInt(amountOfOperations);

  const iter = (counter, acc) => {
    const operation = head(acc);

    if (counter === operationNumber) {
      return operation;
    }

    return iter(counter + 1, tail(acc));
  };

  return iter(0, listOfOperations);
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
  const maxRandomOperations = length(operationsList);

  const firstNum = genRandomInt(maxRandomInt);
  const secondNum = genRandomInt(maxRandomInt);
  const operation = genRandomOperation(maxRandomOperations, operationsList);

  const correctAnswer = getResultOfExtention(firstNum, secondNum, operation);
  const questionContent = `${firstNum} ${operation} ${secondNum}`;

  return cons(questionContent, correctAnswer);
};

export default () => {
  const getDescription = () => console.log('What is the result of the expression?');

  return makeGame(getDescription, getGameData);
};
