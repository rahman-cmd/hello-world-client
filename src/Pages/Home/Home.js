import { Box } from "@mui/material";
import React from "react";
import Contacts from "../../Components/Contacts/Contacts";
import Navigation from "../../Components/Navigation/Navigation";
import NewPost from "../../Components/NewPost/NewPost";
import NewPostBox from "../../Components/NewPost/NewPostBox";
import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import Story from "../../Components/Story/Story";
import Requests from "../../Components/Request/Requests";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Box
        sx={{
          display: { xs: "block", lg: "grid" },
          marginTop: "20px",
          marginBottom: "20px",
          gridTemplateColumns: "repeat(4,1fr)",
          gridGap: "10px",
        }}
      >
        {/* Left Rail */}
        <Box
          sx={{
            position: "relative",
            display: { xs: "block", lg: "flex" },
            justifyContent: "end",
          }}
        >
          <div>
            <Navigation></Navigation>
          </div>
        </Box>
        {/* Main Body */}
        <div
          style={{
            gridColumn: "span 2",
            padding: "20px",
          }}
        >
          <Story></Story>
          <NewPost></NewPost>
          <NewPostBox></NewPostBox>
          <Posts></Posts>
        </div>
        {/* Right Rail */}
        <div
          style={{
            padding: "20px",
            position: "relative",
          }}
        >
          <Requests></Requests>
          <Contacts></Contacts>
        </div>
      </Box>
    </>
  );
};

export default Home;
