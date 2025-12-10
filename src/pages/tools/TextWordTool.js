// src/tools/TextWordTool.js
import React, { useMemo, useState } from "react";

const TextWordTool = () => {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();

    const words = trimmed
      ? trimmed.split(/\s+/).filter((w) => w.length > 0)
      : [];

    const charactersWithSpaces = text.length;
    const charactersWithoutSpaces = text.replace(/\s/g, "").length;

    const lines = text.length ? text.split(/\r\n|\r|\n/).length : 0;

    const sentences = trimmed
      ? trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 0).length
      : 0;

    const wordCount = words.length;
    const readingTimeMinutes = wordCount / 200; // approx 200 wpm

    return {
      wordCount,
      charactersWithSpaces,
      charactersWithoutSpaces,
      lines,
      sentences,
      readingTimeMinutes,
    };
  }, [text]);

  const handleToUpper = () => setText((t) => t.toUpperCase());
  const handleToLower = () => setText((t) => t.toLowerCase());
  const handleClear = () => setText("");
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Text copied to clipboard");
    } catch (err) {
      alert("Unable to copy text");
    }
  };

  return (
    <div className="tool-card">
      <h2>Text & Word Tool</h2>
      <p className="tool-subtitle">
        Count words, characters, lines & sentences. Clean or format your text.
      </p>

      <textarea
        className="text-area"
        rows={8}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or type your text here..."
      />

      <div className="btn-row">
        <button type="button" className="secondary-btn" onClick={handleToUpper}>
          UPPERCASE
        </button>
        <button type="button" className="secondary-btn" onClick={handleToLower}>
          lowercase
        </button>
        <button type="button" className="secondary-btn" onClick={handleCopy}>
          Copy
        </button>
        <button type="button" className="danger-btn" onClick={handleClear}>
          Clear
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-label">Words</span>
          <span className="stat-value">{stats.wordCount}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Characters (with spaces)</span>
          <span className="stat-value">
            {stats.charactersWithSpaces}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Characters (no spaces)</span>
          <span className="stat-value">
            {stats.charactersWithoutSpaces}
          </span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Lines</span>
          <span className="stat-value">{stats.lines}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Sentences</span>
          <span className="stat-value">{stats.sentences}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Reading time (approx)</span>
          <span className="stat-value">
            {stats.readingTimeMinutes < 0.5
              ? "< 1 min"
              : `${stats.readingTimeMinutes.toFixed(1)} min`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TextWordTool;
