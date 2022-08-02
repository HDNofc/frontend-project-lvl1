import getRandomNumberFromInterval from '../utils/getRandomNumberFromInterval.js';

const prime = () => {
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

export default prime;
