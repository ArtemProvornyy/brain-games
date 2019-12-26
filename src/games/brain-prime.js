import {
  genRandomInt,
  makeQuestion,
  makeGame,
} from '..';

const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  }

  const iter = (counter) => {
    if (counter === num) {
      return 'yes';
    }
    if (num % counter === 0) {
      return 'no';
    }

    return iter(counter + 1);
  };

  return iter(2);
};

const getGameData = () => {
  const maxRandomInt = 100;

  const number = genRandomInt(maxRandomInt);

  const correctAnswer = isPrime(number);
  const questionContent = number;

  return makeQuestion(questionContent, correctAnswer);
};

export default () => makeGame(getGameData);
