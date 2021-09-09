const isValidHex = /^-?[0-9A-Fa-f\s]+$/

export default function (hexStr) {
    if (!isValidHex.exec(hexStr)) {
        throw new Error("Unexpected value. Please input valid HEX\n")
    }
    const number = parseInt(hexStr.replace(/\s/g, ''), 16);
    if (Number.isNaN(number)) {
        throw new Error("Unexpected value. Please input valid HEX\n")
    }
    return number.toString(10);
}
