function solution(A) {
  if (!A.length) {
    return 0;
  }
  const map = {};
  for (let element of A) {
    map[element] = map[element] + 1 || 1;
  }

  for (let element in map) {
    if (map[element] % 2 === 1) {
      return parseInt(element);
    }
  }

  return 0;
}
