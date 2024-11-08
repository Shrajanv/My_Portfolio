import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Grid, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GitHubProjectsPage = () => {
  const projects = [
    {
      name: 'CargoX',
      description: 'A cargo management system to streamline logistics processes and optimize user experience.',
      githubLink: 'https://github.com/Shrajanv/CargoX',
      image: '/Gitimg/cargo.jpeg',
    },
    {
      name: 'Student Management',
      description: 'A web app to manage student information, attendance, and grades.',
      githubLink: 'https://github.com/Shrajanv/Student-management-system-using-reactjs',
      image: '/Gitimg/student.jpg',
    },
    {
      name: 'Crypto Price Tracker',
      description: 'A cryptocurrency price tracker to monitor real-time prices of various cryptocurrencies.',
      githubLink: 'https://github.com/Shrajanv/Cryptocurrency-Price-Tracker-react-API-based-web-mini-project',
      image: '/Gitimg/crypto.jpeg',
    },
    {
      name: 'ToDo List App',
      description: 'A simple to-do list app with task management features, including add, edit, delete, and sorting tasks.',
      githubLink: 'https://github.com/Shrajanv/Todo_List/tree/master',
      image: '/Gitimg/todo.jpg',
    }
  ];

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <Container sx={{ paddingTop: 5 }}>
      <IconButton onClick={handleBackClick} sx={{ position: "absolute", top: 20, left: 20, color: "white" }}>
        <ArrowBackIcon />
      </IconButton>

      <Typography
        variant="h2"
        gutterBottom
        textAlign="center"
        sx={{
          position: "absolute",
          top: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        }}
      >
        My Projects from GitHub{" "}
        <FontAwesomeIcon icon={faGithub} style={{ marginLeft: "8px" }} />
      </Typography>

      <Grid container spacing={4} sx={{ marginTop: 10 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "#defcf9",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)", // Slightly increase size on hover
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Add shadow on hover
                },
              }}
            >
              <CardMedia
                component="img"
                alt={project.name}
                height="140"
                image={project.image}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.githubLink}
                  target="_blank"
                >
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default GitHubProjectsPage;
