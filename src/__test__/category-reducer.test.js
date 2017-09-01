import categoryReducer from '../reducer/category-reducer.js';

describe('Category Reducer', () => {
  test('initial state should be an empty array', () => {
    let result = categoryReducer(undefined, { type: null });
    expect(result).toEqual([]);
  });

  test('if action type is not present, return state', () => {
    let state = [
      { id: 'someid', title: 'some title' },
      { id: 'anotherid', title: 'another title' }
    ]

    let result = categoryReducer(state, {type: null});
    expect(result).toEqual(state);
  });

  test('CATEGORY_CREATE should append a category to the categories array', () => {
    let action = {
      type: 'CATEGORY_CREATE',
      payload: 'sample payload'
    }

    let result = categoryReducer([], action);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(action.payload);
  });
});
