import readlineSync from 'readline-sync';
import isEven from './isEven.js';
import getRandomNumberFromInterval from './getRandomNumberFromInterval.js';

const evenGame = (numberOfQuestions, username) => {
  const booleanAnswers = {
    true: 'yes',
    false: 'no',
  };

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const number = getRandomNumberFromInterval(1, 100);
    const isNumberEven = isEven(number);

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ', {
      trueValue: 'yes',
      falseValue: 'no',
    });

    if (userAnswer === isNumberEven) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${booleanAnswers[isNumberEven]}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  }

  console.log(`Congratulations, ${username}!`);
};

export default evenGame;
