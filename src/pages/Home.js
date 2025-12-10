import { Link } from "react-router-dom";
import { tools } from "../data/ToolsConfig";

export default function Home() {
  return (
    <>
     <section className="hero">
        <div className="hero-inner">
          <p className="hero-badge">🚀 Utoolsx • Fast online utilities</p>

          <h1>Free Online Tools for Developers, Students & Professionals</h1>

          <p className="hero-subtitle">
            Utoolsx gives you clean, distraction-free tools you can use right in
            your browser — no login, no ads overload, just quick utilities that work.
          </p>

          <ul className="hero-highlights">
            <li>⚡ Instant results in your browser</li>
            <li>🧰 Helpful tools for coding, text, and productivity</li>
            <li>📈 More utilities added regularly for everyday use</li>
          </ul>

          <div className="hero-actions">
            <a href="#tools" className="primary-btn">
              Browse all tools
            </a>
            <span className="hero-note">No sign-up required. Just use & go.</span>
          </div>
        </div>
      </section>

      <section id="tools" className="tools-section">
        <header className="tools-header">
          <h2>All Free Online Tools</h2>
          <p>
            Explore simple, fast utilities like text & word tools, GST calculations,
            and developer helpers. More tools will be added to Utoolsx over time.
          </p>
        </header>

        <div className="tool-grid">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              to={`/tools/${tool.slug}`}
              className="tool-card"
            >
              <h3>{tool.name}</h3>
              <p>{tool.shortDescription}</p>
              <span className="tool-category">{tool.category}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
