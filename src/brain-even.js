import { question } from 'readline-sync';

const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no');

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const brainEven = (amountOfQuestions) => {
  const userName = question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
  const maxRandomInt = 100;

  const iter = (counter) => {
    if (counter === amountOfQuestions) {
      console.log(`Congratulations, ${userName}!`);
      process.exit();
    }

    const questionNumber = getRandomInt(maxRandomInt);
    const correctAnswer = isEven(questionNumber);

    question(`Question: ${questionNumber}`);
    const answer = question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again ${userName}.`);
      process.exit();
    }

    return iter(counter + 1);
  };
  return iter(0);
};

export default brainEven;
