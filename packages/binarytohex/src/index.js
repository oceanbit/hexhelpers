#!/usr/bin/env node

import binaryToHex from './binarytohex.js';
import getStdin from 'get-stdin';

const inputPromise = (process.argv.length > 2)
    ? Promise.resolve(process.argv[2])
    : getStdin();

inputPromise
    .then(input => {
        process.stdout.write(binaryToHex(input));
    })
    .catch(e => {
        process.stderr.write(e.toString());
    })
