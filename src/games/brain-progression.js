import { cons, car, cdr } from '@hexlet/pairs';
import { genRandomInt, makeGame, maxRandomInt } from '..';

const getProgression = (start, step, length) => {
  const gapIndex = genRandomInt(length - 1);
  const gapNum = start + step * gapIndex;

  const iter = (counter, acc) => {
    if (counter >= length) {
      return cons(gapNum, acc);
    }

    const space = counter === 0 ? '' : ' ';
    const nextNum = start + step * counter;
    const numOrGap = counter === gapIndex ? '..' : nextNum;

    const newAcc = `${acc}${space}${numOrGap}`;

    return iter(counter + 1, newAcc);
  };

  return iter(0, '');
};

const getGameData = () => {
  const startProgression = genRandomInt(maxRandomInt);
  const stepProgression = genRandomInt(maxRandomInt);
  const progression = getProgression(startProgression, stepProgression, 10);

  const correctAnswer = car(progression);
  const questionContent = cdr(progression);

  return cons(questionContent, correctAnswer);
};

export default () => {
  const gameDescription = 'What number is missing in the progression?';

  return makeGame(gameDescription, getGameData);
};
