import { theme } from "antd";
import React from "react";

interface Props {
  header: string;
  subHeader: string;
}

const { useToken } = theme;

const PageDemo = ({ header, subHeader }: Props) => {
  const { token } = useToken();

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: token.colorPrimaryBg,
        borderBottom: "1px solid #B4B4B3",
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
