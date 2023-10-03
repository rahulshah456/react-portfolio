import { Card, Switch } from "antd";
import NavMenuItem from "./NavMenuItem";

import NavStyles from "./index.css";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import FaceRoundedIcon from "@mui/icons-material/FaceRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

interface Props {
  isDark: boolean;
  setDark: (checked: boolean) => void;
}

const NavMenu = ({ isDark, setDark }: Props) => {
  return (
    <Card
      className="elevated-nav-menu"
      bordered={false}
      hoverable
      style={NavStyles.nav}
    >
      <NavMenuItem
        header="Home"
        path="/#home"
        element={<HomeRoundedIcon style={{ fontSize: "2rem" }} />}
      />
      <NavMenuItem
        header="Skills"
        path="/#skills"
        element={<TerminalRoundedIcon style={{ fontSize: "2rem" }} />}
      />
      <NavMenuItem
        header="Experience"
        path="/#experience"
        element={<WorkHistoryRoundedIcon style={{ fontSize: "2rem" }} />}
      />
      <NavMenuItem
        header="Projects"
        path="/#projects"
        element={<DashboardRoundedIcon style={{ fontSize: "2rem" }} />}
      />
      <NavMenuItem
        header="About"
        path="/#about"
        element={<FaceRoundedIcon style={{ fontSize: "2rem" }} />}
      />
      <NavMenuItem
        element={
          <Switch
            checkedChildren="Dark"
            unCheckedChildren="Light"
            checked={isDark}
            onChange={(checked: boolean) => setDark(checked)}
          />
        }
      />
    </Card>
  );
};

export default NavMenu;
