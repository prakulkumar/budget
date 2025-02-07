import { Box, SxProps } from "@mui/material";

const style: SxProps = {
  display: "flex",
  alignItems: "center",
  height: "100%",
  padding: "0 1rem",
  borderBottom: "1px solid #e8eaee",
};

const Toolbar = () => {
  return <Box sx={style}>Budget</Box>;
};

export default Toolbar;
