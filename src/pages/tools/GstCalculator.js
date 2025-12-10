import React, { useState } from "react";

export default function GstCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState(18);
  const [type, setType] = useState("exclusive"); // exclusive | inclusive
  const [result, setResult] = useState(null);

  const calculateGST = (e) => {
    e.preventDefault();
    const amt = Number(amount);
    const r = Number(rate);

    if (!amt || amt <= 0) {
      setResult(null);
      return;
    }

    let baseAmount, gstAmount, totalAmount;

    if (type === "exclusive") {
      baseAmount = amt;
      gstAmount = (baseAmount * r) / 100;
      totalAmount = baseAmount + gstAmount;
    } else {
      totalAmount = amt;
      baseAmount = (totalAmount * 100) / (100 + r);
      gstAmount = totalAmount - baseAmount;
    }

    setResult({
      baseAmount: Math.round(baseAmount),
      gstAmount: Math.round(gstAmount),
      totalAmount: Math.round(totalAmount),
    });
  };

  return (
    <section className="tool-page">
      <h1>GST Calculator (India)</h1>
      <p>
        Calculate GST easily for 5%, 12%, 18% and 28% rates. Supports GST
        inclusive and exclusive amounts.
      </p>

      <form onSubmit={calculateGST} className="tool-form">
        <div className="form-group">
          <label>Amount (₹)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>

        <div className="form-group">
          <label>GST Rate (%)</label>
          <select value={rate} onChange={(e) => setRate(e.target.value)}>
            <option value={5}>5%</option>
            <option value={12}>12%</option>
            <option value={18}>18%</option>
            <option value={28}>28%</option>
          </select>
        </div>

        <div className="form-group">
          <label>GST Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="exclusive">Exclusive (Add GST)</option>
            <option value="inclusive">Inclusive (Remove GST)</option>
          </select>
        </div>

        <button className="primary-btn" type="submit">
          Calculate GST
        </button>
      </form>

      {result && (
        <div className="result">
          <h2>Result</h2>
          <p>
            Base Amount: <strong>₹ {result.baseAmount}</strong>
          </p>
          <p>
            GST Amount: <strong>₹ {result.gstAmount}</strong>
          </p>
          <p>
            Total Amount: <strong>₹ {result.totalAmount}</strong>
          </p>
        </div>
      )}

      <section className="tool-seo-text">
        <h2>About GST Calculator</h2>
        <p>
          This free GST calculator helps businesses and individuals in India
          quickly calculate GST for common tax slabs. You can use it for
          invoices, pricing, and tax estimates.
        </p>
      </section>
    </section>
  );
}
