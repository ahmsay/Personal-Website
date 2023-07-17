import React from 'react'
import { Card, CardContent, Typography, Grid, Container } from '@mui/material'
import ModeIcon from '@mui/icons-material/Mode';
import MovieIcon from '@mui/icons-material/Movie';
import GamesIcon from '@mui/icons-material/Games';
import CodeIcon from '@mui/icons-material/Code';

const Hobbies = () => {
  const hobbiesCard = {
    borderWidth: 0,
    backgroundColor: '#010a26',
    color: '#fff'
  }
  const hobbiesStyle = {
    backgroundColor: '#010a26',
    color: '#fff',
    paddingTop: '42px',
    paddingBottom: '42px'
  }
  const hobbiesContent = {
    mainTitle: 'My Hobbies',
    hobbyList: [
      { icon: 'create', content: "Drawing is really an easy and fun activity. I always make the most score for my team when it comes to drawing in taboo game. I am terrible at painting so most of my drawings are charcoal. I also like to draw technical stuff like aircrafts or space ships." },
      { icon: 'movie', content: "Everybody likes watching movies but this is something more for me. Plot and soundtrack are two things I pay attention the most. I can't really tell my favorite movie since it is so hard to decide but I can tell that Hans Zimmer is my favorite composer." },
      { icon: 'games', content: "Despite I am not playing that much compared to before, I still play video games time to time. Assassin's Creed 2, Hollow Knight and RDR2 are my favorite games. I usually like open-world games with great story and soundtrack." },
      { icon: 'code', content: "Coding is not something I do only for work. I like to learn new technologies, concepts and challenge myself. I like both front-end and back-end and I have many interests like machine learning, design patterns, linux shell, devops and microservices." }
    ]
  }
  const { mainTitle, hobbyList } = hobbiesContent
  const hobbies = hobbyList.map((hobby, index) => {
    const contentAtLeft = index %2 === 0
    const marginLeft = contentAtLeft ? 18 : 0
    const marginRight = contentAtLeft ? 0 : 18
    const endOfItems = index === hobbyList.length - 1
    const iconStyle = {
      fontSize: 60,
      marginRight,
      marginLeft
    }
    const hobbyIconGrid = (
      <Grid item xs={3}>
        <Grid container justifyContent="center">
          { index === 0 ? <ModeIcon style={ iconStyle }/> : null }
          { index === 1 ? <MovieIcon style={ iconStyle }/> : null }
          { index === 2 ? <GamesIcon style={ iconStyle }/> : null }
          { index === 3 ? <CodeIcon style={ iconStyle }/> : null }
        </Grid>
      </Grid>
    )
    const hobbyContent = (
      <Grid item xs={9}>
        <Typography variant="body2">
          { hobby.content }
        </Typography>
      </Grid>
    )
    return (
      <div key={ index }>
        <Grid container alignItems="center">
          { contentAtLeft ? null : hobbyIconGrid }
          { hobbyContent }
          { contentAtLeft ? hobbyIconGrid : null }
        </Grid>
        { endOfItems ? null : <br/> }
      </div>
    )
  })
  return (
    <div style={ hobbiesStyle }>
      <Container maxWidth="sm">
        <Card style={ hobbiesCard } variant="outlined" align="justify">
          <CardContent>
            <Typography variant="h4" align="center">{ mainTitle }</Typography>
            <br/>
            { hobbies }
          </CardContent>
        </Card>
      </Container>
    </div>
  )
}

export default Hobbies
