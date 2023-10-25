import { Route, Routes } from "react-router-dom";

// pages
import Wallet from "./pages/Wallet";
import Explore from "./pages/Explore";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Wallet />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/notifications" element={<Notification />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
