import binarytodecimal from "../binarytodecimal.js";

describe("Binary to decimal", () => {
    test("Should convert binary to decimal", () => {
        expect(binarytodecimal("101")).toBe("5");
    });

    test("Should convert binary to decimal", () => {
        expect(binarytodecimal("110011")).toBe("51");
    });

    test("Should convert binary to decimal", () => {
        expect(binarytodecimal("1001101")).toBe("77");
    });
    
    test("Should throw invalid input error", () => {
        expect(() => binarytodecimal("hello")).toThrow();
    });

    test("Parses binary with spaces", () => {
        expect(binarytodecimal("1 0")).toBe("2");
    })
})