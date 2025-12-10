// src/tools/BMICalculator.js
import React, { useMemo, useState } from "react";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState(""); // in cm

  const { bmi, category, advice } = useMemo(() => {
    const w = parseFloat(weight);
    const hCm = parseFloat(height);

    if (!w || !hCm || w <= 0 || hCm <= 0) {
      return {
        bmi: null,
        category: "",
        advice: "",
      };
    }

    const hM = hCm / 100; // convert cm to meters
    const value = w / (hM * hM);

    let cat = "";
    let adv = "";

    if (value < 18.5) {
      cat = "Underweight";
      adv = "You may need to gain some healthy weight. Consider a balanced, calorie-rich diet and regular exercise.";
    } else if (value >= 18.5 && value < 25) {
      cat = "Normal weight";
      adv = "Your BMI is in the normal range. Maintain it with a healthy diet and regular activity.";
    } else if (value >= 25 && value < 30) {
      cat = "Overweight";
      adv = "You may benefit from improving your diet and increasing physical activity.";
    } else {
      cat = "Obese";
      adv = "You should consider talking to a healthcare professional for personalised advice.";
    }

    return {
      bmi: value.toFixed(1),
      category: cat,
      advice: adv,
    };
  }, [weight, height]);

  const handleClear = () => {
    setWeight("");
    setHeight("");
  };

  return (
    <div className="tool-card">
      <h2>BMI Calculator</h2>
      <p className="tool-subtitle">
        Calculate your Body Mass Index (BMI) using your height and weight.
      </p>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            id="weight"
            type="number"
            className="text-input"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="e.g. 70"
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="height">Height (cm)</label>
          <input
            id="height"
            type="number"
            className="text-input"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="e.g. 175"
            min="0"
          />
        </div>
      </div>

      <div className="btn-row">
        <button
          type="button"
          className="danger-btn"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <span className="stat-label">BMI</span>
          <span className="stat-value">{bmi ?? "--"}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Category</span>
          <span className="stat-value">{category || "--"}</span>
        </div>
      </div>

      {bmi && (
        <div className="bmi-info">
          <h3 className="bmi-heading">What this means</h3>
          <p className="bmi-text">{advice}</p>
          <p className="bmi-disclaimer">
            Note: BMI is a general indicator and does not consider age, gender,
            muscle mass or medical conditions. For personalised guidance, consult
            a healthcare professional.
          </p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
