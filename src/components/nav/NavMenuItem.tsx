import { Popover, Card } from "antd";
import { ReactNode } from "react";
import NavStyles from "./index.css";
import { useMediaQuery } from "react-responsive";

interface Props {
  header?: string;
  subHeader?: string;
  element?: ReactNode;
  path?: string;
}

const NavMenuItem = ({ header, subHeader, element, path }: Props) => {
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  const getMenuCard = () => (
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
  );

  if (isPortrait) {
    return getMenuCard();
  }

  return (
    <Popover
      className="popover-menu-item"
      style={{ borderRadius: "5rem" }}
      content={header && <h1 style={NavStyles.popoverText}>{header}</h1>}
      placement="right"
    >
      {getMenuCard()}
    </Popover>
  );
};

export default NavMenuItem;
