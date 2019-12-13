import readlineSync from 'readline-sync';
import { cons, car, cdr } from '@hexlet/pairs';
import {
  genRandomInt,
  getQuestion,
  getAnswer,
  buildQuestion,
  isCorrectAnswer,
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

  return cons(progression, gapNum);
};

export default (maxAttemptsNumber) => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const maxRandomInt = 100;

  const iter = (attempt) => {
    if (attempt === maxAttemptsNumber) {
      console.log(`Congratulations, ${userName}!`);
      process.exit();
    }

    const startProgression = genRandomInt(maxRandomInt);
    const stepProgression = genRandomInt(maxRandomInt);
    const progression = getProgression(startProgression, stepProgression);

    const correctAnswer = cdr(progression);
    const questionContent = car(progression);
    const question = buildQuestion(questionContent);

    getQuestion(question);
    const answer = getAnswer(question);

    isCorrectAnswer(userName, answer, correctAnswer);

    return iter(attempt + 1);
  };
  return iter(0);
};
