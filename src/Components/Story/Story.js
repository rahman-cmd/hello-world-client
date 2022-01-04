import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import "./Story.css";
import defaultStory from "./Media/default.jpg";
import { styled } from "@mui/material/styles";
import useAuth from "../Hooks/useAuth";
import useStories from "../Hooks/useStories";

const Story = () => {
  const { singleUser } = useAuth();
  const { storiesData } = useStories();

  const [stories, setStories] = useState({});
  // console.log(stories);

  const Input = styled("input")({
    display: "none",
  });

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("time", stories.lastModified);
    formData.append("image", stories);
    formData.append("proImage", singleUser.photoURL);

    fetch("http://localhost:5000/stories", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          document.location.reload();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Box
      className="storyContainer"
      sx={{
        padding: "15px",
        display: "flex",
        overflowX: "scroll",
        cursor: "grab",
      }}
    >
      {/* Main */}
      <Box
        sx={{ margin: "0 5px 0 5px", position: "relative", cursor: "pointer" }}
      >
        <img
          src={defaultStory}
          alt=""
          style={{
            height: "200px",
            width: "100px",
            borderRadius: "10px",
            filter: "blur(1.5px)",
          }}
        />
        <div
          style={{
            width: "fit-content",
            position: "absolute",
            top: "72px",
            left: "20px",
          }}
        >
          <label htmlFor="image-in-story">
            <Input
              accept="image/*"
              id="image-in-story"
              type="file"
              onChange={(e) => {
                setStories(e.target.files[0]);

                handleSubmit();
              }}
            />
            <Button
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-square-plus"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#ffffff"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <line x1="9" y1="12" x2="15" y2="12" />
                <line x1="12" y1="9" x2="12" y2="15" />
              </svg>
            </Button>
          </label>
        </div>
      </Box>

      {/* Users */}
      {storiesData.map((story) => (
        <div style={{ position: "relative" }} key={story._id}>
          <img
            src={`data:image/jpeg;base64,${story?.image}`}
            alt="Story"
            style={{
              height: "200px",
              width: "100px",
              margin: "0 5px 0 5px",
              borderRadius: "10px",
            }}
          />
          <div
            style={{
              width: "fit-content",
              position: "absolute",
              right: 2,
              bottom: 0,
            }}
          >
            <img
              src={story?.proImage}
              alt="User"
              style={{
                width: "25px",
                borderRadius: "10px",
                outline: "white solid 3px",
              }}
            />
          </div>
        </div>
      ))}
    </Box>
  );
};

export default Story;
