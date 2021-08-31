// import {immutableProxifyDeep} from "../immutable-proxify-deep";

import hexToBinary from '../hextobinary.js';

describe('Hex to binary', () => {
    test('Should do simple HEX conversion', () => {
        expect(hexToBinary('f')).toBe('1111');
    })

    test('Should do simple HEX conversion with binary values', () => {
        expect(hexToBinary('1')).toBe('1');
    })

    test('Throws on invalid input', () => {
        expect(() => hexToBinary('p')).toThrow();
    })

    test('Parses hex with spaces', () => {
        expect( hexToBinary('f f')).toBe('11111111');
    })
})
