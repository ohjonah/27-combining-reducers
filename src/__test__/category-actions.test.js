import {categoryCreate, categoryUpdate, categoryDelete} from '../action/category-actions.js';

describe('Category Actions', () => {
  let testCategory = { id: '123456', timestamp: new Date(), name: 'test name' };

  test('categoryCreate returns a CATEGORY_CREATE action', () => {
    let action = categoryCreate({ name: 'test name' });
    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload.id).toBeTruthy();
    expect(action.payload.timestamp).toBeTruthy();
    expect(action.payload.name).toBe('test name');
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
});
