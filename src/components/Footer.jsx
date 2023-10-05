import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        &copy; Created by{" "}
        <a
          href="https://github.com/MartinTeleki?tab=repositories"
          className="footer-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mgr. Martin Teleki
        </a>
      </p>
    </div>
  );
}
