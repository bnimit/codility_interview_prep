function solution(A) {
    const setA = new Set(A);
    const missing = 1;
    while(true) {
        if(!setA.has(missing)) {
            return missing;
        }
        missing++;
    }
}