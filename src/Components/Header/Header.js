import { Box, Button, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          padding: "15px",
          paddingLeft: "50px",
          paddingRight: "50px",
          backgroundColor: "white",
          display: "grid",
          gridTemplateColumns: { lg: "repeat(3,1fr)" },
          gridGap: 5,
          boxShadow: "1px 1px 5px #ccc",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center" },
          }}
        >
          <Box
            sx={{ background: "#eff4fc", padding: "5px", borderRadius: "15px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chart-bubble"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#1877f2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="6" cy="16" r="3" />
              <circle cx="16" cy="19" r="2" />
              <circle cx="14.5" cy="7.5" r="4.5" />
            </svg>
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              color: "text.secondary",
              marginLeft: "10px",
            }}
          >
            HELLO WORLD
          </Typography>
        </Box>
        <Box
          sx={{
            gridColumn: "span 2",
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <input
            type="text"
            id="search"
            placeholder="Search"
            autoComplete="off"
            style={{
              width: "300px",
              marginRight: "10px",
              outlineColor: "#1877f2",
              border: "none",
              padding: "12px",
              borderRadius: "15px",
              backgroundColor: "#eff4fc",
            }}
          />
          <Button>
            <SearchIcon />
          </Button>

          <Button
            variant="contained"
            disableElevation
            sx={{
              background: "#1877f2",
              padding: "7px",
              paddingRight: { lg: "15px" },
              paddingLeft: { lg: "15px" },
              marginRight: "20px",
              marginLeft: "10px",
              borderRadius: "15px",
            }}
          >
            <AddCircleOutlineIcon />
            <Typography
              sx={{
                display: { xs: "none", sm: "none", lg: "block" },
                marginLeft: "10px",
              }}
            >
              Create
            </Typography>
          </Button>
          <img
            src="https://hello-p.netlify.app/static/media/venti.bca7c018ca19eab4b1df.png"
            alt=""
            style={{ borderRadius: "15px", width: "45px" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Header;
