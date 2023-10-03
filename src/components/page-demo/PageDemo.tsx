import { theme } from "antd";
import React from "react";

interface Props {
  pageId: string;
  header: string;
  subHeader: string;
}

const { useToken } = theme;

const PageDemo = ({ header, subHeader, pageId }: Props) => {
  const { token } = useToken();

  return (
    <div
      id={pageId}
      style={{
        width: "100%",
        height: "100vh",
        borderBottom: "1px solid #B4B4B3",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: token.colorBgLayout,
      }}
    >
      <div>
        <h1 style={{ fontSize: "10rem", color: token.colorPrimary }}>
          {header}
        </h1>
        <h1 style={{ fontSize: "4rem" }}>{subHeader}</h1>
      </div>
    </div>
  );
};

export default PageDemo;
