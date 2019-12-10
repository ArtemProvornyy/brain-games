import readlineSync from 'readline-sync';
import {
  genRandomInt,
  getQuestion,
  getAnswer,
  buildQuestion,
  isCorrectAnswer,
} from '..';

const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no');

export default (maxAttemptsNumber) => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const maxRandomInt = 100;

  const iter = (attempt) => {
    if (attempt === maxAttemptsNumber) {
      console.log(`Congratulations, ${userName}!`);
      process.exit();
    }

    const questionNumber = genRandomInt(maxRandomInt);
    const correctAnswer = isEven(questionNumber);
    const question = buildQuestion(questionNumber);

    getQuestion(question);
    const answer = getAnswer(question);

    isCorrectAnswer(userName, answer, correctAnswer);

    return iter(attempt + 1);
  };
  return iter(0);
};
