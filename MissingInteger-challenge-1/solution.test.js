const solution = require('./solution');
const solutionB = require('./solutionB');

test('[] to be equal to 1', () => {
  expect(solution([])).toBe(1);
  expect(solutionB([])).toBe(1);
});

test('[1, 3, 6, 4, 1, 2] to be equal to 5', () => {
  expect(solution([1, 3, 6, 4, 1, 2])).toBe(5);
  expect(solutionB([1, 3, 6, 4, 1, 2])).toBe(5);
});

test('[1, 2, 3] to be equal to 4', () => {
  expect(solution([1, 2, 3])).toBe(4);
  expect(solutionB([1, 3, 6, 4, 1, 2])).toBe(5);

});

test('[1,2,3,4,5,6] to be equal to 7', () => {
  expect(solution([1, 2, 3, 4, 5, 6])).toBe(7);
  expect(solutionB([1, 2, 3, 4, 5, 6])).toBe(7);
});

test('[2,4,3] to be equal to 1', () => {
  expect(solution([2, 4, 3])).toBe(1);
  expect(solutionB([2, 4, 3])).toBe(1);
});


test('shuffled sequence of 0...100 and then 102...200, expected 101', () => {
  const arr = [];
  for (let i = 0; i < 201; i++) {
    if (i !== 101) arr.push(i);
  };

  expect(solution(arr)).toBe(101);
  expect(solutionB(arr)).toBe(101);
});

test('chaotic + sequence 1, 2, ..., 40000 (without minus), expected 40000', () => {
  let arr = [];
  for (let i = 0; i <= 39999; i++) {
    arr.push(i);
  };

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  expect(solution(arr)).toBe(40000);
  expect(solutionB(arr)).toBe(40000);
});

test('chaotic + many -1, 1, 2, 3 (with minus), expected 10000', () => {
  let arr = [];
  for (let i = -10000; i <= 9999; i++) {
    arr.push(i);
  };

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  expect(solution(arr)).toBe(10000);
  expect(solutionB(arr)).toBe(10000);
});

test('chaotic sequences length=10005 (with minus), expected 111', () => {
  let arr = [];
  for (let i = -1500; i <= 8505; i++) {
    if (i !== 111) arr.push(i); 
  };

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  expect(solution(arr)).toBe(111);
  expect(solutionB(arr)).toBe(111);
});