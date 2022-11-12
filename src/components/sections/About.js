import React from 'react'
import { Card, CardContent, Typography, Box, Container } from '@mui/material'

const About = () => {
  const mainCard = {
    borderWidth: 0,
    padding: 7,
    color: '#010a26'
  }
  const about = {
    paddingTop: '84px',
    paddingBottom: '42px'
  }
  const aboutContent = {
    mainTitle: 'Who am I ?',
    mainContent: 'My name is Ahmet. I was born in Eskişehir. I graduated from Anadolu University, department of computer engineering and living in Ankara, Turkey. I am working at TÜBİTAK (Scientific and Technological Research Council of Turkey) as a software developer. I am interested in devops and microservices architecture.',
    whatElse: {
      title: 'What Else ?',
      content: "Well, I like go kart, watching movies, Formula 1, tv series and documentaries, listening eurobeat, spending time on 9GAG, playing video games, table football, billiard, drawing, drinking tea, cold weather and cities with beautiful, historical architecture. What I don't like is jazz, summer, coffee (not kidding) and applications with too many ads. I am really interested in space related topics and wild nature. Tiger is my favorite animal. Besides work, I also code some stuff to learn and improve myself."
    },
    developerMessage: {
      title: 'For Those Who Want to be a Software Developer',
      content: "There are tons of materials on internet that can guide you, help you to solve the problem you stuck and improve your skills. All you need is a desire to learn. I know this sounds like a cliche but it is the truth. So if you have any interest about software development, don't wait anymore and just start searching."
    }
  }
  const { mainTitle, mainContent, whatElse, developerMessage } = aboutContent
  return (
    <Container maxWidth="md" style={ about }>
      <Card style={ mainCard } variant="outlined" align="center">
        <CardContent>
          <Typography variant="h4">{ mainTitle }</Typography>
          <br/>
          <Typography variant="body2">{ mainContent }</Typography>
          <br/>
          <Typography variant="subtitle1">
            <Box fontWeight="fontWeightMedium">{ whatElse.title }</Box>
          </Typography>
          <Typography variant="body2">{ whatElse.content }</Typography>
          <br/>
          <Typography variant="subtitle1">
            <Box fontWeight="fontWeightMedium">{ developerMessage.title }</Box>
          </Typography>
          <Typography variant="body2">{ developerMessage.content }</Typography>
        </CardContent>
      </Card>
    </Container>
  )
}

export default About
