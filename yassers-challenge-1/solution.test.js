const solution = require('./solution');

test('[] to be equal to 1', () => {
  expect(solution([])).toBe(1);
});

test('[1, 3, 6, 4, 1, 2] to be equal to 5', () => {
  expect(solution([1, 3, 6, 4, 1, 2])).toBe(5);
});

test('[1, 2, 3] to be equal to 4', () => {
  expect(solution([1, 2, 3])).toBe(4);
});

test('[1,2,3,4,5,6] to be equal to 7', () => {
  expect(solution([1, 2, 3, 4, 5, 6])).toBe(7);
});

test('[2,4,3] to be equal to 1', () => {
  expect(solution([2, 4, 3])).toBe(1);
});
