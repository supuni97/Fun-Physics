import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function studentProfile() {
  return (
        <Grid container margin={2} justifyContent='center'>
            <Grid item xs={5} sx={{backgroundColor:'white', height:'40vh', borderRadius:'2%'}} margin={1}>
                <Typography variant='h6' padding={1}>Your Games</Typography>
            </Grid>
            <Grid item xs={5} sx={{backgroundColor:'white', height:'40vh', borderRadius:'2%'}} margin={1}>
                <Typography variant='h6' padding={1}>Active Hours</Typography>
            </Grid>
            <Grid item xs={5} sx={{backgroundColor:'white', height:'40vh', borderRadius:'2%'}} margin={1}>
                <Typography variant='h6' padding={1}>Your Badges</Typography>
            </Grid>
            <Grid item xs={5} sx={{backgroundColor:'white', height:'40vh', borderRadius:'2%'}} margin={1}>
                <Typography variant='h6' padding={1}>Learning Preferances</Typography>
            </Grid>
        </Grid>
  )
}
