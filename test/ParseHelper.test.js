import { fastLineSplit } from "../esm/ParseHelpers.js";
import "should";

describe("fastLineSplit", () => {
	it("should split lines with a '\\n' delimiter", () => {
		const text = "hello\nworld";
		fastLineSplit(text).should.eql(["hello", "world"]);
	});
	it("should split lines with a '\\r' delimiter", () => {
		const text = "hello\rworld";
		fastLineSplit(text).should.eql(["hello", "world"]);
	});
	it("should split lines with a '\\r\\n' delimiter", () => {
		const text = "hello\r\nworld";
		fastLineSplit(text).should.eql(["hello", "world"]);
	});
	it("should split lines without a delimiter into one line", () => {
		const text = "hello world";
		fastLineSplit(text).should.eql(["hello world"]);
	});
});
