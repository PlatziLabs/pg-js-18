export function combinationSum(candidates, target) {
  let remainingSum = target;
  let finalCombinations = [];
  let currentCombination = [];
  let startFrom = 0;

  for (let i = 0; i < candidates.length; i++) {
    remainingSum = remainingSum - candidates[i];
    currentCombination.push(candidates[i]);
    while (startFrom < candidates.length) {
      remainingSum = remainingSum - candidates[startFrom];
      if (remainingSum === 0) {
        currentCombination.push(candidates[startFrom]);
        finalCombinations.push(currentCombination.sort());
        currentCombination = [];
        startFrom++;
        remainingSum = target;
      } else if (remainingSum > 0 && remainingSum >= candidates[startFrom]) {
        currentCombination.push(candidates[startFrom]);
      } else {
        remainingSum = remainingSum + candidates[startFrom];
        startFrom++;
      };
    };
    currentCombination = [];
    remainingSum = target;
    startFrom = 0;
  };

  currentCombination = finalCombinations.sort();
  finalCombinations = [];

  for (let i = 0; i < currentCombination.length; i++) {
    if (JSON.stringify(currentCombination[i]) !== JSON.stringify(currentCombination[i - 1])) {
      finalCombinations.push(currentCombination[i]);
    };
  };

  return finalCombinations;
}