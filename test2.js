const assert = require('assert');
const sum = require('./index');

console.log("assertモジュールによるテストです。");

assert.strictEqual(sum.add([1, 2, 3]), 6);
assert.strictEqual(sum.multi([1, 2, 3]), 6);

console.log("テストは、成功しました。");