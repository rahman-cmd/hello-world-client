import {
  Button,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Navigation = () => {
  return (
    <>
      {/* Large Device */}
      <TableContainer
        sx={{
          padding: "25px",
          backgroundColor: "white",
          boxShadow: "1px 1px 5px #ccc",
          borderRadius: "15px",
          display: { xs: "none", lg: "block" },
        }}
      >
        <Table>
          <TableBody>
            <TableRow sx={{ display: "flex", alignItems: "center" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-home"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#597e8d"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
              <Typography
                variant="h6"
                color={"text.secondary"}
                sx={{ marginLeft: "10px" }}
              >
                Home
              </Typography>
            </TableRow>
            <hr style={{ border: "1px solid #eee" }} />
            <TableRow sx={{ display: "flex", alignItems: "center" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-users"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#597e8d"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
              <Typography
                variant="h6"
                color={"text.secondary"}
                sx={{ marginLeft: "10px" }}
              >
                People
              </Typography>
            </TableRow>
            <hr style={{ border: "1px solid #eee" }} />
            <TableRow sx={{ display: "flex", alignItems: "center" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-photo"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#597e8d"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="15" y1="8" x2="15.01" y2="8" />
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
                <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
              </svg>
              <Typography
                variant="h6"
                color={"text.secondary"}
                sx={{ marginLeft: "10px" }}
              >
                Photos
              </Typography>
            </TableRow>
            <hr style={{ border: "1px solid #eee" }} />
            <TableRow sx={{ display: "flex", alignItems: "center" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-user"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#597e8d"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
              <Typography
                variant="h6"
                color={"text.secondary"}
                sx={{ marginLeft: "10px" }}
              >
                Profile
              </Typography>
            </TableRow>
            <hr style={{ border: "1px solid #eee" }} />
            <TableRow sx={{ display: "flex", alignItems: "center" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-settings"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#597e8d"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <Typography
                variant="h6"
                color={"text.secondary"}
                sx={{ marginLeft: "10px" }}
              >
                Settings
              </Typography>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Small Device */}
      <Box
        sx={{ display: { xs: "flex", lg: "none" }, justifyContent: "center" }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            padding: "10px",
            position: "fixed",
            bottom: "10px",
            borderRadius: "15px",
          }}
        >
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-home"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#597e8d"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="5 12 3 12 12 3 21 12 19 12" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
          </Button>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-users"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#597e8d"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="9" cy="7" r="4" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
          </Button>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-photo"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#597e8d"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="15" y1="8" x2="15.01" y2="8" />
              <rect x="4" y="4" width="16" height="16" rx="3" />
              <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
              <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
            </svg>
          </Button>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-user"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#597e8d"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="7" r="4" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
          </Button>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-settings"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#597e8d"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Navigation;
