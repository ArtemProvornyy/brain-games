/* eslint max-len: ["error", { "code": 115 }] */
import { cons } from '@hexlet/pairs';
import { makeGame, minRandomInt, maxRandomInt } from '..';
import genRandomInt from '../utils';

const progressionLength = 10;

const getProgression = (start, step, length, gapIndex) => {
  const iter = (counter, acc) => {
    if (counter >= length) {
      return acc;
    }

    const space = counter === 0 ? '' : ' ';
    const nextNum = start + step * counter;
    const numOrGap = counter === gapIndex ? '..' : nextNum;

    const newAcc = `${acc}${space}${numOrGap}`;

    return iter(counter + 1, newAcc);
  };

  return iter(0, '');
};

const getGapNum = (startProgression, stepProgression, gapIndex) => (startProgression + stepProgression * gapIndex);

const getGameData = () => {
  const startProgression = genRandomInt(minRandomInt, maxRandomInt);
  const stepProgression = genRandomInt(minRandomInt, maxRandomInt);
  const gapIndex = genRandomInt(minRandomInt, progressionLength);

  const correctAnswer = getGapNum(startProgression, stepProgression, gapIndex);
  const questionContent = getProgression(startProgression, stepProgression, progressionLength, gapIndex);

  return cons(questionContent, String(correctAnswer));
};

export default () => {
  const gameDescription = 'What number is missing in the progression?';

  return makeGame(gameDescription, getGameData);
};
