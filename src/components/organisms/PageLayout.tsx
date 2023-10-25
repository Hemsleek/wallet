import { ReactElement } from "react";
import Navbar from "./Navbar";
import Tabs from "./Tabs";

const PageLayout = ({
  children,
  pageTitle,
}: {
  children: ReactElement;
  pageTitle?: string;
}) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Navbar title={pageTitle} />
      <main
        style={{
          flexGrow: 1,
          overflow: "auto",
          background: "var(--wallet-bg)",
          padding: "1rem  1rem 0",
        }}
      >
        {children}
      </main>
      <Tabs />
    </div>
  );
};

export default PageLayout;
