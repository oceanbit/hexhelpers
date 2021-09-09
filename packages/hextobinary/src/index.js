#!/usr/bin/env node

import hexToBinary from './hextobinary.js';
import getStdin from 'get-stdin';

const inputPromise = (process.argv.length > 2)
    ? Promise.resolve(process.argv[2])
    : getStdin();

inputPromise
    .then(input => {
        process.stdout.write(hexToBinary(input));
    })
    .catch(e => {
        process.stderr.write(e.toString());
    })
