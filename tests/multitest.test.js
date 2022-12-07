import { love } from '../utils/functions.js';

test('Test for true love', () => {
    expect(love("ben","heather")).toBe(true)
    expect(love("ben","heather")).toEqual(true)
    expect(love("ben","heather")).toStrictEqual(true)
    expect(love("heather","ben")).toBe(true)
    expect(love("heather","ben")).toEqual(true)
    expect(love("heather","ben")).toStrictEqual(true)
});