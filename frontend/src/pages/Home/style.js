import COLORS from "../../utils/colors";

const styles = {
  layoutStyle: {
    height: "100vh",
  },
  headerStyle: {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "normal",
    background: "linear-gradient(254deg, #e6f3ff 0%, #f2f9ff 100%) ",
  },
  contentStyle: {
    background: COLORS.dark2,
  },
  siderStyle: {
    background: "linear-gradient(254deg, #e6f3ff 0%, #f2f9ff 100%)",
    borderLeft: `1px solid ${COLORS.grey1}`,
  },
  footerStyle: {
    textAlign: "center",
    color: "#fff",
    background: COLORS.dark2,
  },
  headerContentStyle: {
    float: "left",
    margin: "7px 0",
  },
  iconStyle: {
    fontSize: 22,
    color: "rgba(0, 0, 0, 0.88)",
  },
  titleStyle: {
    margin: 0,
    textAlign: "left",
    whiteSpace: "nowrap",
  },
};

export default styles;
