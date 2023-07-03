function solution(A) {
  let B = [];
  result = 0;
  min = Infinity;

  for (let i = 0; i < A.length - 1; i++) {
    B[i] = (A[i] + A[i] + 1) / 2;
    if (B[i] < min) {
      min = B[i];
      result = i;
    }
  }

  for (let j = 0; j < A.length - 2; j++) {
    B[j] = (B[j] + B[j + 1] + B[j + 2]) / 3;
    if (B[j] < min) {
      min = B[j];
      result = j;
    }
  }

  return result;
}
