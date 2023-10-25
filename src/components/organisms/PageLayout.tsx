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
        width: "100%",
        height: "100%",
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
          padding: "1rem  1rem 1.5rem",
        }}
      >
        {children}
      </main>
      <Tabs />
    </div>
  );
};

export default PageLayout;
