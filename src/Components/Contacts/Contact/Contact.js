import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";

const Contact = ({ contact, total }) => {
  const { photoURL, displayName, _id } = contact;
  const handleContact = () => {
    console.log("hello user");
  };
  return (
    <ListItem
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      alignItems="flex-start"
    >
      <ListItemAvatar>
        <Link to={`/user/${_id}`}>
          <Avatar alt="Remy Sharp" src={photoURL} />
        </Link>
      </ListItemAvatar>
      <Typography>{displayName}</Typography>
      <IconButton
        sx={{
          marginLeft: "auto",
        }}
        onClick={handleContact}
        aria-label="settings"
      ></IconButton>
    </ListItem>
  );
};

export default Contact;
