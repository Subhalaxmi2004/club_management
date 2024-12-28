"use client";
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface Project {
  name: string;
  domain: string;
  description: string;
  dates: string;
}

interface ProjectCardProps {
  project?: Project; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project = { name: '', domain: '', description: '', dates: '' } }) => {
  return (
    <Card 
      sx={{ 
        backgroundColor: '#1E1E1E', 
        color: '#ffffff', 
        borderRadius: '4px',
        marginTop: "18px",
        paddingLeft: { sm: "11px", md: "14px", xl: "18px" },
        width: { sm: "75%", md: "40%", xl: "40%", xs: "90%",lg:"40%" },
        border: '1px solid #2A2A2A',
        borderLeft: '2px solid green', 
        transition: 'border-left-color 0.3s ease', 
        '&:hover': {
          borderLeftColor: 'red',
        },
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {project.name || 'Unnamed Project'}
        </Typography>
        <Typography variant="body2" sx={{ color: '#bbbbbb', marginBottom: '0.5rem' }}>
          {project.domain || 'Domain Not Specified'}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>
          {project.description || 'Description Not Available'}
        </Typography>
        <Typography variant="body2" sx={{ color: '#bbbbbb' }}>
          {project.dates || 'Dates Not Available'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
