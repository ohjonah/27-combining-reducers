import {categoryCreate, categoryUpdate, categoryDelete, categoryReset} from '../action/category-actions.js';

describe('Category Actions', () => {
  let testCategory = {
    id: '123456',
    timestamp: new Date(),
    name: 'test category',
    budget: 100
  };

  test('categoryCreate returns a CATEGORY_CREATE action', () => {
    let action = categoryCreate({ name: 'test category', budget: 100 });

    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload.id).toBeTruthy();
    expect(action.payload.timestamp).toBeTruthy();
    expect(action.payload.name).toBe('test category');
    expect(action.payload.budget).toBe(100);
  });

  test('categoryDelete returns a CATEGORY_DELETE action', () => {
    let action = categoryDelete(testCategory);

    expect(action).toEqual({
      type: 'CATEGORY_DELETE',
      payload: testCategory
    })
  });

  test('categoryUpdate returns a CATEGORY_UPDATE action', () => {
    let action = categoryUpdate(testCategory);

    expect(action).toEqual({
      type: 'CATEGORY_UPDATE',
      payload: testCategory
    });
  });

  test('categoryReset returns a CATEGORY_RESET action', () => {
    let action = categoryReset(testCategory);
    expect(action).toEqual({
      type: 'CATEGORY_RESET'
    });
  });
});
