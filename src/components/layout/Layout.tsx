import { Box } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { border, flex, space } from "../../common/style";
import Columns, { Column } from "./../helpers/Columns";
import Toolbar from "./../toolbar/Toolbar";
import { Sidebar } from "./Sidebar";

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
            width: openSideNav ? "12rem" : "4rem",
            borderRight: border,
            pt: space.md,
            pb: space.md,
          }}
        >
          <Sidebar open={openSideNav} setOpen={setOpenSideNav} />
        </Box>
        <Box
          sx={{
            flex: 1,
            borderRight: border,
            p: `${space.md} ${space.xl}`,
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
