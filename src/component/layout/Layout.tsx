import { FC, ReactNode } from "react";

import Header from "../header/Header";
import Divider from "../../ui/divider/Divider";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>

      <Divider />

      <main>{children}</main>
    </>
  );
};

export default Layout;
