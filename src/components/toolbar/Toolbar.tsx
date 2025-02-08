import { Box, SxProps } from "@mui/material";
import { border, flex } from "../../common/style";
import User from "./User";

const style: SxProps = {
  ...flex.row,
  ...flex.justifyBetween,
  alignItems: "center",
  height: "100%",
  padding: "0 1rem",
  borderBottom: border,
};

const Toolbar = () => {
  return (
    <Box sx={style}>
      <Box>Toolbar</Box>
      <User />
    </Box>
  );
};

export default Toolbar;
