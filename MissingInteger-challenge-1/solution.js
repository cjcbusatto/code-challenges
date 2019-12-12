function solution(A) {
  // remove negative numbers and sort the array
  let arr = A.filter(item => item > 0).sort((a, b) => {
    return a - b;
  });
  // if length == 0, there are only negative numbers
  // therefore, the answer is 1
  if (arr.length === 0) {
    return 1;
  }

  // remove duplicates
  const positiveValuesOnly = new Set(arr);
  arr = [...positiveValuesOnly];

  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] - 1 < length && arr[arr[i] - 1] > 0) {
      arr[arr[i] - 1] = -arr[arr[i] - 1];
    }
  }

  // all the sequence numbers are negative right now, only the first number
  // after the missing one in the sequence is positive, therefore we filter the
  // array to get the positive number and return the number before its
  arr = arr.filter(item => item > 0);

  // Sequence was ordered and complete, therefore we send the next number

  if (arr.length === 0) {
    return length + 1;
  }

  return arr[0] - 1;
}
const arr = [];
for (let i = 0; i < 201; i++) {
  if (i !== 101) arr.push(i);
}

module.exports = solution;
