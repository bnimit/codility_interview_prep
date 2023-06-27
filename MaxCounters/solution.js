function solution(N, A) {
  const counters = new Array(N).fill(0);
  let currentMax = 0;
  let baseMax = 0;

  for (let i = 0; i < A.length; i++) {
    if(A[i] > N) {
        baseMax = currentMax;
    }

    if(A[i] <= N && counters[A[i] - 1] < baseMax) {
        counters[A[i]-1] = baseMax;
    }

    if (A[i] <= N) {
      counters[A[i] - 1]++;
      currentMax = Math.max(currentMax, counters[A[i] - 1]);
    }
  }

  for(let j = 0; j < N; j++) {
    if(counters[j] < baseMax) {
        counters[j] = baseMax;
    }
  }

  return counters;
}
