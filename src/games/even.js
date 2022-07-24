import isEven from '../utils/isEven.js';
import getRandomNumberFromInterval from '../utils/getRandomNumberFromInterval.js';

/**
 * Генерирует вопросы и ответы
 * @param {number} amount - количество вопросов
 * @returns {Array<[number, string]>} - пара [вопрос, ответ]
 */
const even = (amount) => {
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

export default even;
