function solution(X, Y, D) {
  if (X >= Y) {
    return 0;
  }
  const distance_to_travel = Y - X;
  const hops = Math.ceil(distance_to_travel / D);

  return hops;
}
