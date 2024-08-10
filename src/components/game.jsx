import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Board from "./board";
import { ProfileCard } from "./profileCard";
import { getUserData } from "../API/userDetailsApi";

export const Game = ({ idToken, email }) => {
  const [result, setResult] = useState({});
  const fetchData = async () => {
    const response = await getUserData(idToken, email);
    setResult(response.data.data);
    console.log(response.data.data);
  };
  useEffect(() => {
    fetchData();
    console.log(result);
  }, [idToken]);

  return (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <div style={{ flex: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50vw",
            height: "50vh",
            backgroundColor: "#fffff", // Optional: light background color
          }}
        >
          <ProfileCard data={result} />
        </Box>
      </div>
      <div style={{ flex: 1 }}>
      <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "50vw",
            height: "75vh",
            backgroundColor: "#fffff", // Optional: light background color
          }}
        >
          <Board idToken={idToken} />
        </Box>
        
      </div>
    </div>
  );
};
