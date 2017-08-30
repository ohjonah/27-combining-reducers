import uuid from 'uuid/v1';

export const expenseCreate = (expense) => {
  expense.id = uuid();
  expense.timestamp = new Date();

  return {
    type: 'expenseCreate',
    payload: expense
  }
}