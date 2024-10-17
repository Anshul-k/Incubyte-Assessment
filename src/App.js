import React, { useState } from "react";
import { add } from "./stringCalculator";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = () => {
    try {
      const trimmedInput = input.trim();
      console.log("Input:", trimmedInput);
      const sum = add(trimmedInput);
      setResult(sum);
      setError(null);
    } catch (e) {
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen flex-col bg-gray-100 flex items-center justify-center p-4">
      <h2 className="text-4xl font-semibold text-gray-700 mb-10 text-center">
        Incubyte Assessment
      </h2>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          String Calculator
        </h1>

        <input
          type="text"
          className="border border-gray-300 rounded-md w-full p-2 mb-4"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter comma-separated numbers or custom delimiter"
        />

        <button
          onClick={handleCalculate}
          className="bg-green-500 hover:bg-green-600 text-white rounded-md w-full py-2 font-semibold active:scale-95"
        >
          Calculate
        </button>

        {result !== null && (
          <p className="mt-4 text-green-600 text-center text-lg">
            Sum: {result}
          </p>
        )}

        {error && (
          <p className="mt-4 text-red-600 text-center text-lg">{error}</p>
        )}
      </div>
    </div>
  );
}

export default App;
