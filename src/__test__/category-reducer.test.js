import categoryReducer from '../reducer/category-reducer.js';
import expenseReducer from '../reducer/expense-reducer.js';

let testCategoryOne = {
  id: '000001',
  name: 'test category one',
  budget: 100,
  timestamp: new Date()
};

let testCategoryTwo = {
  id: '000002',
  name: 'test category two',
  budget: 200,
  timestamp: new Date()
};

let updatedTestCategoryOne = {
  id: '000001',
  name: 'updated test category one',
  budget: 200,
  timestamp: new Date()
};

let testCategoryStateOne = [testCategoryOne];
let testCategoryStateTwo = [testCategoryOne, testCategoryTwo];

describe('Category Reducer', () => {
  test('initial state should be an empty array', () => {
    let result = categoryReducer(undefined, { type: null });

    expect(result).toEqual([]);
  });

  test('if action type is not present, return state', () => {
    let result = categoryReducer(testCategoryStateOne, {type: null});

    expect(result).toEqual(testCategoryStateOne);
  });

  test('CATEGORY_CREATE should append a category to the categories array', () => {
    let action = {
      type: 'CATEGORY_CREATE',
      payload: testCategoryTwo
    }

    let result = categoryReducer(testCategoryStateOne, action);

    expect(result.length).toBe(2);
    expect(result[1]).toBe(action.payload);
  });

  test('CATEGORY_UPDATE should return state with modified category', () => {
    let action = {
      type: 'CATEGORY_UPDATE',
      payload: updatedTestCategoryOne
    }

    let result = categoryReducer(testCategoryStateTwo, action);

    expect(result[0]).toEqual(action.payload);
  });

  test('CATEGORY_DELETE should return new state and filter out category', () => {
    let action = {
      type: 'CATEGORY_DELETE',
      payload: testCategoryTwo
    }

    let result = categoryReducer(testCategoryStateTwo, action);

    expect(result[0]).toEqual(testCategoryOne);
  });

  test('CATEGORY_RESET should default to initialState', () => {
    let action = {
      type: 'CATEGORY_RESET',
      payload: {}
    };

    let result = categoryReducer(testCategoryStateOne, action);

    expect(typeof result).toBe('object');
  });
});

let testCategoryThree = {
  id: 'someTestId',
  name: 'test category three',
  budget: 300,
  timestamp: new Date()
}

describe('Category Reducer on Instantiated Expense Reducer', () => {
  test('CATEGORY_CREATE should return category-expense array', () => {
    let action = {
      type: 'CATEGORY_CREATE',
      payload: testCategoryThree
    }

    let result = expenseReducer([], action)

    expect(result.someTestId).toEqual([]);
    expect(result.someTestId.length).toEqual(0);
  });

  test('CATEGORY_DELETE on Instantiated Expense Reducer', () => {
    let action = {
      type: 'CATEGORY_DELETE',
      payload: testCategoryThree
    }

    let result = expenseReducer([], action)
    
    expect(result.someTestId).toBe(undefined);
  });
});
