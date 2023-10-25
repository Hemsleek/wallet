import AppRoutes from "./AppRoutes";

import "./App.scss";

function App() {
  return (
    <div
      style={{
        width: "100dvw",
        height: "100dvh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <AppRoutes />
    </div>
  );
}

export default App;
