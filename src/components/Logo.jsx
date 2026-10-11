
import { Link } from "react-router-dom";
import { Boxes } from "lucide-react";

export default function Logo() {
  return (
    <Link to="/" className="brand-logo" aria-label="SoftKai home">
      <span className="brand-mark">
        <Boxes size={25} strokeWidth={2.2} />
      </span>
      <span className="brand-word">
        SoftKai<span>Technologies</span>
      </span>
    </Link>
  );
}
