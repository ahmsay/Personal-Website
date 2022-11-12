import React from 'react'
import { Card, CardContent, Typography, Grid } from '@mui/material'

const Greetings = () => {
  const background = require('../images/background.jpg')
  const greetingsStyle = {
    height: window.innerHeight,
    backgroundImage: "url(" + background + ")",
    backgroundSize: 'cover'
  }
  const greetingsCard = {
    borderWidth: 0,
    backgroundColor: '#0000',
    color: '#fff'
  }
  return (
    <Grid style={ greetingsStyle } container justifyContent="center" alignItems="center">
      <Card variant="outlined" style={ greetingsCard }>
        <CardContent>
          <Typography variant="h3">
            Hello there
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Greetings
