import React from "react";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <div className="hidden lg:flex"></div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
