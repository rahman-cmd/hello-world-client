import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";

const Request = ({ request }) => {
  const { profile_img, userName } = request;
  const handleRequest = () => {
    alert("hello request, accept me");
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        marginBottom: 1,
        width: { xs: "max-content", lg: "266px" },
        boxShadow: "1px,1px,3px gray",
        borderRadius: 3,
        padding: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <Avatar alt={userName} src={profile_img} />
        <Typography
          sx={{
            marginLeft: 3,
          }}
        >
          {userName}
        </Typography>
      </Box>
      <Typography variant="caption" ml={8} sx={{ display: "block" }}>
        wants to add you to friends
      </Typography>
      <Box ml={6}>
        <Button>Accept</Button>
        <Button sx={{ marginLeft: 4 }}>Decline</Button>
      </Box>
    </Box>
  );
};

export default Request;
