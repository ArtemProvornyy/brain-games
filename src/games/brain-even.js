import { cons } from '@hexlet/pairs';
import { makeGame, minRandomInt, maxRandomInt } from '..';
import genRandomInt from '../utils';

const isEven = (n) => n % 2 === 0;

const getGameData = () => {
  const questionContent = genRandomInt(minRandomInt, maxRandomInt);
  const correctAnswer = isEven(questionContent) ? 'yes' : 'no';

  return cons(questionContent, correctAnswer);
};

export default () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  return makeGame(gameDescription, getGameData);
};
