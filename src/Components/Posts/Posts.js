import React, { useEffect, useState } from "react";
import "./Posts.css";
import Post from "./Post/Post";
import { Box } from "@mui/material";
import loadingImg from "../Media/loadingImg/loading.gif";

const Posts = () => {
  const [userPosts, setUserPost] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-reef-50171.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => data.sort((a, b) => b.time - a.time))
      .then((sortedData) => setUserPost(sortedData));
  }, []);
  return (
    <Box>
      {userPosts.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={loadingImg} alt="" />
        </div>
      ) : (
        <>
          {userPosts.map((post) => (
            <Post post={post} key={post._id}></Post>
          ))}
        </>
      )}
    </Box>
  );
};

export default Posts;
