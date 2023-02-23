import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh" overflow="hidden">
      <Typography variant="h6" fontWeight={600}  color="white" mb={3} ml={2}>
        Search Results for <span style={{ color: "grey" }}>{searchTerm.length > 12 ? searchTerm.slice(0,9)+'...' : searchTerm}</span>
      </Typography>
      <Box display="flex" justify-content="center">
        {/* <Box/> */}
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;