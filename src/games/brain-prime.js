import { cons } from '@hexlet/pairs';
import { makeGame, minRandomInt, maxRandomInt } from '..';
import genRandomInt from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  const iter = (counter) => {
    if (counter > num / 2) {
      return true;
    }
    if (num % counter === 0) {
      return false;
    }

    return iter(counter + 1);
  };

  return iter(2);
};

const getGameData = () => {
  const number = genRandomInt(minRandomInt, maxRandomInt);

  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const questionContent = number;

  return cons(questionContent, String(correctAnswer));
};

export default () => makeGame(gameDescription, getGameData);
