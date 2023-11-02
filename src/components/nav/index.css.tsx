import { CSSInterface } from "../../utils/interfaces";

const NavStyles: CSSInterface = {
  nav: {
    position: "fixed",
    left: "1rem",
    top: "25%",
    borderRadius: "8px",
    width: "90px",
    overflow: "hidden",
  },
  navBottom: {
    position: "fixed",
    bottom: "1rem",
    left: "20vmin",
    borderRadius: "8px",
    width: "62vmin",
    overflow: "hidden",
  },
  navBody: {
    display: "flex",
    flexDirection: "column",
  },
  navBodyBottom: {
    display: "flex",
    flexDirection: "row",
  },
  menuItem: {
    width: "90px",
    height: "90px",
    display: "flex",
    color: "gray",
    justifyContent: "center",
    alignItems: "center",
    padding: "0",
    margin: "0",
    overflow: "hidden",
  },
  popoverText: {
    fontSize: "8rem",
    padding: "1rem 3rem",
  },
};

export default NavStyles;
