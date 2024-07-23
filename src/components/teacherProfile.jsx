import {
  Box,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import data from '../data/data.json';

export default function TeacherProfile({ courseData, gameData }) {
  const [badges, setBadges] = useState([]);

  const studentList = [
    {name: 'Billy Butcher'},
    {name: 'Hughie campbell'},
    {name: 'Marvin Milk'},
    {name: 'Frenchie'}
  ]

  const onClick = (e) => {
    console.log('clicked');
  };

  useEffect(() => {
    const badgeData = data.Badges;
    setBadges(() => badgeData);
    console.log(badges);
  }, []);

  return (
    <Stack height='100vh'>
      <Box
        height='40vh'
        marginTop={3}
        sx={{ backgroundColor: 'white', borderRadius: '2%', width: '80%' }}
        onClick={onClick}
      >
        <Typography variant='h5' p={1}>
          My Games
        </Typography>
        <ImageList
          sx={{
            width: 500,
            height: 200,
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          cols={5}
        >
          {badges.map((badge) => (
            <ImageListItem key={badge.name}>
              <img
                srcSet={`${badge.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${badge.img}?w=164&h=164&fit=crop&auto=format`}
                alt={badge.name}
                style={{ width: '80px', height: '80px', borderRadius: '2%' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box
        height='40vh'
        marginTop={2}
        sx={{ backgroundColor: 'white', borderRadius: '2%', width: '80%' }}
      >
        <Typography variant='h5' p={1}>
          My Students
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          {studentList.map((student) => {
            return (
              <ListItem key={student.name} sx={{ display: 'list-item' }}>
                <button
                  style={{
                    color: 'black',
                    backgroundColor: 'white',
                    border: 'none',
                  }}
                >
                  {student.name}
                </button>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Stack>
  );
}
