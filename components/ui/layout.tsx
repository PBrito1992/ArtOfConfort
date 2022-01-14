import { FC } from "react";
import Footer from "../footer";
import Header from "../header";

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <main style={{ minHeight: "calc(100vh - 153px)" }}>{children}</main>
    <Footer />
  </>
);

export default Layout;
