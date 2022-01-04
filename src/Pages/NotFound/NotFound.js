import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box sx={{ height: "50vh" }}>
      <lottie-player
        src="https://assets10.lottiefiles.com/packages/lf20_aaesnvcw.json"
        background="transparent"
        speed="1"
        style={{ width: "100%", height: "100%" }}
        loop
        autoplay
      ></lottie-player>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
      >
        <Typography variant="h5">Go to </Typography>
        <Link style={{ textDecoration: "none", marginLeft: "5px" }} to="/">
          <Typography variant="h5">Home</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
