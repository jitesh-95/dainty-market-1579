import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import BlogsHeadBox from "../../Components/BlogsHeadBox";
import BlogsLayout from "../../Components/BlogsLayout";
import BlogsNavbar from "../../Components/BlogsNavbar";
import { remoteWorkData } from "../../utils/BlogsData";

const RemoteWork = () => {
  const headingText =
    "REMOTE WORK ARTICLES FOR REMOTE TEAMS AND PEOPLE THAT DO HOME OFFICE.";
  return (
    <Box top="68" position="relative">
      <BlogsNavbar />
      <BlogsHeadBox headingText={headingText} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
          "2xl": "repeat(3, 1fr)",
        }}
        gap={4}
        p={{
          base: "1rem 1.5rem",
          sm: "1rem 1.5rem",
          md: "1rem 0.5rem",
          lg: "1rem 6rem",
          xl: "1rem 10rem",
          "2xl": "1rem 10rem",
        }}
        top={70}
        position="relative"
        pb="15rem"
      >
        <BlogsLayout data={remoteWorkData} />
      </Grid>
    </Box>
  );
};

export default RemoteWork;
