import { cons } from '@hexlet/pairs';
import { genRandomInt, makeGame, maxRandomInt } from '..';

const isEven = (n) => n % 2 === 0;

const getGameData = () => {
  const questionContent = genRandomInt(maxRandomInt);
  const correctAnswer = isEven(questionContent) ? 'yes' : 'no';

  return cons(questionContent, correctAnswer);
};

export default () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

  return makeGame(gameDescription, getGameData);
};
