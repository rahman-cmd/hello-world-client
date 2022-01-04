import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AlertDialog from "./Dialog";
const Post = ({ post }) => {
  const { userName, profile_img, Post, dateTime, image } = post;
  const [open, setOpen] = useState(false);
  const handlePost = () => {
    setOpen(true);
  };

  return (
    <Card
      sx={{
        marginTop: "30px",
        marginLeft: "auto",
        marginRight: "auto",
        width: { xs: "90%", lg: "200%" },
        borderRadius: "15px",
        boxShadow: "1px 1px 5px #ccc",
        padding: "15px",
      }}
    >
      <CardHeader
        avatar={<Avatar alt={userName} src={profile_img} />}
        action={
          <IconButton onClick={handlePost} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={userName}
        subheader={dateTime}
      />
      {open && <AlertDialog open={open} setOpen={setOpen}></AlertDialog>}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {Post}
        </Typography>
      </CardContent>
      {image && (
        <CardMedia
          style={{ borderRadius: "10px" }}
          component="img"
          // height="194px"
          width="100%"
          image={image}
          alt="Paella dish"
        />
      )}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"></IconButton>
        <IconButton aria-label="share"></IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
