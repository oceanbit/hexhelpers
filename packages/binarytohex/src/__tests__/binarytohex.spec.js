import decimalToHex from '../binarytohex.js';

describe('Binary to hex', () => {
    test('Should do simple HEX conversion', () => {
        expect(decimalToHex('1111')).toBe('f');
    })

    test('Should do simple HEX conversion with decimal values', () => {
        expect(decimalToHex('1')).toBe('1');
    })

    test('Throws on invalid input', () => {
        expect(() => decimalToHex('f')).toThrow();
    })

    test('Parses binary with spaces', () => {
        expect( decimalToHex('1 0')).toBe('2');
    })
})
