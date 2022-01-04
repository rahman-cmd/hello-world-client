import {
  Box,
  Button,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Header = () => {
  const { logout, singleUser } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          position: "sticky",
          top: "0",
          zIndex: "1",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center" },
          }}
        >
          <Link to="/">
            <Box
              sx={{
                background: "#eff4fc",
                padding: "5px",
                borderRadius: "15px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chart-bubble"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#1877f2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="6" cy="16" r="3" />
                <circle cx="16" cy="19" r="2" />
                <circle cx="14.5" cy="7.5" r="4.5" />
              </svg>
            </Box>
          </Link>
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
          <Box>
            <img
              src={singleUser?.photoURL}
              alt=""
              style={{ borderRadius: "15px", width: "45px", cursor: "pointer" }}
              onClick={handleClick}
            />
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem
                onClick={() => {
                  logout();
                }}
              >
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
