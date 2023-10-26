import { NavLink } from "react-router-dom";
import "./Tabs.scss";

const Tabs = () => {
  return (
    <div className="Tabs">
      <NavLink to="/" className="tab-wrapper">
        {({ isActive }) => (
          <div className="link">
            <img
              src={`/vectors/wallet${isActive ? "-active" : ""}.svg`}
              alt="wallet-icon"
            />
            <span className={`link-label ${isActive && "active-link"}`}>
              Wallet
            </span>
          </div>
        )}
      </NavLink>
      <NavLink to="/explore" className="tab-wrapper">
        {({ isActive }) => (
          <div className="link">
            <img
              src={`/vectors/explore${isActive ? "-active" : ""}.svg`}
              alt="explore-icon"
            />
            <span className={`link-label ${isActive && "active-link"}`}>
              Explore
            </span>
          </div>
        )}
      </NavLink>
      <NavLink to="/notifications" className="tab-wrapper">
        {({ isActive }) => (
          <div className="link">
            <img
              src={`/vectors/notification${isActive ? "-active" : ""}.svg`}
              alt="notification-icon"
            />
            <span className={`link-label ${isActive && "active-link"}`}>
              Notifications
            </span>
          </div>
        )}
      </NavLink>
      <NavLink to="/settings" className="tab-wrapper">
        {({ isActive }) => (
          <div className="link">
            <img
              src={`/vectors/settings${isActive ? "-active" : ""}.svg`}
              alt="settings-icon"
            />
            <span className={`link-label ${isActive && "active-link"}`}>
              Settings
            </span>
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default Tabs;
