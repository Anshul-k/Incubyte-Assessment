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

it("should handle new lines as delimiters", () => {
  expect(add("1\n2,3")).toBe(6);
});

it("should support custom delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});
