import readlineSync from 'readline-sync';
import calc from './games/calc.js';
import even from './games/even.js';
import gcd from './games/gcd.js';

const ROUNDS = 3;

const greetings = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const main = (gameName) => {
  const username = greetings();

  let rules;
  let questions;

  switch (gameName) {
    case 'even':
      rules = 'Answer "yes" if the number is even, otherwise answer "no".';
      questions = even(ROUNDS);
      break;
    case 'calc':
      rules = 'What is the result of the expression?';
      questions = calc(ROUNDS);
      break;
    case 'gcd':
      rules = 'Find the greatest common divisor of given numbers.';
      questions = gcd(ROUNDS);
      break;
    default:
      rules = 'Answer "yes" if the number is even, otherwise answer "no".';
      questions = even(ROUNDS);
  }

  console.log(rules);

  // eslint-disable-next-line no-restricted-syntax
  for (const [question, answer] of questions) {
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};

export default main;
