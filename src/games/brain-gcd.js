import { cons } from '@hexlet/pairs';
import { makeGame, minRandomInt, maxRandomInt } from '../index.js';
import genRandomInt from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

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

const getGameData = () => {
  const firstNum = genRandomInt(minRandomInt, maxRandomInt);
  const secondNum = genRandomInt(minRandomInt, maxRandomInt);

  const correctAnswer = getGCD(firstNum, secondNum);
  const questionContent = `${firstNum} ${secondNum}`;

  return cons(questionContent, String(correctAnswer));
};

export default () => makeGame(gameDescription, getGameData);
