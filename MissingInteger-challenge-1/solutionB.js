function solution(A) {
  if (A.length) {
    const sortedA = A.sort((a, b) => a - b);
    let bigPosNum;

    /** If array first element was bigger than 1 */
    if (sortedA[0] > 1) {
      return 1;
    }

    for (let i = 0; i < sortedA.length; i += 1) {
      /** If it was arrays last element */
      if (i === sortedA.length - 1) {
        if (sortedA[i] > 0) {
          bigPosNum = sortedA[i] + 1;
        } else {
          bigPosNum = 1;
        }
      } else if (sortedA[i + 1] > 0 && sortedA[i + 1] - sortedA[i] > 1) {
        /** Check array next element */
        bigPosNum = sortedA[i] + 1;
        break;
      }
    }
    return bigPosNum;
  }
  return 1;
}

module.exports = solution;
