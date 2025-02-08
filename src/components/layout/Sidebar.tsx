import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Fab,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SxProps,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { sidebarList } from "../../common/constant";
import { flex, fullHeight, space } from "../../common/style";

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
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={style}>
      <List>
        {sidebarList.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => navigate(item.href)}>
              <ListItemIcon sx={{ minWidth: space.lg }}>
                {item.icon}
              </ListItemIcon>
              {open && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box
        sx={{
          ...flex.row,
          ...flex.justifyEnd,
          pr: !open ? "0.8rem" : space.md,
        }}
      >
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
