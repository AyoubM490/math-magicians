import operate from '../logic/operate';

describe('testing the operate function', () => {
  test('sum two values', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });
  test('subtract two values', () => {
    expect(operate(2, 2, '-')).toBe('0');
  });
  test('multiply two values', () => {
    expect(operate(5, 2, 'x')).toBe('10');
  });
  test('divide two values', () => {
    expect(operate(2, 2, '÷')).toBe('1');
  });
  test('divide a value by 0 throws error', () => {
    expect(operate(2, 0, '÷')).toBe("Can't divide by 0");
  });
  test('remainder from dividing two values', () => {
    expect(operate(2, 2, '%')).toBe('0');
  });
  test('remainder from dividing two values', () => {
    expect(operate(9, 2, '%')).toBe('1');
  });
  test('throws error if operator is unknown', () => {
    expect(() => operate(2, 4, 'X')).toThrow();
  });
});
