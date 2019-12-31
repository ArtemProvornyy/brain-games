import { cons } from '@hexlet/pairs';
import { genRandomInt, makeGame } from '..';

const isEven = (n) => n % 2 === 0;

const getGameData = () => {
  const maxRandomInt = 100;

  const questionContent = genRandomInt(maxRandomInt);
  const correctAnswer = isEven(questionContent) ? 'yes' : 'no';

  return cons(questionContent, correctAnswer);
};

export default () => {
  const getDescription = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

  return makeGame(getDescription, getGameData);
};
