import React, { useState } from "react";

const JsonFormatter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleFormat = () => {
    try {
      const parsed = JSON.parse(input);
      const pretty = JSON.stringify(parsed, null, 2);
      setOutput(pretty);
      setError("");
    } catch (e) {
      setError(e.message || "Invalid JSON");
      setOutput("");
    }
  };

  const handleMinify = () => {
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setError("");
    } catch (e) {
      setError(e.message || "Invalid JSON");
      setOutput("");
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  const handleCopy = async () => {
    try {
      if (!output) return;
      await navigator.clipboard.writeText(output);
      alert("Output copied to clipboard");
    } catch {
      alert("Unable to copy");
    }
  };

  return (
    <div className="tool-card">
      <h2>JSON Formatter &amp; Validator</h2>
      <p className="tool-subtitle">
        Paste JSON to format, minify and validate it instantly.
      </p>

      <div className="json-layout">
        <div className="json-column">
          <label className="field-label">Input JSON</label>
          <textarea
            className="text-area"
            rows={12}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Paste JSON here, e.g. { "name": "Varun", "age": 22 }'
          />
        </div>

        <div className="json-column">
          <label className="field-label">Output</label>
          <textarea
            className="text-area"
            rows={12}
            value={output}
            readOnly
            placeholder="Formatted / minified JSON will appear here..."
          />
        </div>
      </div>

      {error && <div className="error-banner">Error: {error}</div>}

      <div className="btn-row">
        <button type="button" className="primary-btn" onClick={handleFormat}>
          Format (Pretty)
        </button>
        <button type="button" className="secondary-btn" onClick={handleMinify}>
          Minify
        </button>
        <button
          type="button"
          className="secondary-btn"
          onClick={handleCopy}
          disabled={!output}
        >
          Copy Output
        </button>
        <button type="button" className="danger-btn" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default JsonFormatter;
