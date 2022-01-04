import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AlertDialog from "./Dialog";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";

const Post = ({ post }) => {
  // const { singleUser } = useAuth();

  const { displayName, proImage, postData, time, postImage, imgCaption, UID } =
    post;
  const [open, setOpen] = useState(false);
  const handlePost = () => {
    setOpen(true);
  };

  // convert date
  const handleDate = (time) => {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${
      hours > 12 ? hours - 12 : hours
    }:${minutes}${ampm} ${day}/${month}/${year}`;
  };

  return (
    <>
      <Card
        sx={{
          marginTop: "30px",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "15px",
          boxShadow: "1px 1px 5px #ccc",
          padding: "15px",
          zIndex: "0",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "repeat(5,1fr)", lg: "repeat(7,1fr)" },
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <Link to={`/user/${UID}`}>
            <Box>
              <img
                src={proImage}
                alt={displayName}
                style={{ width: "50px", height: "50px", borderRadius: "50px" }}
              />
            </Box>
          </Link>
          <Box
            sx={{
              gridColumn: { xs: "span 3", lg: "span 5" },
              paddingLeft: { xs: "10px", lg: "0" },
            }}
          >
            <Typography>{displayName}</Typography>
            <Typography variant="caption"> {handleDate(time)}</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            {/* <IconButton onClick={handlePost} aria-label="settings">
              <MoreHorizIcon />
            </IconButton> */}
          </Box>
        </Box>

        {open && <AlertDialog open={open} setOpen={setOpen}></AlertDialog>}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {imgCaption ? imgCaption : postData}
          </Typography>
        </CardContent>
        {postImage && (
          <CardMedia
            style={{ borderRadius: "10px" }}
            component="img"
            // height="194px"
            width="100%"
            image={postImage}
            alt="Paella dish"
          />
        )}
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites"></IconButton>
          <IconButton aria-label="share"></IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
