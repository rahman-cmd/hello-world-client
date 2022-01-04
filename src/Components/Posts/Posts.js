import React, { useEffect, useState } from "react";
import "./Posts.css";
import Post from "./Post/Post";
import { Box } from "@mui/material";

const Posts = () => {
  const [userPosts, setUserPost] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setUserPost(data));
  }, []);
  return (
    <Box
      sx={{
        marginLeft: { xs: "auto", lg: "50px" },
        marginRight: { xs: "auto", lg: "50px" },
        width: { xs: "max-content", lg: "300px" },
      }}
    >
      {userPosts.map((post) => (
        <Post post={post} key={post.id}></Post>
      ))}
    </Box>
  );
};

export default Posts;
