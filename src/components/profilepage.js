import React from 'react';
import { Avatar, Button, Typography, Container, Grid, Box, Paper, IconButton } from '@mui/material';
import ShrajanC from './shrajanC.jpg';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ProfilePage = () => {
  return (
    <Container
      maxWidth="md" // Adjust container width for responsiveness
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: 3,
      }}
    >
      {/* Profile Section with Light Gradient Background */}
      <Paper
        elevation={3}
        sx={{
          padding: { xs: 2, sm: 4 }, // Adjust padding for smaller screens
          textAlign: 'center',
          marginBottom: 4,
          width: '100%',
          background: 'linear-gradient(135deg, #f3e5f5, #e1bee7)',
          borderRadius: '15px',
          transition: 'transform 0.3s, box-shadow 0.3s',
          "&:hover": {
            transform: 'scale(1.05)',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        <Avatar
          src={ShrajanC}
          alt="Shrajan"
          sx={{ width: { xs: 80, sm: 120 }, height: { xs: 80, sm: 120 }, margin: '0 auto' }} // Adjust avatar size
        />
        <Typography variant="h5" sx={{ marginTop: 2, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
          Shrajan V
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 2 }}>
          <IconButton href="mailto:shrajanpoojary88@gmail.com" color="primary" sx={{ '&:hover': { color: '#0073b1' } }}>
            <EmailIcon fontSize="large" />
          </IconButton>
          <IconButton href="tel:+918951106911" color="primary" sx={{ '&:hover': { color: '#0073b1' } }}>
            <PhoneIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/shrajan-v-8b4171251/"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            sx={{ '&:hover': { color: '#0073b1' } }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Box>
        <Typography variant="body2" sx={{ marginTop: 2, fontStyle: 'italic', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
          Welcome! Click the buttons below to learn more about me and my work.
        </Typography>
      </Paper>

      {/* Buttons Section */}
      <Box sx={{ textAlign: 'center', width: '100%' }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}> {/* Responsive Grid item */}
            <Link to="/github-projects" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  padding: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  width: '100%',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  "&:hover": {
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                GitHub Projects
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link to="/FigmaworksPage" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  padding: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  width: '100%',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  "&:hover": {
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                Figma Works
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link to="/EducationPage" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                color="success"
                sx={{
                  padding: { xs: 1.5, sm: 2 },
                  fontSize: { xs: '1rem', sm: '1.1rem' },
                  width: '100%',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  "&:hover": {
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                Education
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="contained"
              color="warning"
              sx={{
                padding: { xs: 1.5, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.1rem' },
                width: '100%',
                transition: 'transform 0.2s, box-shadow 0.2s',
                "&:hover": {
                  transform: 'scale(1.05)',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                },
              }}
              href="/Shrajan_resume.pdf"
              target="_blank"
            >
              Resume
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProfilePage;
