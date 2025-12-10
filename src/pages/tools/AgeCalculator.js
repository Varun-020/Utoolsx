// src/pages/tools/AgeCalculator.jsx
import React, { useState } from 'react';

function calculateAge(dobString, refString) {
  if (!dobString) return null;

  const dob = new Date(dobString);
  const ref = refString ? new Date(refString) : new Date();

  if (isNaN(dob.getTime()) || isNaN(ref.getTime()) || dob > ref) {
    return null;
  }

  let years = ref.getFullYear() - dob.getFullYear();
  let months = ref.getMonth() - dob.getMonth();
  let days = ref.getDate() - dob.getDate();

  if (days < 0) {
    // borrow days from previous month
    const prevMonth = new Date(ref.getFullYear(), ref.getMonth(), 0);
    days += prevMonth.getDate();
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  return { years, months, days };
}

export default function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [refDate, setRefDate] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = (e) => {
    e.preventDefault();
    setError('');

    const age = calculateAge(dob, refDate);
    if (!age) {
      setResult(null);
      setError('Please enter a valid date of birth (and reference date if used).');
      return;
    }

    setResult(age);
  };

  return (
    <section className="tool-page">
      <h1>Age Calculator</h1>
      <p>
        Calculate your exact age in years, months, and days. Enter your date of birth below.
      </p>

      <form onSubmit={handleCalculate} className="tool-form">
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            id="dob"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="refDate">
            Reference Date <span className="optional">(optional)</span>
          </label>
          <input
            id="refDate"
            type="date"
            value={refDate}
            onChange={(e) => setRefDate(e.target.value)}
          />
          <small>If left empty, today&apos;s date will be used.</small>
        </div>

        <button type="submit" className="primary-btn">
          Calculate Age
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {result && (
        <div className="result">
          <h2>Your Age</h2>
          <p>
            <strong>{result.years}</strong> years,&nbsp;
            <strong>{result.months}</strong> months,&nbsp;
            <strong>{result.days}</strong> days
          </p>
        </div>
      )}

      <section className="tool-seo-text">
        <h2>What this age calculator does</h2>
        <p>
          This online age calculator helps you quickly find your age from your date of birth.
          It gives your age in years, months, and days, which is useful for forms, exams,
          job applications, and more.
        </p>
      </section>
    </section>
  );
}
