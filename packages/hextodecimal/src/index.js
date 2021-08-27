#!/usr/bin/env node

// This came from: https://github.com/wmhilton/inflate-cli/blob/main/inflate.js
// I may regret supporting a command line argument.
var input = (process.argv.length > 2)
    ? require('fs').createReadStream(process.argv[2])
    : process.stdin;

input.pipe(require('zlib').createInflate()).pipe(process.stdout);
