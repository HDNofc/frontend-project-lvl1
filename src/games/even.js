import isEven from '../utils/isEven.js';
import getRandomNumberFromInterval from '../utils/getRandomNumberFromInterval.js';

const even = () => {
  const booleanAnswers = {
    true: 'yes',
    false: 'no',
  };

  const question = getRandomNumberFromInterval(1, 100);
  const answer = booleanAnswers[isEven(question)];

  return [question, answer];
};

export default even;
