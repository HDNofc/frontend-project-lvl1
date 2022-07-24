const getDevisors = (number) => {
  const devisors = [];
  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      devisors.push(i);
    }
  }

  return devisors;
};

export default getDevisors;
