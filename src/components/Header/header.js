import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

function Header() {
  const location = useLocation();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const toggleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const collapseNav = () => setIsNavCollapsed(true);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <Link to="/" className="title-name" onClick={collapseNav} replace>Elena Magay</Link>
        <button className="navbar-toggler" type="button" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={toggleNavCollapse}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse justify-content-end`}>
          <div className="navbar-nav">
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"} onClick={collapseNav} replace>
              Contact {location.pathname === "/contact" ? <span className="sr-only">(current)</span> : ""}
            </Link>
            <Link to="/portfolio" className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} onClick={collapseNav} replace>
              Portfolio {location.pathname === "/portfolio" ? <span className="sr-only">(current)</span> : ""}
            </Link>
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"} onClick={collapseNav} replace>
              About {location.pathname === "/" ? <span className="sr-only">(current)</span> : ""}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;