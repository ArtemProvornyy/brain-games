/* eslint max-len: ["error", { "code": 122 }] */
import { cons } from '@hexlet/pairs';
import { makeGame, minRandomInt, maxRandomInt } from '../index.js';
import genRandomInt from '../utils.js';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getQuestionContent = (start, step, length, gapIndex) => {
  const iter = (counter, acc) => {
    if (counter >= length) {
      return acc;
    }

    const space = counter === 0 ? '' : ' ';
    const currentNum = start + step * counter;
    const numOrGap = counter === gapIndex ? '..' : currentNum;

    const newAcc = `${acc}${space}${numOrGap}`;

    return iter(counter + 1, newAcc);
  };

  return iter(0, '');
};

const getCorrectAnswer = (startProgression, stepProgression, gapIndex) => (startProgression + stepProgression * gapIndex);

const getGameData = () => {
  const startProgression = genRandomInt(minRandomInt, maxRandomInt);
  const stepProgression = genRandomInt(minRandomInt, maxRandomInt);
  const gapIndex = genRandomInt(minRandomInt, progressionLength);

  const correctAnswer = getCorrectAnswer(startProgression, stepProgression, gapIndex);
  const questionContent = getQuestionContent(startProgression, stepProgression, progressionLength, gapIndex);

  return cons(questionContent, String(correctAnswer));
};

export default () => makeGame(gameDescription, getGameData);
