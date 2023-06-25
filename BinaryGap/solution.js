function solution(n) {
  if (n === 0) {
    return 0;
  }

  const binary = n.toString(2);
  const gaps = [];
  let count = 0;

  for (let b of binary) {
    if (b === "0") {
      count++;
    } else {
      gaps.push(count);
      count = 0;
    }
  }

  return Math.max(...gaps);
}
