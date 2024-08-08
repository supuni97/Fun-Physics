import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export const Game = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Welcome to the Game!</h2>
      <Button
        onClick={() => {
          alert("clicked");
          navigate('/leaderboard');
        }}
      >
        Leaderboad
      </Button>
    </div>
  );
};
