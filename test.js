const assert = require('assert');
const sum = require("./index");

describe("sumのテスト", () => {
	it("addのテスト", () => {
		assert.strictEqual(sum.add([1, 2, 3]), 6);
	});

	it("multiのテスト", () => {
		assert.strictEqual(sum.multi([1, 2, 3]), 6);
	});
});