import { Menu, MenuItem, MenuList, Paper } from "@mui/material";
import React from "react";

interface Props {
  open: boolean;
  anchorEl: HTMLElement | null;
  setAnchorEl: (anchorEl: HTMLElement | null) => void;
}

const UserMenu: React.FC<Props> = ({ open, anchorEl, setAnchorEl }) => {
  const handleClose = () => setAnchorEl(null);
  const menuList: string[] = ["Settings", "Logout"];

  return (
    <Menu
      id="user-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "user-button",
      }}
    >
      <Paper sx={{ width: "12rem", maxWidth: "100%" }} elevation={0}>
        <MenuList>
          {menuList.map((item) => (
            <MenuItem onClick={handleClose}>{item}</MenuItem>
          ))}
        </MenuList>
      </Paper>
    </Menu>
  );
};

export default UserMenu;
