import {calculateAppComponentsDelta} from './calculate-app-components-delta';

describe('calculateAppComponentsDelta', () => {
    test('should correct work on empty arrays', () => {
        expect(calculateAppComponentsDelta([], [])).toEqual([]);
        expect(calculateAppComponentsDelta([], ['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
        expect(calculateAppComponentsDelta(['a', 'b', 'c'], [])).toEqual([]);
    });
    test('should include only delta between app-components', () => {
        expect(calculateAppComponentsDelta(['a', 'b', 'c', 'd'], ['a', 'b', 'e', 'f'])).toEqual(['e', 'f']);
        expect(calculateAppComponentsDelta(['a', 'b', 'c', 'd'], ['e', 'f', 'g'])).toEqual(['e', 'f', 'g']);
        expect(calculateAppComponentsDelta(['a', 'b', 'c', 'd', 'e'], ['a', 'b', 'd', 'e'])).toEqual(['d', 'e']);
        expect(calculateAppComponentsDelta(['a', 'b', 'c', 'd', 'e'], ['a', 'b', 'd', 'c', 'e'])).toEqual(['d', 'c', 'e']);
    });
});
