"use client";
import React, { useState } from 'react';
import ProjectCard from '@/components/projects/ProjectCard';
import { sampleProjects } from '@/constants';
import Typography from '@mui/material/Typography';
import NewProject from '@/components/ClubDetail/NewProject';

const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const itemsPerPage = 8;

  const filteredProjects = sampleProjects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => setCurrentPage(page);
  const handleNextPage = () => {
    if (currentPage < totalPages) handlePageChange(currentPage + 1);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
        paddingBottom: '20px',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <NewProject />
      <h1
        sx={{
          color: '#fff',
          textAlign: 'left',
          fontSize: '30px',
          marginLeft: '18px',
          marginTop: '18px',
          fontWeight: 600,
        }}
      >
        All Projects
      </h1>
      <div
        sx={{
          width: '70%',
          height: '134px',
          paddingTop: '33px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginBottom: '30px',
          marginTop: '30px',
          border: '1.5px solid #252525',
          position: 'relative',
          borderRadius: '4px',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#fff',
          }}
        >
          SEARCH PROJECTS
        </Typography>
        <input
          type="text"
          placeholder="Search in projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            width: '60%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #252525',
            fontSize: '16px',
            backgroundColor: '#1E1E1E',
            color: '#fff',
          }}
        />
      </div>

      <div
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          margin: '0 auto',
        }}
      >
        {currentProjects.length > 0 ? (
          currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))
        ) : (
          <p style={{ color: '#fff' }}>No projects available.</p>
        )}
      </div>

      {filteredProjects.length > 0 && (
        <div
          sx={{
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              sx={{
                margin: '0 5px',
                padding: '5px 10px',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: currentPage === index + 1 ? '#555' : '#333',
                color: currentPage === index + 1 ? '#fff' : '#bbb',
              }}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            sx={{
              marginLeft: '10px',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '5px',
              color: '#fff',
              transition: 'background-color 0.3s',
              backgroundColor: currentPage === totalPages ? '#999' : '#28a745',
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
