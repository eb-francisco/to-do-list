import {maxNumber} from './index.js';

describe('max number function', () => {

    it('should returns zero when empty array', () => {
        expect(maxNumber([])).toEqual(0);
    });

    it('should returns max number when array is not empty', () => {
        expect(maxNumber([1, 2, 3])).toEqual(3);
    })

});
