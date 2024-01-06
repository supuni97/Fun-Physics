import {
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

export default function studentProfile({ games, badges, preferences }) {
  return (
    <Grid container margin={2} justifyContent="center">
      <Grid
        item
        xs={5}
        sx={{ backgroundColor: "white", height: "40vh", borderRadius: "2%" }}
        margin={1}
      >
        <Typography variant="h6" padding={1}>
          Your Games
        </Typography>
        <ImageList sx={{ width: 300, height: 200 }} cols={3}>
          {games.map((game) => (
            <ImageListItem key={game.img}>
              <img
                srcSet={`${game.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${game.img}?w=164&h=164&fit=crop&auto=format`}
                alt={game.name}
                style={{ width: "100px", height: "100px", borderRadius: "2%" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid
        item
        xs={5}
        sx={{ backgroundColor: "white", height: "40vh", borderRadius: "2%" }}
        margin={1}
      >
        <Typography variant="h6" padding={1}>
          Active Hours
        </Typography>
      </Grid>
      <Grid
        item
        xs={5}
        sx={{ backgroundColor: "white", height: "40vh", borderRadius: "2%" }}
        margin={1}
      >
        <Typography variant="h6" padding={1}>
          Your Badges
        </Typography>
        <ImageList cols={4}>
          {badges.map((badge) => (
            <ImageListItem key={badge.img}>
              <img
                srcSet={`${badge.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${badge.img}?w=164&h=164&fit=crop&auto=format`}
                alt={badge.name}
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid
        item
        xs={5}
        sx={{ backgroundColor: "white", height: "40vh", borderRadius: "2%" }}
        margin={1}
      >
        <Typography variant="h6" padding={1}>
          Learning Preferances
        </Typography>
        <ul>
          {preferences.map((preference) => {
            return <li>preference</li>;
          })}
        </ul>
      </Grid>
    </Grid>
  );
}
