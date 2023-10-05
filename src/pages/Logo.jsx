import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="kontakt" style={{ textDecoration: "none", color: "white" }}>
      <div className="logo">
        <p>Pojistovna React</p>
      </div>
    </Link>
  );
}
