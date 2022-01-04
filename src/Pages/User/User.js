import { Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Contacts from "../../Components/Contacts/Contacts";
import Header from "../../Components/Header/Header";
import Navigation from "../../Components/Navigation/Navigation";
import Requests from "../../Components/Request/Requests";
import { useParams } from "react-router-dom";
import loadingImg from "../../Components/Media/loadingImg/loading.gif";

import useAuth from "../../Components/Hooks/useAuth.js";

const User = () => {
  let { id } = useParams();
  const { user } = useAuth();

  // load a single user
  const [singleUser, setSingleUser] = useState({});
  useEffect(() => {
    fetch(`https://enigmatic-reef-50171.herokuapp.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleUser(data));
  }, [id]);

  const [userPostData, setUserPostData] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-reef-50171.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => data.sort((a, b) => b.time - a.time))
      .then((data) => data.filter((x) => x.UID === id))
      .then((sortedData) => setUserPostData(sortedData));
  }, [id]);

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

  // delete
  const handleDelete = (id) => {
    const url = `https://enigmatic-reef-50171.herokuapp.com/posts/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const confirm = window.confirm("Do you Want to Delete?");
        if (confirm) {
          if (data.deletedCount > 0) {
            document.location.reload();
          }
        }
      });
  };

  return (
    <div>
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
            <Box
              sx={{
                background: "white",
                borderRadius: "15px",
                padding: "20px",
                marginBottom: "50px",
              }}
            >
              <Box
                sx={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
              >
                <Box sx={{ gridColumn: "span 2", padding: "20px" }}>
                  <Typography variant="h5">
                    {singleUser?.displayName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginTop: "10px" }}
                  >
                    Welcome to my profile
                  </Typography>
                  <Box
                    sx={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="h6">500</Typography>
                      <Typography variant="overline">Likes</Typography>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="h6">100</Typography>
                      <Typography variant="overline">Followers</Typography>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography variant="h6">70</Typography>
                      <Typography variant="overline">Follows</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <img
                    src={singleUser?.photoURL}
                    alt="name"
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "15px",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Repeat Start */}

            {userPostData.length === 0 ? (
              <>""</>
            ) : (
              <>
                {userPostData.map((postData) => (
                  <Box sx={{ marginBottom: "50px" }} key={postData._id}>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "repeat(5,1fr)",
                          lg: "repeat(7,1fr)",
                        },
                        padding: "10px",
                        marginBottom: "5px",
                        background: "white",
                        borderRadius: "15px",
                      }}
                    >
                      <Box>
                        <img
                          src={postData?.proImage}
                          alt="Kakku"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50px",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          gridColumn: { xs: "span 3", lg: "span 5" },
                          paddingLeft: { xs: "10px", lg: "0" },
                        }}
                      >
                        <Typography>{postData?.displayName}</Typography>
                        <Typography variant="caption">
                          {handleDate(postData?.time)}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", justifyContent: "end" }}>
                        {user.email === singleUser.email ? (
                          <IconButton
                            onClick={() => {
                              handleDelete(postData?._id);
                            }}
                            aria-label="settings"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-trash"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="#ff2825"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <line x1="4" y1="7" x2="20" y2="7" />
                              <line x1="10" y1="11" x2="10" y2="17" />
                              <line x1="14" y1="11" x2="14" y2="17" />
                              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>
                          </IconButton>
                        ) : (
                          ""
                        )}
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        background: "white",
                        padding: "20px",
                        borderRadius: "15px",
                      }}
                    >
                      <Typography variant="body2">
                        {postData?.imgCaption
                          ? postData?.imgCaption
                          : postData?.postData}
                      </Typography>
                      <img
                        src={postData?.postImage}
                        alt=""
                        style={{
                          width: "100%",
                          marginTop: "20px",
                          borderRadius: "10px",
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </>
            )}
            {userPostData.map((postData) => (
              <Box sx={{ marginBottom: "50px" }} key={postData._id}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "repeat(5,1fr)",
                      lg: "repeat(7,1fr)",
                    },
                    padding: "10px",
                    marginBottom: "5px",
                    background: "white",
                    borderRadius: "15px",
                  }}
                >
                  <Box>
                    <img
                      src={postData?.proImage}
                      alt="Kakku"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      gridColumn: { xs: "span 3", lg: "span 5" },
                      paddingLeft: { xs: "10px", lg: "0" },
                    }}
                  >
                    <Typography>{postData?.displayName}</Typography>
                    <Typography variant="caption">
                      {handleDate(postData?.time)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "end" }}>
                    {user.email === singleUser.email ? (
                      <IconButton
                        onClick={() => {
                          handleDelete(postData?._id);
                        }}
                        aria-label="settings"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon icon-tabler icon-tabler-trash"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#ff2825"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <line x1="4" y1="7" x2="20" y2="7" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11" x2="14" y2="17" />
                          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                      </IconButton>
                    ) : (
                      ""
                    )}
                  </Box>
                </Box>

                <Box
                  sx={{
                    background: "white",
                    padding: "20px",
                    borderRadius: "15px",
                  }}
                >
                  <Typography variant="body2">
                    {postData?.imgCaption
                      ? postData?.imgCaption
                      : postData?.postData}
                  </Typography>
                  <img
                    src={postData?.postImage}
                    alt=""
                    style={{
                      width: "100%",
                      marginTop: "20px",
                      borderRadius: "10px",
                    }}
                  />
                </Box>
              </Box>
            ))}
            {/* Repeat End */}
          </div>

          {/* Right Rail */}
          <div
            style={{
              padding: "20px",
              position: "relative",
            }}
          >
            <Contacts></Contacts>
          </div>
        </Box>
      </>
    </div>
  );
};

export default User;
