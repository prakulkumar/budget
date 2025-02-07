import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, Fab, SxProps } from "@mui/material";
import React from "react";
import { flex, fullHeight } from "../common/style";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const style: SxProps = {
  ...fullHeight,
  ...flex.column,
  ...flex.justifyBetween,
};

export const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={style}>
      <Box>S</Box>
      <Box sx={{ ...flex.row, ...flex.justifyEnd }}>
        <Fab
          color="primary"
          aria-label="add"
          size="small"
          onClick={open ? handleClose : handleOpen}
        >
          {open ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
        </Fab>
      </Box>
    </Box>
  );
};
