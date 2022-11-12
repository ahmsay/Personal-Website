import React from 'react'
import { IconButton, Grid, Box, Container } from '@mui/material'

const Footer = () => {
  const iconButton = {
    color: '#fff'
  }
  const image = {
    width: 30,
    height: 30,
    pointerEvents: 'none'
  }
  const footer = {
    backgroundColor: '#010a26',
    color: '#fff',
    paddingTop: '42px',
    paddingBottom: '42px'
  }
  const footerContent = {
    accounts: [
      { name: 'GitHub', link: 'https://github.com/ahmsay', icon: 'github.png' },
      { name: 'LinkedIn', link: 'https://tr.linkedin.com/in/ahmet-say-769485120', icon: 'linkedin.png' },
      { name: 'HackerRank', link: 'https://www.hackerrank.com/ahmsay', icon: 'hackerrank.png' },
      { name: 'Instagram', link: 'https://www.instagram.com/ahmsay26/', icon: 'instagram.png' }
    ]
  }
  const icons = footerContent.accounts.map((account, index) => {
    return (
      <Grid item md={3} key={ index }>
        <Box display="flex" justifyContent="center">
          <IconButton style={ iconButton } onClick={ () => { window.open(account.link, "_blank") } }>
            <img src={require('../images/' + account.icon)} alt={ account.name } style={ image }/>
          </IconButton>
        </Box>
      </Grid>
    )
  })
  return (
    <div style={ footer }>
      <Container maxWidth="sm">
        <Grid container justifyContent="center">
          { icons }
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
