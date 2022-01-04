import { Box } from "@mui/material";
import React from "react";
import Navigation from "../../Components/Navigation/Navigation";
import Posts from "../../Components/Posts/Posts";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "block", lg: "grid" },
          marginTop: "20px",
          marginBottom: "20px",
          gridTemplateColumns: "repeat(4,1fr)",
          gridGap: "20px",
        }}
      >
        <div style={{ padding: "20px" }}>
          <Navigation></Navigation>
        </div>
        <div
          style={{
            gridColumn: "span 2",
            padding: "20px",
          }}
        >
          <Posts></Posts>
        </div>
        <div style={{ padding: "20px" }}></div>
      </Box>
    </>
  );
};

export default Home;
