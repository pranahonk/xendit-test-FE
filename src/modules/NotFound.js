import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function NotFound() {
  return (
    <Container fixed>
      <Typography variant="h3" gutterBottom component="div" style={{textAlign: 'center', height: '100vh', marginTop: '15px'}}>
        Whoops! We did not find what
        you're looking for :(
      </Typography>
    </Container>
  
  )
}

export default NotFound
