import { Box, SxProps } from "@mui/material";
import React, { ReactNode } from "react";

interface LayersProps {
  gap: number;
  children: ReactNode;
  sx?: SxProps;
}

const Layers: React.FC<LayersProps> = ({ gap, children, sx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: `${gap}rem`,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Layers;
