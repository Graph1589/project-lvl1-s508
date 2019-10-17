import getRandomInteger from '../utilities/randomizer';
import engine from '../game-engine';

const maxValueOfNumbers = 50;

const isPrime = (num) => {
  let cdg = 0;
  if (num === 1) {
    return false;
  }
  for (let i = 1; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      cdg = i;
    }
  }
  return (cdg === 1);
};

const runPrime = () => {
  const number = getRandomInteger(maxValueOfNumbers);
  const question = `${number}`;
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, String(rightAnswer)];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export default () => {
  engine(runPrime, description);
};
