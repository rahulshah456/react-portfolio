import { Popover, Card } from "antd";
import { ReactNode } from "react";
import NavStyles from "./index.css";

interface Props {
  header?: string;
  subHeader?: string;
  element?: ReactNode;
  path?: string;
}

const NavMenuItem = ({ header, subHeader, element, path }: Props) => {
  return (
    <Popover
      className="popover-menu-item"
      style={{ borderRadius: "5rem" }}
      content={header && <h1 style={NavStyles.popoverText}>{header}</h1>}
      placement="right"
    >
      <Card.Grid
        className="left-menu-item"
        hoverable={false}
        style={NavStyles.menuItem}
        onClick={() => {
          if (path !== undefined) {
            window.location.replace(path);
          }
        }}
      >
        {element}
      </Card.Grid>
    </Popover>
  );
};

export default NavMenuItem;
