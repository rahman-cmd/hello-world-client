import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import googleIcon from "./media/google.png";

const Login = () => {
  const handleLogin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // loginUser(email, password, location, history);
  };

  const handleRegister = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // registerUser(name, email, password, location, history);
  };

  const [isNew, setIsNew] = useState(false);
  const newSwitch = () => {
    setIsNew();
  };
  return (
    <Box
      sx={{
        display: { xs: "block", lg: "grid" },
        gridTemplateColumns: "repeat(2,1fr)",
        padding: "50px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <lottie-player
          src="https://assets10.lottiefiles.com/private_files/lf30_uk8fs7hs.json"
          background="transparent"
          speed="1"
          style={{ height: "300px", width: "300px" }}
          loop
          autoplay
        ></lottie-player>
      </Box>

      {isNew ? (
        // New User
        <Box>
          <Typography variant="h5" color={"text.secondary"}>
            Please Register
          </Typography>
          <Box sx={{ paddingTop: "10px" }}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              margin="normal"
              autoComplete="off"
              sx={{ width: { xs: "100%", lg: "70%" } }}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              margin="normal"
              autoComplete="off"
              sx={{ width: { xs: "100%", lg: "70%" } }}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              autoComplete="off"
              sx={{ width: { xs: "100%", lg: "70%" } }}
            />

            <Box
              sx={{
                display: {
                  xs: "flex",
                  lg: "block",
                  justifyContent: "end",
                  marginTop: "10px",
                },
              }}
            >
              <Button
                sx={{
                  background: "#eff4fc",
                  borderRadius: "5px",
                  margin: "5px",
                }}
                onClick={handleRegister}
              >
                Register
              </Button>
            </Box>
          </Box>
          <Typography
            variant="body2"
            color={"text.secondary"}
            sx={{
              marginTop: "10px",
              textAlign: { xs: "center", lg: "left" },
              marginLeft: { lg: "20%" },
            }}
          >
            Already have an account?{" "}
            <span
              style={{ color: "#1877f2", cursor: "pointer" }}
              onClick={newSwitch}
            >
              login here
            </span>
          </Typography>
        </Box>
      ) : (
        //   Old User
        <Box>
          <Typography variant="h5" color={"text.secondary"}>
            Please Login to Continue
          </Typography>
          <Box sx={{ paddingTop: "10px" }}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              margin="normal"
              autoComplete="off"
              sx={{ width: { xs: "100%", lg: "70%" } }}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              autoComplete="off"
              sx={{ width: { xs: "100%", lg: "70%" } }}
            />

            <Box
              sx={{
                display: {
                  xs: "flex",
                  lg: "block",
                  justifyContent: "end",
                  marginTop: "10px",
                },
              }}
            >
              <Button sx={{ borderRadius: "5px", margin: "5px" }}>
                <img
                  src={googleIcon}
                  alt="Google Icon"
                  style={{ width: "30px" }}
                />
              </Button>
              <Button
                sx={{
                  background: "#eff4fc",
                  borderRadius: "5px",
                  margin: "5px",
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Box>
          </Box>
          <Typography
            variant="body2"
            color={"text.secondary"}
            sx={{
              marginTop: "10px",
              textAlign: { xs: "center", lg: "left" },
              marginLeft: { lg: "20%" },
            }}
          >
            Don't have an account?{" "}
            <span
              style={{ color: "#1877f2", cursor: "pointer" }}
              onClick={setIsNew}
            >
              Create here
            </span>
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Login;
