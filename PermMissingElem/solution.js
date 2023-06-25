function solution(A) {
    const size = A.length
    const natural_sum = ((size + 1)*(size + 2)) / 2
    const current_sum = A.reduce((first, second) => first + second, 0);

    return natural_sum - current_sum;
}