import getRandomNumberFromInterval from '../utils/getRandomNumberFromInterval.js';
import greetings, { main } from '../index.js';

const getRandomQuestion = (operation) => {
  switch (operation) {
    case '+': {
      const a = getRandomNumberFromInterval(1, 100);
      const b = getRandomNumberFromInterval(1, 100);
      return [`${a} + ${b}`, (a + b).toString()];
    }
    case '-': {
      const a = getRandomNumberFromInterval(30, 100);
      const b = getRandomNumberFromInterval(1, 30);
      return [`${a} - ${b}`, (a - b).toString()];
    }
    case '*': {
      const a = getRandomNumberFromInterval(1, 15);
      const b = getRandomNumberFromInterval(1, 10);
      return [`${a} * ${b}`, (a * b).toString()];
    }
    default:
      return [];
  }
};

/**
 * Генерирует вопросы и ответы
 * @param {number} amount - количество вопросов
 * @returns {Array<[number, string]>} - пара [вопрос, ответ]
 */
const getQuestions = (amount) => {
  const operations = ['+', '-', '*'];

  const questions = [];
  for (let i = 0; i < amount; i += 1) {
    const currentOperator = operations[getRandomNumberFromInterval(0, 2)];
    const [question, answer] = getRandomQuestion(currentOperator);
    questions.push([question, answer]);
  }

  return questions;
};

const calc = (numberOfQuestions) => {
  const username = greetings();
  const rules = 'What is the result of the expression?';

  const questions = getQuestions(numberOfQuestions);
  main({ rules, questions, username });
};

export default calc;
