// import brainEven from './games/brain-even';
import welcome from './utilities/welcome';
import congratulations from './utilities/congratulation';
// import brainCalc from './games/brain-calc';
import brainGreatestCommonDivisor from './games/brain-gcd';

export default () => {
  const userName = welcome();
  let roundCounter = 0;
  /* there are will be game switcher */
  const game = (round, name) => brainGreatestCommonDivisor(round, name);

  while (roundCounter < 3) {
    if (game(roundCounter, userName) === true) {
      roundCounter += 1;
    } else {
      break;
    }
  }
  if (roundCounter === 3) {
    congratulations(userName);
  }
};
