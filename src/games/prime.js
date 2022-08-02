import getRandomNumberFromInterval from '../utils/getRandomNumberFromInterval.js';

const getPrimeQuestion = () => {
  const number = getRandomNumberFromInterval(1, 100);

  if (number <= 1) {
    return [number, 'no'];
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return [number, 'no'];
    }
  }

  return [number, 'yes'];
};

/**
 * Генерирует вопросы и ответы
 * @param {number} amount - количество вопросов
 * @returns {Array<[number, string]>} - пара [вопрос, ответ]
 */
const prime = (amount) => {
  const questions = [];
  for (let i = 0; i < amount; i += 1) {
    const [question, answer] = getPrimeQuestion();
    questions.push([question, answer]);
  }

  return questions;
};

export default prime;
