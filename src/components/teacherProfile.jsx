import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function teacherProfile({ courseData, gameData }) {
  return (
    <Stack height="100vh">
      <Box
        height="40vh"
        marginTop={3}
        sx={{ backgroundColor: "white", borderRadius: "2%", width: "80%" }}
      >
        <Typography variant="h6" p={1}>
          My Games
        </Typography>
      </Box>
      <Box
        height="40vh"
        marginTop={2}
        sx={{ backgroundColor: "white", borderRadius: "2%", width: "80%" }}
      >
        <Typography variant="h6" p={1}>
          My Students
        </Typography>
      </Box>
    </Stack>
  );
}
