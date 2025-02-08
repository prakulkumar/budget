// Spaces
export const space = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "2rem",
  xl: "4rem",
};

// Typography
export const fontStyle = {
  fontFamily: "Roboto, sans-serif",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.5,
};

// Colors
export const color = {
  primary: "#007bff",
  secondary: "#6c757d",
  success: "#28a745",
  danger: "#dc3545",
  warning: "#ffc107",
  info: "#17a2b8",
  light: "#f8f9fa",
  dark: "#343a40",
  white: "#fff",
  black: "#000",
  border: "#e8eaee",
  backgroud: "#f4f7fa",
};

// Breakpoints
export const breakpoint = {
  xs: "0",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

// Shadows
export const shadow = {
  sm: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)",
  md: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
  lg: "0 1rem 3rem rgba(0, 0, 0, 0.175)",
};

// Font weight
export const fontWeight = {
  extraLight: 300,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

// Border radius
export const borderRadius = "0.25rem";

// Border
export const border = `1px solid ${color.border}`;

// Full width
export const fullWidth = { width: "100%" };

// Full height
export const fullHeight = { height: "100%" };

// Flex
export const flex = {
  row: { display: "flex", flexDirection: "row" },
  column: { display: "flex", flexDirection: "column" },
  center: { alignItems: "center", justifyContent: "center" },
  alignCenter: { alignItems: "center" },
  justifyCenter: { justifyContent: "center" },
  justifyBetween: { justifyContent: "space-between" },
  justifyEnd: { justifyContent: "flex-end" },
};
