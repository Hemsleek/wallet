import { NavLink } from "react-router-dom";
import "./Tabs.scss";

const Tabs = () => {
  return (
    <div className="Tabs">
      <NavLink
        className={({ isActive }) => `tab-wrapper ${isActive && `active-link`}`}
        to="/"
      >
        {({ isActive }) => (
          <img
            src={`/vectors/wallet${isActive ? "-active" : ""}.svg`}
            alt="wallet-icon"
          />
        )}
      </NavLink>
      <NavLink to="/explore" className="tab-wrapper">
        {({ isActive }) => (
          <img
            src={`/vectors/explore${isActive ? "-active" : ""}.svg`}
            alt="explore-icon"
          />
        )}
      </NavLink>
      <NavLink to="/notifications" className="tab-wrapper">
        {({ isActive }) => (
          <img
            src={`/vectors/notification${isActive ? "-active" : ""}.svg`}
            alt="notification-icon"
          />
        )}
      </NavLink>
      <NavLink to="/settings" className="tab-wrapper">
        {({ isActive }) => (
          <img
            src={`/vectors/settings${isActive ? "-active" : ""}.svg`}
            alt="settings-icon"
          />
        )}
      </NavLink>
    </div>
  );
};

export default Tabs;
