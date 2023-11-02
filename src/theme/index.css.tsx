import { CSSInterface } from "../utils/interfaces";

const GlobalStyles: CSSInterface = {
  conatiner: {
    width: "100%",
    height: "100vh",
    borderBottom: "1px solid #B4B4B3",
    padding: "2rem 8rem ",
  },
  conatinerVertical: {
    width: "100%",
    height: "100vh",
    borderBottom: "1px solid #B4B4B3",
    padding: "2rem",
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

export default GlobalStyles;
