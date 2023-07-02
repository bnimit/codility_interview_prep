function solution(S, P, Q) {
  let dnaString = "";
  let result = [];

  for (let i = 0; i < P.length; i++) {
    dnaString = S.slice(P[i], Q[i] + 1);
    if (dnaString.indexOf("A") !== -1) {
      result.push(1);
    } else if (dnaString.indexOf("C") !== -1) {
      result.push(2);
    } else if (dnaString.indexOf("G") !== -1) {
      result.push(3);
    } else if (dnaString.indexOf("T") !== -1) {
      result.push(4);
    }
  }
  return result;
}
