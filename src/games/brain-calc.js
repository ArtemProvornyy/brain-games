import { l, random as genRandomOperation } from '@hexlet/pairs-data';
import { cons } from '@hexlet/pairs';
import { makeGame, minRandomInt, maxRandomInt } from '../index.js';
import genRandomInt from '../utils.js';

const gameDescription = 'What is the result of the expression?';
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
  const firstNum = genRandomInt(minRandomInt, maxRandomInt);
  const secondNum = genRandomInt(minRandomInt, maxRandomInt);
  const operation = genRandomOperation(operationsList);

  const correctAnswer = getResultOfExtention(firstNum, secondNum, operation);
  const questionContent = `${firstNum} ${operation} ${secondNum}`;

  return cons(questionContent, String(correctAnswer));
};

export default () => makeGame(gameDescription, getGameData);
