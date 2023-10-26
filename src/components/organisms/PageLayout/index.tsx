import { ReactElement } from "react";
import Navbar from "../Navbar";
import Tabs from "../Tabs";

import "./PageLayout.scss";

const PageLayout = ({
  children,
  pageTitle,
}: {
  children: ReactElement;
  pageTitle?: string;
}) => {
  return (
    <div className="PageLayout">
      <div className="content-wrapper">
        <Navbar title={pageTitle} />
        <main>{children}</main>
      </div>
      <div className="tabs-wrapper">
        <Tabs />
      </div>
    </div>
  );
};

export default PageLayout;
