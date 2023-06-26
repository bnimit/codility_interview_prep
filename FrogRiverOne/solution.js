function solution(X, A) {
  if (!A.length) {
    return -1;
  }

  let possiblePositions = new Set();
  for (let i = 0; i < A.length; i++) {
    if (A[i] < X) {
      possiblePositions.add(A[i]);
    }

    if (possiblePositions.size == X) {
      return i;
    }
  }
  return -1;
}
