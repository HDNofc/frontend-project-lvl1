import getRandomNumberFromInterval from '../utils/getRandomNumberFromInterval.js';

const progression = () => {
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

export default progression;
