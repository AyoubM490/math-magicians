import calculate from '../logic/calculate';

describe('testing the calculate function', () => {
  test(' it reset display with AC', () => {
    const obj = {
      next: 15,
      operation: '+',
    };
    const expectObj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, 'AC')).toMatchObject(expectObj);
  });
  test('if obj.next is 0 and button is 0 returns empty object ', () => {
    const obj = {
      total: null,
      next: 0,
      operation: '+',
    };
    const expectObj = { };
    expect(calculate(obj, '0')).toMatchObject(expectObj);
  });
  test(' If there is an operation, update next ', () => {
    const obj = {
      total: null,
      next: 5,
      operation: '+',
    };
    const expectObj = {
      total: null,
      next: '54',
      operation: '+',
    };
    expect(calculate(obj, '4')).toMatchObject(expectObj);
  });
  test(' If there is no operation, update next and clear the value ', () => {
    const obj = {
      total: null,
      next: 5,
      operation: null,
    };
    const expectObj = {
      total: null,
      next: '54',
    };
    expect(calculate(obj, '4')).toMatchObject(expectObj);
  });
  test(' "=" with no operation, nothing to do ', () => {
    const obj = {
      total: null,
      next: 5,
      operation: null,
    };
    const expectObj = { };
    expect(calculate(obj, '=')).toMatchObject(expectObj);
  });
  test("User pressed an operation after pressing '=' updates operation", () => {
    const obj = {
      total: 10,
      next: null,
      operation: null,
    };
    const expectObj = {
      total: 10,
      next: null,
      operation: '+',
    };
    expect(calculate(obj, '+')).toMatchObject(expectObj);
  });
});
