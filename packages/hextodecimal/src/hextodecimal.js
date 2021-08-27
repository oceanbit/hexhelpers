const isValidHex = /^-?[0-9A-Fa-f ]+$/

export default function (hexStr) {
    if (!isValidHex.exec(hexStr)) {
        throw new Error("Unexpected value. Please input valid HEX")
    }
    const number = parseInt(hexStr.replace(' ', ''), 16);
    if (Number.isNaN(number)) {
        throw new Error("Unexpected value. Please input valid HEX")
    }
    return number.toString(10);
}
