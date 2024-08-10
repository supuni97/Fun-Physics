import React from "react";
import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";

export const ProfileCard = ({ data }) => {
  return (
    <Card
      sx={{
        maxWidth: 600,
        display: "flex",
        margin: "auto",
        padding: 3,
        boxShadow: 6,
        borderRadius: 2,
        background: "linear-gradient(135deg, #f0f4f8, #d1e0e0)",
      }}
    >
      <Grid container spacing={3}>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 2,
          }}
        >
          <Avatar
            src="/img/avatar.png"
            sx={{
              width: 120,
              height: 120,
              border: "5px solid #ff6f61",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#333",
                mb: 1,
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              Name: {data.displayName || 'Your Name'}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#555",
                mb: 1,
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              Email: {data.email || 'your.email@example.com'}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#777",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              School: {data.school || 'Your School'}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};
