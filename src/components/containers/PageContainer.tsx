import { theme } from "antd";
import GlobalStyles from "../../theme/index.css";
import { useMediaQuery } from "react-responsive";

const { useToken } = theme;

const PageContainer = ({ children, pageId }: any) => {
  const { token } = useToken();
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  return (
    <div
      id={pageId}
      style={
        isPortrait
          ? {
              ...GlobalStyles.conatinerVertical,
              backgroundColor: token.colorBgLayout,
            }
          : {
              ...GlobalStyles.conatiner,
              backgroundColor: token.colorBgLayout,
            }
      }
    >
      {children}
    </div>
  );
};

export default PageContainer;
