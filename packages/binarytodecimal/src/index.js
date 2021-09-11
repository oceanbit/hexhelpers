#!/usr/bin/env node

import binaryToDecimal from './binarytodecimal.js';
import getStdin from 'get-stdin';

const inputPromise = (process.argv.length > 2)
    ? Promise.resolve(process.argv[2])
    : getStdin();

inputPromise
    .then(input => {
        process.stdout.write(binaryToDecimal(input) + "\n");
    })
    .catch(err => {
        process.stderr.write(err.message);
    });