import React from 'react';
import { Container, Typography, IconButton, Box, Paper } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const EducationPage = () => {
  const educationData = [
    {
      level: 'PG in MCA',
      marks: '8.56 CGPA/10',
      year: '2024',
      institution: 'St Joseph Engineering College, Vamanjoor, Mangaluru',
    },
    {
      level: 'UG in BSc (Statistics, Computer Science,Mathematics)',
      marks: '7.5 CGPA/10',
      year: '2022',
      institution: 'St Aloysius College, Mangaluru',
    },
    {
      level: 'Class 12',
      marks: '71%',
      year: '2019',
      institution: 'St Aloysius PU College, Mangaluru',
    },
    {
      level: 'Class 10',
      marks: '81.60%',
      year: '2017',
      institution: 'St Gerosa High School, Mangaluru',
    },
  ];

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <Container sx={{ paddingTop: 8, paddingBottom: 5 }}>
      {/* Back button */}
      <IconButton onClick={handleBackClick} sx={{ position: 'absolute', top: 20, left: 20, color: 'white' }}>
        <ArrowBackIcon />
      </IconButton>

      {/* Page Title */}
      <Typography
        variant="h2"
        gutterBottom
        textAlign="center"
        sx={{
          marginTop: 6,
          color: 'white',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        }}
      >
        My Educations
      </Typography>

      {/* Education Details */}
      <Box sx={{ marginTop: 5 }}>
        {educationData.map((item, index) => (
          <Container
            key={index}
            component={Paper}
            elevation={3}
            sx={{
              padding: 3,
              marginBottom: 4,
              backgroundColor: '#e8f5e9',
              borderRadius: '10px',
              '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
              },
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: 1 }}>
              {item.level}
            </Typography>
            <Typography variant="body1">
              <strong>Marks:</strong> {item.marks}
            </Typography>
            <Typography variant="body1">
              <strong>Year of Passing:</strong> {item.year}
            </Typography>
            <Typography variant="body1">
              <strong>Institution:</strong> {item.institution}
            </Typography>
          </Container>
        ))}
      </Box>
    </Container>
  );
};

export default EducationPage;
