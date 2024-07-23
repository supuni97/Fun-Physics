import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Stack,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import StudentProfile from "./studentProfile";
import TeacherProfile from "./teacherProfile";
import data from "../data/data.json";

const defaultTheme = createTheme();

export const ProfileCard = ({ profileType }) => {
  const profile = {
    type: "teacher",
    name: "Anne Bonny",
    data1: "Learning front-end is damn hard",
    data2:
      "Hate this project. Hate research. Hate every thing in that university",
    country: "Sri Lanka",
    email: "annie@gmail.com",
  };

  const games = data.Gallery;
  const badges = data.Badges;
  const preferences = data.Preferences;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Stack direction='row' spacing={1} sx={{ backgroundColor: '#ecedeb' }}>
        <Box
          className='profileSide'
          sx={{ height: '100vh', width: '40%' }}
          justifyContent='center'
        >
          <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justify='center'
            style={{ minHeight: '80vh' }}
            marginTop={3}
          >
            <Card
              sx={{
                width: 400,
                maxWidth: '100%',
                boxShadow: 'lg',
                height: '83vh',
                backgroundColor: '#158ced',
                color: '#e9fae1',
              }}
            >
              <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                <img
                  src='img/userProfile.jpg'
                  style={{ height: '200', borderRadius: '50%' }}
                  alt='Profile'
                />
                <Typography
                  level='title-lg'
                  variant='h4'
                  sx={{ padding: 2, color: '#bfd6b4' }}
                >
                  {profile.name}
                </Typography>
                <Typography level='body-sm' fontSize={12} sx={{ padding: 1 }}>
                  {profile.data1}
                </Typography>
                <Typography level='body-sm' fontSize={12} sx={{ padding: 1 }}>
                  {profile.data2}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 2,
                    mt: 2,
                  }}
                >
                  <Box justifyContent='start'>
                    <Typography variant='h5' sx={{ color: '#bfd6b4' }}>
                      User Information
                    </Typography>
                    <List marker='User Information'>
                      <ListItem>
                        <Typography fontSize={12} variant='body1'>
                          Email - {profile.email}
                        </Typography>
                      </ListItem>
                      <ListItem variant='p'>
                        <Typography fontSize={12} variant='body1'>
                          Country - {profile.country}
                        </Typography>
                      </ListItem>
                    </List>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Box>
        <Box sx={{ height: '100vh', width: '65%' }}>
          {profile.type === 'student' ? (
            <StudentProfile
              games={games}
              badges={badges}
              preferences={preferences}
            />
          ) : (
            <TeacherProfile />
          )}
        </Box>
      </Stack>
    </ThemeProvider>
  );
};
