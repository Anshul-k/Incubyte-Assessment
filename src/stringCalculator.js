export const add = (numbers) => {
  if (!numbers) return 0;

  let delimiter = /,|\n/; //comma and newline Delimiter (Most common)
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n", 2);
    delimiter = new RegExp(parts[0].slice(2)); // For custom delimiter
    numbers = parts[1];
  }

  const numArray = numbers.split(delimiter).map(Number);

  const negatives = numArray.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
};
