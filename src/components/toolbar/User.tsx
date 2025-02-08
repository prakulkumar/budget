import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, Box, Button } from "@mui/material";
import { useState } from "react";
import { color, flex, space } from "../../common/style";
import UserMenu from "./UserMenu";

const User = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box>
      <Button
        id="user-button"
        aria-controls={open ? "user-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{ ...flex.row, ...flex.alignCenter, cursor: "pointer" }}
        onClick={handleClick}
        disableRipple={true}
      >
        <Avatar>P</Avatar>
        <Box p={space.sm} fontWeight={400} color={color.black}>
          Prakul Kumar
        </Box>
        <Box pt={space.sm} color={"#bbcdd8"}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Box>
      </Button>
      <UserMenu open={open} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </Box>
  );
};

export default User;
