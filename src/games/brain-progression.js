import { cons, car, cdr } from '@hexlet/pairs';
import {
  genRandomInt,
  makeQuestion,
  makeGame,
} from '..';

const getProgression = (start, step) => {
  const gapIndex = genRandomInt(9);

  let progression = '';
  let nextNum = start;
  let gapNum = 0;

  for (let i = 0; i < 10; i += 1) {
    if (gapIndex === i) gapNum = nextNum;

    const space = i === 0 ? '' : ' ';
    const numOrGap = i === gapIndex ? '..' : nextNum;

    progression = `${progression}${space}${numOrGap}`;
    nextNum += step;
  }

  return cons(gapNum, progression);
};

const getGameData = () => {
  const maxRandomInt = 100;

  const startProgression = genRandomInt(maxRandomInt);
  const stepProgression = genRandomInt(maxRandomInt);
  const progression = getProgression(startProgression, stepProgression);

  const correctAnswer = car(progression);
  const questionContent = cdr(progression);

  return makeQuestion(questionContent, correctAnswer);
};

export default () => makeGame(getGameData);
