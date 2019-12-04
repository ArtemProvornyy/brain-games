import { question } from 'readline-sync';

export const getUserName = () => {
  const userName = question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!`);
};