function solution(A) {
    if (A.length) {
        const sortedA = A.sort();
        let bigPosNum;

        /** If array first element was bigger than 1 */
        if (sortedA[0] > 1) {
            return 1;
        }
    
        for (let i = 0; i < sortedA.length; i ++) {
            /** If it was arrays last element */
            if (i === sortedA.length - 1) {
                if (sortedA[i] > 0) {
                    bigPosNum = sortedA[i] + 1; 
                } else {
                    bigPosNum = 1;
                }
            } else {
                /** Check array next element */
                if (sortedA[i + 1] > 0 && (sortedA[i + 1] - sortedA[i]) > 1) {
                    bigPosNum = sortedA[i] + 1;
                    break;
                }
            }
        }
        return bigPosNum;
    } else {
        return 1;
    }
};

module.exports = solution;




// test against 
// solution([]);
// solution([-1, -3]);
// solution([1, 3, 2, 4, 6, 7, 1]);
// solution([1, 2, 3]);
// solution([2, 3, 2, 88, -1, 0, 6, 10, 12, ]);
// solution([22, 322]);