import React from 'react'
import { CardActions, Button, Card, CardContent, Typography, Grid, Container, Box } from '@mui/material'

const Projects = () => {
  const button = {
    color: '#010a26'
  }
  const projects = {
    paddingTop: '42px',
    paddingBottom: '42px'
  }
  const projectCard = {
    borderWidth: 0,
    height: '100%',
    color: '#010a26'
  }
  const mainCard = {
    borderWidth: 0,
    padding: 7,
    color: '#010a26'
  }
  const projectsContent = {
    mainTitle: 'My Projects',
    projectList: [
      {
        title: 'Solidvessel',
        detail: "This is an online shopping application project built with Spring Boot and microservices architecture. It has five microservices, a message queue and caching mechanism. The application can be run with Docker and Kubernetes, and can be deployed on cloud with a single click.",
        link: 'https://github.com/ahmsay/Solidvessel'
      },
      {
        title: 'Churnify',
        detail: "This is a churn analysis automation tool. Predicting which customer is going to leave the company is known as 'Churn Analysis'. So the aim is to predict which customer is going to leave the company and take precautions about it. The motivation is to automatize this process.",
        link: 'https://churn-2537f.firebaseapp.com/'
      },
      {
        title: 'Star Wars Quick Guide',
        detail: "This mobile application provides information about movies, characters, planets, species, starships and vehicles in Star Wars expanded universe, also known as the legend universe. It can work offline as well. It's built with Xamarin Forms and also compatible with android and iOS.",
        link: 'https://github.com/ahmsay/Star-Wars-Quick-Guide'
      },
    
      {
        title: 'Number Guess',
        detail: "This simple application provides you an interface to draw a number. Then if you click 'Predict', it sends the number you draw to a pre-trained machine learning model to predict which number it is. The model is a convolutional neural network which runs in a python flask app.",
        link: 'https://numberguess.ahmetsay.com'
      }
    ]
  }
  const { mainTitle, projectList } = projectsContent
  const projectListProcessed = projectList.map((project, index) => {
    return (
      <Grid item xs={12} sm={6} md={3} key={ index }>
        <Card align="justify" variant="outlined" style={ projectCard }>
          <CardContent>
            <Typography variant="subtitle1">
              <Box fontWeight="fontWeightMedium">{ project.title }</Box>
            </Typography>
            <Typography variant="body2">
              { project.detail }
            </Typography>
          </CardContent>
          <CardActions>
            <Button style={ button } onClick={ () => { window.open( project.link, "_blank") } } size="small">More</Button>
          </CardActions>
        </Card>
      </Grid>
    )
  })
  return (
    <Container fixed style={ projects }>
      <Card style={ mainCard } variant="outlined">
        <CardContent>
          <Typography variant="h4" align="center">
            { mainTitle }
          </Typography><br/>
          <Grid container spacing={4}>
            { projectListProcessed }
          </Grid>
        </CardContent>
      </Card>
      <Box display="flex" justifyContent="center">
        <Button style={ button } onClick={ () => { window.open( "https://github.com/ahmsay?tab=repositories", "_blank") } }>
          See Other Projects
        </Button>
      </Box>
    </Container>
  )
}

export default Projects
