import { Button, Typography } from "@mui/material";
import React from "react";
import useAuth from "../Hooks/useAuth";

const NewPost = () => {
  const {
    handlePostTypeText,
    handlePostTypeImage,
    handlePostType,
    handleViewType,
  } = useAuth();
  return (
    <div
      style={{
        background: "white",
        padding: "5px",
        borderRadius: "10px",
        boxShadow: "1px 1px 5px #ccc",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
        }}
      >
        <Button
          onClick={() => {
            handlePostTypeText();
            handleViewType(true);
          }}
        >
          {/* Pen Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-pencil"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
          </svg>
          <Typography
            sx={{ display: { xs: "none", lg: "block" }, marginLeft: "10px" }}
          >
            Post
          </Typography>
        </Button>

        <Button
          onClick={() => {
            handlePostTypeImage();
            handleViewType(true);
          }}
        >
          {/* Image Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-photo"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="15" y1="8" x2="15.01" y2="8" />
            <rect x="4" y="4" width="16" height="16" rx="3" />
            <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
            <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
          </svg>
          <Typography
            sx={{ display: { xs: "none", lg: "block" }, marginLeft: "10px" }}
          >
            Image
          </Typography>
        </Button>

        <Button
          onClick={() => {
            handlePostType();
            handleViewType(true);
          }}
        >
          {/* Video Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-movie"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="4" x2="8" y2="20" />
            <line x1="16" y1="4" x2="16" y2="20" />
            <line x1="4" y1="8" x2="8" y2="8" />
            <line x1="4" y1="16" x2="8" y2="16" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="16" y1="8" x2="20" y2="8" />
            <line x1="16" y1="16" x2="20" y2="16" />
          </svg>
          <Typography
            sx={{ display: { xs: "none", lg: "block" }, marginLeft: "10px" }}
          >
            Video
          </Typography>
        </Button>

        <Button
          onClick={() => {
            handlePostType();
            handleViewType(true);
          }}
        >
          {/* Live Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-video"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
            <rect x="3" y="6" width="12" height="12" rx="2" />
          </svg>
          <Typography
            sx={{ display: { xs: "none", lg: "block" }, marginLeft: "10px" }}
          >
            Live
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default NewPost;
