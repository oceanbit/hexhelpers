const isValidBinary = /^-?[01\s]+$/

export default function (binaryStr) {
    if (!isValidBinary.exec(binaryStr)) {
        throw new Error("Unexpected value. Please input valid decimal")
    }
    const number = parseInt(binaryStr.replace(/\s/g, ''), 2);
    if (Number.isNaN(number)) {
        throw new Error("Unexpected value. Please input valid HEX")
    }
    return number.toString(16);
}
