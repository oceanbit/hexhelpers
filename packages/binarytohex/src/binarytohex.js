const isValidBinary = /^-?[01\s]+$/

export default function (binaryStr) {
    if (!isValidBinary.exec(binaryStr)) {
        throw new Error("Unexpected value. Please input valid decimal\n")
    }
    const number = parseInt(binaryStr.replace(/\s/g, ''), 2);
    if (Number.isNaN(number)) {
        throw new Error("Unexpected value. Please input valid HEX\n")
    }
    return number.toString(16);
}
