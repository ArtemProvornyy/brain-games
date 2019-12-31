import { cons } from '@hexlet/pairs';
import { genRandomInt, makeGame } from '..';

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
  const maxRandomInt = 100;

  const number = genRandomInt(maxRandomInt);

  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const questionContent = number;

  return cons(questionContent, correctAnswer);
};

export default () => {
  const getDescription = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  return makeGame(getDescription, getGameData);
};
