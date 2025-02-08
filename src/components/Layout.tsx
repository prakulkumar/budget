import { Box } from "@mui/material";
import { useState } from "react";
import { border, color, flex, space } from "../common/style";
import Columns, { Column } from "./helpers/Columns";
import Main from "./Main";
import { Sidebar } from "./Sidebar";
import Toolbar from "./Toolbar";

const Layout = () => {
  const [openSideNav, setOpenSideNav] = useState(true);

  return (
    <Box sx={{ height: "100vh" }}>
      <Columns sx={{ height: "3.75rem" }}>
        <Column>
          <Toolbar />
        </Column>
      </Columns>

      <Box sx={{ height: "calc(100vh - 3.75rem)", ...flex.row }}>
        <Box
          sx={{
            width: openSideNav ? "12rem" : "2.5rem",
            borderRight: border,
            p: space.md,
          }}
        >
          <Sidebar open={openSideNav} setOpen={setOpenSideNav} />
        </Box>
        <Box
          sx={{
            flex: 1,
            borderRight: border,
            p: space.md,
            background: color.backgroud,
          }}
        >
          <Main />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
