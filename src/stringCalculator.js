export const add = (numbers) => {
  numbers = numbers.replace(/\\n/g, "\n");

  if (!numbers) return 0;

  let delimiter = /,|\n/; //comma and newline Delimiter (Most common)
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n", 2);
    const customDelimiter = parts[0].slice(2).trim(); // Extract custom delimiter

    // Handle multiple or special delimiters enclosed in brackets
    delimiter = new RegExp(
      customDelimiter.split("[").join("").split("]").join("|")
    );

    numbers = parts[1]; // Remainder of the string after the custom delimiter line
  }

  const numArray = numbers.split(delimiter).map(Number); // Split by the correct delimiter

  const negatives = numArray.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
};
