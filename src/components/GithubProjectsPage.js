import React from 'react';
import { Container, Card, CardContent, CardMedia, Typography, Grid, Button, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const GitHubProjectsPage = () => {
  const projects = [
    { name: 'CargoX', description: 'A cargo management system to streamline logistics processes and optimize user experience.', githubLink: 'https://github.com/Shrajanv/CargoX', image: '/Gitimg/cargo.jpeg' },
    { name: 'Student Management', description: 'A web app to manage student information, attendance, and grades.', githubLink: 'https://github.com/Shrajanv/Student-management-system-using-reactjs', image: '/Gitimg/student.jpg' },
    { name: 'Crypto Price Tracker', description: 'A cryptocurrency price tracker to monitor real-time prices of various cryptocurrencies.', githubLink: 'https://github.com/Shrajanv/Cryptocurrency-Price-Tracker-react-API-based-web-mini-project', image: '/Gitimg/crypto.jpeg' },
    { name: 'ToDo List App', description: 'A simple to-do list app with task management features, including add, edit, delete, and sorting tasks.', githubLink: 'https://github.com/Shrajanv/Todo_List/tree/master', image: '/Gitimg/todo.jpg' },
  ];

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <Container maxWidth="lg" sx={{ paddingTop: 5 }}>
      <IconButton onClick={handleBackClick} sx={{ position: "absolute", top: 20, left: 20, color: "white" }}>
        <ArrowBackIcon />
      </IconButton>

      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{
          marginY: 3,
          fontSize: { xs: "1.8rem", sm: "2.5rem" },
          color: "white",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        }}
      >
        My Projects from GitHub <FontAwesomeIcon icon={faGithub} style={{ marginLeft: "8px" }} />
      </Typography>

      <Grid container spacing={4} sx={{ marginTop: 3 }}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                maxWidth: 345,
                backgroundColor: "#defcf9",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)", 
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
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
                <Typography variant="h6" component="div" sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2, fontSize: { xs: "0.875rem", sm: "1rem" } }}>
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.githubLink}
                  target="_blank"
                  sx={{
                    fontSize: { xs: "0.8rem", sm: "1rem" },
                    padding: { xs: 1, sm: 1.5 },
                  }}
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
