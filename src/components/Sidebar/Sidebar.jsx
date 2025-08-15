import { useState } from "react";
import {
  FaHome, FaIdBadge, FaFolderOpen, FaInfoCircle, FaPaperPlane,
  FaAngleDoubleLeft, FaAngleDoubleRight
} from "react-icons/fa";
import { profile, navItems } from "../../config/sidebarConfig"; 
import "./Sidebar.css";

const iconMap = {
  home:   <FaHome />,
  id:     <FaIdBadge />,
  folder: <FaFolderOpen />,
  info:   <FaInfoCircle />,
  send:   <FaPaperPlane />,
};

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className={`sidebar ${expanded ? "expanded" : ""}`}>
      <div className="sidebar__content">
        <div className="sidebar__brand">
          <div className="brand__avatar">{profile.initials}</div>
          {expanded && (
            <div className="brand__text">
              <span className="brand__title">{profile.name}</span>
              <span className="brand__subtitle">{profile.role}</span>
            </div>
          )}
        </div>

        <nav className="sidebar__nav">
          {navItems.map((it) => (
            <button key={it.key} className="nav__item" type="button">
              <span className="nav__icon">{iconMap[it.icon]}</span>
              {expanded && <span className="nav__label">{it.label}</span>}
            </button>
          ))}
        </nav>
      </div>

      <button
        className="sidebar__toggle"
        type="button"
        aria-label={expanded ? "Recolher menu" : "Expandir menu"}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
      </button>
    </aside>
  );
}
