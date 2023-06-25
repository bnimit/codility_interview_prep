function solution(A) {
  if (!A.length) {
    return -1;
  }

  const totalSum = A.reduce((first, second) => first + second, 0);
  let rightSum = 0;
  let leftSum = 0;
  let min = Infinity;

  for (let i = 0; i < A.length - 1; i++) {
    leftSum += A[i];
    rightSum = totalSum - leftSum;
    let diff = Math.abs(leftSum - rightSum);
    min = Math.min(diff, min);
  }

  return min;
}
