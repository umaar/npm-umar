import test from "node:test";
import assert from "node:assert/strict";
import umar from "./index.js";

test("My test suite", async (t) => {
	await t.test("Name is set correctly", () => {
		assert.strictEqual(umar.name, "Umar Hansa");
	});
});
