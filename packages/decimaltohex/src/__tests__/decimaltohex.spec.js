const decimalToHex = require('../decimaltohex');

describe('Hex to decimal', () => {
    test('Should do simple HEX conversion', () => {
        expect(decimalToHex('15')).toBe('f');
    })

    test('Should do simple HEX conversion with decimal values', () => {
        expect(decimalToHex('1')).toBe('1');
    })

    test('Throws on invalid input', () => {
        expect(() => decimalToHex('f')).toThrow();
    })

    test('Parses decimal with spaces', () => {
        expect( decimalToHex('1 5')).toBe('f');
    })
})
