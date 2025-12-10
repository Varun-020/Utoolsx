// src/tools/Base64Tool.js
import React, { useState } from "react";

const Base64Tool = () => {
  const [plainText, setPlainText] = useState("");
  const [base64Text, setBase64Text] = useState("");
  const [error, setError] = useState("");

  const encodeBase64 = () => {
    try {
      setError("");
      // handle unicode safely
      const encoded = btoa(
        unescape(encodeURIComponent(plainText || ""))
      );
      setBase64Text(encoded);
    } catch (err) {
      setError("Unable to encode text to Base64.");
    }
  };

  const decodeBase64 = () => {
    try {
      setError("");
      const decoded = decodeURIComponent(
        escape(atob(base64Text || ""))
      );
      setPlainText(decoded);
    } catch (err) {
      setError("Invalid Base64 string. Cannot decode.");
    }
  };

  const handleClear = () => {
    setPlainText("");
    setBase64Text("");
    setError("");
  };

  const handleSwap = () => {
    setPlainText(base64Text);
    setBase64Text(plainText);
    setError("");
  };

  return (
    <div className="tool-card base64-tool">
      <h2>Base64 Encoder / Decoder</h2>
      <p className="tool-subtitle">
        Quickly encode or decode Base64 strings. Useful for developers working
        with data, tokens, and binary content.
      </p>

      <div className="base64-layout">
        <div className="base64-column">
          <label className="field-label">Plain Text</label>
          <textarea
            className="text-area"
            rows={10}
            value={plainText}
            onChange={(e) => setPlainText(e.target.value)}
            placeholder="Enter or paste plain text here..."
          />
        </div>

        <div className="base64-column">
          <label className="field-label">Base64</label>
          <textarea
            className="text-area"
            rows={10}
            value={base64Text}
            onChange={(e) => setBase64Text(e.target.value)}
            placeholder="Enter or paste Base64 string here..."
          />
        </div>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="btn-row">
        <button
          type="button"
          className="secondary-btn"
          onClick={encodeBase64}
        >
          Encode →
        </button>
        <button
          type="button"
          className="secondary-btn"
          onClick={decodeBase64}
        >
          ← Decode
        </button>
        <button
          type="button"
          className="secondary-btn"
          onClick={handleSwap}
        >
          Swap
        </button>
        <button
          type="button"
          className="danger-btn"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Base64Tool;
