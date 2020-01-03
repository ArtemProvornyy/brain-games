import { cons } from '@hexlet/pairs';
import { genRandomInt, makeGame, maxRandomInt } from '..';

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
  const firstNum = genRandomInt(maxRandomInt);
  const secondNum = genRandomInt(maxRandomInt);

  const correctAnswer = getGCD(firstNum, secondNum);
  const questionContent = `${firstNum} ${secondNum}`;

  return cons(questionContent, correctAnswer);
};

export default () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';

  return makeGame(gameDescription, getGameData);
};
