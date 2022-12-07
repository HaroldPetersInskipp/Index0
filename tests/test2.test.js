import { newRecipe } from '../utils/functions.js';

test('Test for undefined if more than ten steps', () => {
    expect(newRecipe(["flour","sugar","water"],[2,1.4,1],11)).toStrictEqual(undefined);
});