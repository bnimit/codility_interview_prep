function solution(A) {
  let eastBoundCars = 0;
  let pairs = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      eastBoundCars++;
    } else {
      pairs += eastBoundCars;
    }

    if (pairs > 1000000000) {
      return -1;
    }
  }
  return pairs;
}
