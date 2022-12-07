import { newRecipe } from '../utils/functions.js';

test('Combine an array of ingredients and an array of numbers if steps is less than or equal to ten', () => {
    expect(newRecipe(["flour","sugar","water"],[2,1.4,1],4)).toStrictEqual(["flour2","sugar1.4","water1"]);
});