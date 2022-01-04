import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <Box sx={{ height: "50vh" }}>
      <lottie-player
        src="https://assets10.lottiefiles.com/packages/lf20_m6cuL6.json"
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

export default ComingSoon;
