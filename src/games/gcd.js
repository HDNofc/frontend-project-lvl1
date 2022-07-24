import getDevisors from '../utils/getDevisors.js';
import getRandomNumberFromInterval from '../utils/getRandomNumberFromInterval.js';

/**
 * Возвращает наибольший общий делитель двух чисел
 * @param {number} a - число А
 * @param {number} b - число Б
 * @returns {number} - НОД
 */
const getGreatestCommonDivisor = (a, b) => {
  const devisorsOfA = getDevisors(a);
  const devisorsOfB = getDevisors(b);

  const intersections = [];
  for (let i = 0; i < devisorsOfA.length; i += 1) {
    for (let j = 0; j < devisorsOfB.length; j += 1) {
      if (devisorsOfA[i] === devisorsOfB[j] && !intersections.includes(devisorsOfB[j])) {
        intersections.push(devisorsOfB[j]);
        break;
      }
    }
  }

  return intersections.at(-1);
};

/**
 * Генерирует вопросы и ответы
 * @param {number} amount - количество вопросов
 * @returns {Array<[number, string]>} - пара [вопрос, ответ]
 */
const gcd = (amount) => {
  const questions = [];
  for (let i = 0; i < amount; i += 1) {
    const a = getRandomNumberFromInterval(1, 100);
    const b = getRandomNumberFromInterval(1, 100);

    const question = `${a} ${b}`;
    const answer = getGreatestCommonDivisor(a, b).toString();
    questions.push([question, answer]);
  }

  return questions;
};

export default gcd;
