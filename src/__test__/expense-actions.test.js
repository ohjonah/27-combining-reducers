import {expenseCreate, expenseUpdate, expenseDelete} from '../action/expense-actions.js';

describe('Expense Actions', () => {
  let testExpense = {
    categoryID: '654321',
    name: 'test expense',
    price: 50
  };

  test('expenseCreate returns a EXPENSE_CREATE action', () => {
    let action = expenseCreate(testExpense);

    expect(action.type).toEqual('EXPENSE_CREATE');
    expect(action.payload.id).toBeTruthy();
    expect(action.payload.categoryID).toBe('654321');
    expect(action.payload.name).toBe('test expense');
    expect(action.payload.price).toBe(50);
  });

  test('expenseDelete returns a EXPENSE_DELETE action', () => {
    let action = expenseDelete(testExpense);

    expect(action).toEqual({
      type: 'EXPENSE_DELETE',
      payload: testExpense
    });
  });

  test('expenseUpdate returns a EXPENSE_UPDATE action', () => {
    let action = expenseUpdate(testExpense);

    expect(action).toEqual({
      type: 'EXPENSE_UPDATE',
      payload: testExpense
    });
  });
});

