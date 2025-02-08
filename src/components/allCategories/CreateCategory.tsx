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
import { flex } from "../../common/style";

const CreateCategory = () => {
  const [age, setAge] = useState("");

  return (
    <Box sx={{ ...flex.row, pt: 2, gap: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Category Type"
          onChange={(e) => setAge(e.target.value)}
        >
          <MenuItem value={"expenses"}>Expenses</MenuItem>
          <MenuItem value={"income"}>Income</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Category Type"
          onChange={(e) => setAge(e.target.value)}
        >
          <MenuItem value={"expenses"}>Expenses</MenuItem>
          <MenuItem value={"income"}>Income</MenuItem>
        </Select>
      </FormControl>

      <TextField
        fullWidth
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Category Type"
          onChange={(e) => setAge(e.target.value)}
        >
          <MenuItem value={"expenses"}>Expenses</MenuItem>
          <MenuItem value={"income"}>Income</MenuItem>
        </Select>
      </FormControl>

      <Button fullWidth variant="contained">
        Contained
      </Button>
    </Box>
  );
};

export default CreateCategory;
