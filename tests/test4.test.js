import { newRecipe } from '../utils/functions.js';

test('Test for empty ingredients array', () => {
    expect(newRecipe([],[1,2,3],9)).toStrictEqual([]);
});