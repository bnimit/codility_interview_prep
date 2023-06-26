function solution(A) {
  if (!A.length) {
    return 0;
  }

  const maxValue = Math.max(...A);
  const setA = new Set(A);

  if (A.length == setA.size && maxValue == A.length) {
    return 1;
  }

  return 0;
}
