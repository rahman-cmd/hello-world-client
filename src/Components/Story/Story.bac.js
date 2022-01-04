import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import "./Story.css";
import defaultStory from "./Media/default.jpg";
import { styled } from "@mui/material/styles";

const Story = () => {
  const stories = [
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/3e/e6/d5/3ee6d5fff635d4e68222614eba8bfda6.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/e1/85/b5/e185b59733466431da3ea1e068afe5c3.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/b4/65/d0/b465d0bfe0614448ed4671620c086bc1.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/ce/4d/62/ce4d627c4833295fa6495711aa2d81ec.png",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/25/d1/d0/25d1d084cf793727fbb572fdee082087.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/ab/1c/24/ab1c24275f14fe69a4ab5e87330f6846.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/81/18/b3/8118b30351f4930594a45f5555b4c1b3.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/5a/e5/c8/5ae5c82931566790bc394a7089124d47.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/11/bf/2e/11bf2ed289e0f2d79559914f3e20e9da.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/564x/f9/f6/5f/f9f65f33bf40fe6ae0c6ea867339015e.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/3e/e6/d5/3ee6d5fff635d4e68222614eba8bfda6.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/e1/85/b5/e185b59733466431da3ea1e068afe5c3.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/b4/65/d0/b465d0bfe0614448ed4671620c086bc1.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/ce/4d/62/ce4d627c4833295fa6495711aa2d81ec.png",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/25/d1/d0/25d1d084cf793727fbb572fdee082087.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/ab/1c/24/ab1c24275f14fe69a4ab5e87330f6846.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/81/18/b3/8118b30351f4930594a45f5555b4c1b3.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/5a/e5/c8/5ae5c82931566790bc394a7089124d47.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/originals/11/bf/2e/11bf2ed289e0f2d79559914f3e20e9da.jpg",
    },
    {
      avatar:
        "https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png",
      link: "https://i.pinimg.com/564x/f9/f6/5f/f9f65f33bf40fe6ae0c6ea867339015e.jpg",
    },
  ];

  const [storyImage, setStoryImage] = useState(null);
  console.log(storyImage);

  const Input = styled("input")({
    display: "none",
  });

  window.onload = function () {
    const slider = document.querySelector(".storyContainer");
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });
  };

  return (
    <Box
      className="storyContainer"
      sx={{
        padding: "15px",
        display: "flex",
        overflow: "scroll",
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
          <label htmlFor="image-in">
            <Input
              accept="image/*"
              id="image-in"
              type="file"
              onChange={(e) => {
                setStoryImage(e.target.files[0]);
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
      {stories.map((story) => (
        <div style={{ position: "relative" }}>
          <img
            src={story.link}
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
              src={story.avatar}
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
