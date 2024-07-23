import {
  Button,
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

export default function studentProfile({ games, badges, preferences }) {
  return (
    <Grid container margin={2} justifyContent='center'>
      <Grid
        item
        xs={5}
        sx={{ backgroundColor: 'white', height: '40vh', borderRadius: '2%' }}
        margin={1}
      >
        <Typography variant='h5' padding={1}>
          Your Games
        </Typography>
        <ImageList
          sx={{
            width: 300,
            height: 200,
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          cols={3}
        >
          {badges.map((badge) => (
            <ImageListItem key={badge.img}>
              <Button href={`/games/${badge.name}`}>
                <img
                  srcSet={`${badge.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${badge.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={badge.name}
                  style={{ width: '80px', height: '80px', borderRadius: '2%' }}
                />
              </Button>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid
        item
        xs={5}
        sx={{ backgroundColor: 'white', height: '40vh', borderRadius: '2%' }}
        margin={1}
      >
        <Typography variant='h5' padding={1}>
          Active Hours
        </Typography>
      </Grid>
      <Grid
        item
        xs={5}
        sx={{ backgroundColor: 'white', height: '40vh', borderRadius: '2%' }}
        margin={1}
      >
        <Typography variant='h5' padding={1}>
          Your Badges
        </Typography>
        <ImageList
          cols={4}
          sx={{
            width: 300,
            height: 200,
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {badges.map((badge) => (
            <ImageListItem key={badge.img}>
              <Tooltip
                title={<p style={{ color: 'lightblue', height:'8px', width:'auto' }}>{badge.name}</p>}
                enterDelay={300}
                leaveDelay={100}
              >
                <img
                  srcSet={`${badge.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${badge.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={badge.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    padding: '2%',
                  }}
                />
              </Tooltip>
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid
        item
        xs={5}
        sx={{ backgroundColor: 'white', height: '40vh', borderRadius: '2%' }}
        margin={1}
      >
        <Typography variant='h5' padding={1}>
          Learning Preferances
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          {preferences.map((preference) => {
            return (
              <ListItem key={preference} sx={{ display: 'list-item' }}>
                <button
                  style={{
                    color: 'black',
                    backgroundColor: 'white',
                    border: 'none',
                  }}
                >
                  {preference}
                </button>
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
}
