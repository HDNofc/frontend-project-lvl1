import isEven from '../utils/isEven.js';
import getRandomNumberFromInterval from '../utils/getRandomNumberFromInterval.js';
import greetings, { main } from '../index.js';

/**
 * Генерирует вопросы и ответы
 * @param {number} amount - количество вопросов
 * @returns {Array<[number, string]>} - пара [вопрос, ответ]
 */
const getQuestions = (amount) => {
  const booleanAnswers = {
    true: 'yes',
    false: 'no',
  };

  const questions = [];
  for (let i = 0; i < amount; i += 1) {
    const question = getRandomNumberFromInterval(1, 100);
    const answer = booleanAnswers[isEven(question)];
    questions.push([question, answer]);
  }

  return questions;
};

const even = (numberOfQuestions) => {
  const username = greetings();
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const questions = getQuestions(numberOfQuestions);
  main({ rules, questions, username });
};

export default even;
