import CircleIcon from "@mui/icons-material/Circle";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { colorList } from "../../common/color";
import { iconList } from "../../common/icons";
import { flex, space } from "../../common/style";

const CreateCategory = () => {
  const [icon, setIcon] = useState("");
  const [color, setColor] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  return (
    <Box sx={{ ...flex.row, pt: 2, gap: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="icon-select-label">Icon</InputLabel>
        <Select
          labelId="icon-select-label"
          id="icon-select"
          value={icon}
          label="Icon"
          onChange={(e) => setIcon(e.target.value)}
          renderValue={() => {
            const selectedIcon = iconList.find((c) => c.name === icon);
            return (
              <Box sx={{ ...flex.row, textTransform: "capitalize" }}>
                {selectedIcon && (
                  <>
                    <Box
                      sx={{
                        background: color || "black",
                        borderRadius: "50%",
                        width: 24,
                        height: 24,
                        ...flex.row,
                        ...flex.center,
                      }}
                    >
                      <selectedIcon.icon
                        sx={{ color: "white", fontSize: "1rem" }}
                      />
                    </Box>
                    <Box pl={space.sm}>{selectedIcon.label}</Box>
                  </>
                )}
              </Box>
            );
          }}
        >
          {iconList.map((icon) => (
            <MenuItem value={icon.name}>
              <icon.icon /> <Box pl="1rem">{icon.label}</Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="color-select-label">Color</InputLabel>
        <Select
          labelId="color-select-label"
          id="color-select"
          value={color}
          label="Color"
          onChange={(e) => setColor(e.target.value)}
          renderValue={() => {
            const selectedColor = colorList.find((c) => c.value === color);
            return (
              <Box sx={{ ...flex.row, gap: 1, textTransform: "capitalize" }}>
                <CircleIcon sx={{ color }} />
                <Box>{`${selectedColor?.name} - ${selectedColor?.shade}`}</Box>
              </Box>
            );
          }}
        >
          {colorList.map((color) => (
            <MenuItem value={color.value} sx={{ backgroundColor: color.value }}>
              <Box
                sx={{
                  ...flex.row,
                  ...flex.justifyBetween,
                  width: "100%",
                  textTransform: "capitalize",
                }}
              >
                <Box>{color.name}</Box>
                <Box>{color.shade}</Box>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        fullWidth
        id="name"
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <FormControl fullWidth>
        <InputLabel id="type-select-label">Type</InputLabel>
        <Select
          labelId="type-select-label"
          id="type-select"
          value={type}
          label="Type"
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value={"expenses"}>Expenses</MenuItem>
          <MenuItem value={"income"}>Income</MenuItem>
        </Select>
      </FormControl>

      <Button fullWidth variant="contained">
        Create Category
      </Button>
    </Box>
  );
};

export default CreateCategory;
