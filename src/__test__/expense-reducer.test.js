import expenseReducer from '../reducer/expense-reducer.js';

let testExpenseOne = {
  id: '000001',
  name: 'test expense one',
  categoryID: 'someTestId',
  price: 100
};

let testExpenseTwo = {
  id: '000002',
  name: 'test expense two',
  categoryID: 'someTestId',
  price: 50
};

let updatedExpenseOne = {
  id: '000001',
  name: 'updated expense one',
  categoryID: 'someTestId',
  price: 75
};

let testExpenseState = { someTestId: [testExpenseOne, testExpenseTwo] };

describe('Expense Reducer', () => {
  test('initial state should be an empty object', () => {
    let result = expenseReducer(undefined, { type: null });

    expect(result).toEqual({});
  });

  test('if action type is not present, return default state', () => {
    let state = [testExpenseOne]
    let result = expenseReducer(state, { type: null });

    expect(result).toEqual(state);
  });

  test('EXPENSE_CREATE should append expense to expense object', () => {
    let action = {
      type: 'EXPENSE_CREATE',
      payload: testExpenseTwo
    }
    let result = expenseReducer({ someTestId: [testExpenseOne] }, action);

    expect(result.someTestId.length).toBe(2);
    expect(result.someTestId[0]).toBe(testExpenseOne);
    expect(result.someTestId[1]).toBe(action.payload);
  });

  test('EXPENSE_UPDATE should return new state with modified Expense Object', () => {
    let action = {
      type: 'EXPENSE_UPDATE',
      payload: updatedExpenseOne
    };
    let result = expenseReducer(testExpenseState, action);

    expect(result.someTestId.length).toBe(2);
    expect(result.someTestId[0].name).toEqual(updatedExpenseOne.name);
    expect(result.someTestId[0].price).toEqual(updatedExpenseOne.price);
  });

  test('EXPENSE_DELETE return new state and filter out Expense Object', () => {
    let resultTestState = { someTestId: [testExpenseOne] };

    let action = {
      type: 'EXPENSE_DELETE',
      payload: testExpenseTwo
    };

    let result = expenseReducer({ someTestId: [testExpenseOne, testExpenseTwo] }, action);
    expect(result.someTestId).toEqual(resultTestState.someTestId);
  });
});