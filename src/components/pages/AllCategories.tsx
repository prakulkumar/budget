import { Box } from "@mui/material";
import CreateCategory from "../allCategories/CreateCategory";
import { fontWeight } from "../../common/style";

const AllCategories = () => {
  return (
    <Box>
      <Box sx={{ fontWeight: fontWeight.medium, fontSize: "1.3rem" }}>
        Create a new category
      </Box>
      <CreateCategory />
    </Box>
  );
};

export default AllCategories;
