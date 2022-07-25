import getRandomNumberFromInterval from '../utils/getRandomNumberFromInterval.js';

const getProgressionQuestion = () => {
  const length = getRandomNumberFromInterval(5, 10);
  const step = getRandomNumberFromInterval(2, 7);
  const startPoint = getRandomNumberFromInterval(2, 20);
  const emptyId = getRandomNumberFromInterval(0, length - 1);

  const progressionArray = [startPoint];
  for (let i = 0; i < length - 1; i += 1) {
    progressionArray.push(progressionArray[i] + step);
  }
  const savedAnswer = progressionArray[emptyId];
  progressionArray[emptyId] = '..';

  return [progressionArray.join(' '), savedAnswer.toString()];
};

/**
 * Генерирует вопросы и ответы
 * @param {number} amount - количество вопросов
 * @returns {Array<[number, string]>} - пара [вопрос, ответ]
 */
const progression = (amount) => {
  const questions = [];
  for (let i = 0; i < amount; i += 1) {
    const [question, answer] = getProgressionQuestion();
    questions.push([question, answer]);
  }

  return questions;
};

export default progression;
