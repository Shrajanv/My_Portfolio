import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Grid, Button, IconButton, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const FigmaWorksPage = () => {
  const figmaProjects = [
    {
      name: 'Talktrial',
      description: 'A user-friendly interface for chat application design and testing.',
      figmaLink: 'https://www.figma.com/design/xnmfwpkVpFfLk8hZQVelaC/Talk-trial?node-id=0-1&t=7TBEl6EJfeyHnkzZ-1',
      image: '/Figmaimg/Talkt.webp',
    },
    {
      name: 'Marvel Movies List',
      description: 'A catalog design showcasing Marvel movies with detailed information.',
      figmaLink: 'https://www.figma.com/design/Bu1O303GsdZOSaFrfw1gx8/Marvel_movie_watchlist?node-id=0-1&t=l4GrEIR4OdDtcNN5-1',
      image: '/Figmaimg/Marvel.webp',
    },
    {
      name: 'Fithouse',
      description: 'A fitness tracking application UI with goal management features.',
      figmaLink: 'https://www.figma.com/design/zNUyv1V0igEuSg4DngjgHT/basics?node-id=10-2&t=O7LqQldqfWyJPK70-1',
      image: '/Figmaimg/fithouse.webp',
    },
  ];

  const handleBackClick = () => {
    window.history.back(); // Go back to the previous page
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 5, paddingX: { xs: 2, sm: 4 } }}>
      <IconButton onClick={handleBackClick} sx={{ position: 'absolute', top: 20, left: 20, color: 'white' }}>
        <ArrowBackIcon />
      </IconButton>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 5 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            color: 'white',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
            fontSize: { xs: '1.8rem', sm: '2.5rem' }, // Adjust font size for smaller screens
            marginRight: 1,
          }}
        >
          My Figma Works
        </Typography>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '24px',
            height: '30px',
            gap: '2px',
          }}
        >
          <div style={{ width: '10px', height: '10px', backgroundColor: 'white', borderRadius: '50%' }} />
          <div style={{ width: '10px', height: '10px', backgroundColor: 'white', borderRadius: '50%' }} />
          <div style={{ width: '10px', height: '10px', backgroundColor: 'white', borderRadius: '50%' }} />
          <div style={{ width: '10px', height: '10px', backgroundColor: 'white', borderRadius: '50%' }} />
          <div style={{ width: '10px', height: '10px', backgroundColor: 'white', borderRadius: '50%' }} />
        </div>
      </Box>

      <Grid container spacing={4}>
        {figmaProjects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: '#f4eeff',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
                },
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <CardMedia component="img" alt={project.name} height="140" image={project.image} />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2, fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.figmaLink}
                  target="_blank"
                  sx={{ width: '100%', marginTop: 2, fontSize: { xs: '0.9rem', sm: '1rem' } }}
                >
                  View on Figma
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FigmaWorksPage;
