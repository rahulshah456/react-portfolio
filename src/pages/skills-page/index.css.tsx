import { CSSInterface } from "../../utils/interfaces";

const SkillStyles: CSSInterface = {
  nav: {
    position: "fixed",
    left: "1rem",
    top: "25%",
    borderRadius: "8px",
    width: "90px",
    overflow: "hidden",
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

export default SkillStyles;
