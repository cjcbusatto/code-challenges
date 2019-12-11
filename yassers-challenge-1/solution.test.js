const solution = require('./solution');
const solutionB = require('./solutionB');

test('[] to equal 3', () => {
  expect(solution([])).toBe(1);
  expect(solutionB([])).toBe(1);
});

test('[1, 3, 6, 4, 1, 2] to equal 5', () => {
  expect(solution([1, 3, 6, 4, 1, 2])).toBe(5);
  expect(solutionB([1, 3, 6, 4, 1, 2])).toBe(5);
});

test('[1, 2, 3] to equal 4', () => {
  expect(solution([1, 2, 3])).toBe(4);
  expect(solutionB([1, 3, 6, 4, 1, 2])).toBe(5);

});
