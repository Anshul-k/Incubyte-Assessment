import { add } from "../stringCalculator";

it("should return 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

it("should return the number itself if only one number is provided", () => {
  expect(add("1")).toBe(1);
});

it("should return the sum of two comma-separated numbers", () => {
  expect(add("1,2")).toBe(3);
});

it("should return the sum of multiple comma-separated numbers", () => {
  expect(add("8,17,45,29,18,99")).toBe(216);
});

it("should handle new lines as delimiters", () => {
  expect(add("1\n2,3")).toBe(6);
});

it("should support custom delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("should throw an exception for negative numbers", () => {
  expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
});

test("should show all negative numbers in the exception message", () => {
  expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed -2,-3");
});
