import { question } from 'readline-sync';

const getUserName = () => {
  const userName = question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default getUserName;
