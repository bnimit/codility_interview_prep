function solution(A, K) {
  if (!A.length) {
    return [];
  }

  if (K === A.length || K === 0) {
    return A;
  }

  for (let i = 0; i < K; i++) {
    A.unshift(A.pop());
  }

  return A;
}
