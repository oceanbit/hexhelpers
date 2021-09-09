#!/usr/bin/env node

import decimalToBinary from './decimaltobinary.js';
import getStdin from 'get-stdin';

const inputPromise = (process.argv.length > 2)
    ? Promise.resolve(process.argv[2])
    : getStdin();

inputPromise
    .then(input => {
        process.stdout.write(decimalToBinary(input) + "\n");
    })
    .catch(err => {
        process.stderr.write(err.message);
    });