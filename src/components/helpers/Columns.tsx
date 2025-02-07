import { Box, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface ColumnsProps {
  children: ReactNode;
  sx?: SxProps;
}

interface ColumnProps {
  children: ReactNode;
  span?: number;
  sx?: SxProps;
}

export default function Columns({ children, sx }: ColumnsProps) {
  return (
    <Box
      sx={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", ...sx }}
    >
      {children}
    </Box>
  );
}

export function Column({ children, span = 12, sx }: ColumnProps) {
  return <Box sx={{ gridColumn: `span ${span}`, ...sx }}>{children}</Box>;
}
