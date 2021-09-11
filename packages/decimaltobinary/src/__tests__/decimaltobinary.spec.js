import decimalToBinary from "../decimaltobinary.js";

describe("Decimal to binary", () => {
    test("Should convert decimal to binary", () => {
        expect(decimalToBinary("10")).toBe("1010");
    });

    test("Should throw an error on invalid input", () => {
        expect(() => decimalToBinary("not decimal")).toThrow();
    })
})