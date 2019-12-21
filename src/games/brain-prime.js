import readlineSync from 'readline-sync';
import {
  genRandomInt,
  getQuestion,
  getAnswer,
  buildQuestion,
  isCorrectAnswer,
} from '..';

const isPrime = (num) => {
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

export default (maxAttemptsNumber = 3) => {
  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const maxRandomInt = 100;

  const iter = (attempt) => {
    if (attempt === maxAttemptsNumber) {
      console.log(`Congratulations, ${userName}!`);
      process.exit();
    }

    const number = genRandomInt(maxRandomInt);

    const correctAnswer = isPrime(number);
    const questionContent = number;
    const question = buildQuestion(questionContent);

    getQuestion(question);
    const answer = getAnswer(question);

    isCorrectAnswer(userName, answer, correctAnswer);

    return iter(attempt + 1);
  };
  return iter(0);
};
