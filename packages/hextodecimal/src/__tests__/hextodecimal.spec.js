// import {immutableProxifyDeep} from "../immutable-proxify-deep";

const hexToDecimal = require('../hextodecimal');

describe('Hex to decimal', () => {
    test('Should do simple HEX conversion', () => {
        expect(hexToDecimal('f')).toBe('15');
    })

    test('Should do simple HEX conversion with decimal values', () => {
        expect(hexToDecimal('1')).toBe('1');
    })

    test('Throws on invalid input', () => {
        expect(() => hexToDecimal('p')).toThrow();
    })

    test('Parses hex with spaces', () => {
        expect( hexToDecimal('f f')).toBe('255');
    })
})
