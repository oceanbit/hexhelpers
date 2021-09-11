const isValidBinary = /^-?[01\s]+$/;

export default function (binaryStr) {
    if (!isValidBinary.exec(binaryStr)) {
        throw new Error('Undexpected value. Please enter valid binary\n');
    }

    const binary = parseInt(binaryStr.replace(/\s/g, ''), 2);
    if (Number.isNaN(binary)) {
        throw new Error('Undexpected value. Please enter valid binary\n');
    }

    return binary.toString(10);
}