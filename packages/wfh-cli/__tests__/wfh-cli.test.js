'use strict';

const wfhCli = require('..');
const assert = require('assert').strict;

assert.strictEqual(wfhCli(), 'Hello from wfhCli');
console.info('wfhCli tests passed');
