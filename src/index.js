import readlineSync from 'readline-sync';
import calc from './games/calc.js';
import even from './games/even.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';
import prime from './games/prime.js';

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
  let game;

  switch (gameName) {
    case 'even':
      rules = 'Answer "yes" if the number is even, otherwise answer "no".';
      game = even;
      break;
    case 'calc':
      rules = 'What is the result of the expression?';
      game = calc;
      break;
    case 'gcd':
      rules = 'Find the greatest common divisor of given numbers.';
      game = gcd;
      break;
    case 'progression':
      rules = 'What number is missing in the progression?';
      game = progression;
      break;
    case 'prime':
      rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
      game = prime;
      break;
    default:
      rules = 'Answer "yes" if the number is even, otherwise answer "no".';
      game = even;
  }

  console.log(rules);

  for (let i = 0; i < ROUNDS; i += 1) {
    const [question, answer] = game();
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
