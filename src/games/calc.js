import getRandomNumberFromInterval from '../utils/getRandomNumberFromInterval.js';

const getRandomQuestion = (operation, a, b) => {
  switch (operation) {
    case '+': {
      return [`${a} + ${b}`, (a + b).toString()];
    }
    case '-': {
      return [`${a} - ${b}`, (a - b).toString()];
    }
    case '*': {
      return [`${a} * ${b}`, (a * b).toString()];
    }
    default:
      return [];
  }
};

const calc = () => {
  const operations = ['+', '-', '*'];

  const currentOperator = operations[getRandomNumberFromInterval(0, 2)];
  const a = getRandomNumberFromInterval(1, 50);
  const b = getRandomNumberFromInterval(1, 50);

  const question = getRandomQuestion(currentOperator, a, b);

  return question;
};

export default calc;
