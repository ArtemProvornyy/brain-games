import {
  genRandomInt,
  makeQuestion,
  makeGame,
} from '..';

const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no');

const getGameData = () => {
  const maxRandomInt = 100;

  const questionContent = genRandomInt(maxRandomInt);
  const correctAnswer = isEven(questionContent);

  return makeQuestion(questionContent, correctAnswer);
};

export default () => makeGame(getGameData);
