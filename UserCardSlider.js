import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  IconButton, 
  Box,
  Chip,
  Divider
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const UserCardSlider = () => {
  const userData = [
    {
      id: "612345",
      name: "John Doe",
      email: "john.doe@gmail.com",
      contact: "1234567890",
      skills: ["React", "JavaScript", "HTML", "CSS"]
    },

    {
        id: "623456",
        name: "Jane Smith",
        email: "jane.smith@gmail.com",
        contact: "2345678901",
        skills: ["Python", "Django", "SQL"]
      },
      {
        id: "634567",
        name: "Robert Johnson",
        email: "robert.j@gmail.com",
        contact: "3456789012",
        skills: ["Node.js", "Express", "MongoDB"]
      },
      {
        id: "645678",
        name: "Emily Davis",
        email: "emily.d@gmail.com",
        contact: "4567890123",
        skills: ["Angular", "TypeScript", "RxJS"]
      },
      {
        id: "656789",
        name: "Michael Wilson",
        email: "michael.w@gmail.com",
        contact: "5678901234",
        skills: ["Vue.js", "Nuxt.js", "Vuex"]
      },
      {
        id: "667890",
        name: "Sarah Brown",
        email: "sarah.b@gmail.com",
        contact: "6789012345",
        skills: ["PHP", "Laravel", "MySQL"]
      },
      {
        id: "678901",
        name: "David Taylor",
        email: "david.t@gmail.com",
        contact: "7890123456",
        skills: ["Java", "Spring Boot", "Hibernate"]
      },
      {
        id: "689012",
        name: "Jessica Anderson",
        email: "jessica.a@gmail.com",
        contact: "8901234567",
        skills: ["C#", ".NET", "Entity Framework"]
      },
      {
        id: "690123",
        name: "Thomas Martinez",
        email: "thomas.m@gmail.com",
        contact: "9012345678",
        skills: ["Ruby", "Rails", "PostgreSQL"]
      },
      {
        id: "601234",
        name: "Lisa Robinson",
        email: "lisa.r@gmail.com",
        contact: "0123456789",
        skills: ["Swift", "iOS", "Xcode"]
      },
      {
        id: "611111",
        name: "Daniel White",
        email: "daniel.w@gmail.com",
        contact: "1112223333",
        skills: ["Kotlin", "Android", "Firebase"]
      },
      {
        id: "622222",
        name: "Amanda Lee",
        email: "amanda.l@gmail.com",
        contact: "2223334444",
        skills: ["Go", "Docker", "Kubernetes"]
      }
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? userData.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex(prev => (prev === userData.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      p: 3
    }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ 
        color: '#5f6368',
        fontWeight: 500,
        mb: 4
      }}>
        User Profiles
      </Typography>
      
      <Box sx={{ 
        position: 'relative',
        width: '100%',
        maxWidth: 500,
        display: 'flex',
        alignItems: 'center'
      }}>
        <IconButton 
          onClick={goToPrevious}
          sx={{
            position: 'absolute',
            left: -60,
            color: '#5f6368',
            backgroundColor: 'white',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            '&:hover': {
              backgroundColor: '#f1f3f4'
            }
          }}
        >
          <ChevronLeft fontSize="large" />
        </IconButton>

        <Card sx={{
          width: '100%',
          borderRadius: 2,
          boxShadow: '0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15)',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'translateY(-4px)'
          }
        }}>
          <CardContent>
            <Typography variant="h6" component="h2" sx={{ 
              color: '#202124',
              fontWeight: 500,
              mb: 1
            }}>
              Gain - ID: {userData[currentIndex].id}
            </Typography>
            
            <Divider sx={{ my: 2 }} />
            
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                <strong>Name:</strong> {userData[currentIndex].name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Email:</strong> {userData[currentIndex].email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>Contact:</strong> {userData[currentIndex].contact}
              </Typography>
            </Box>
            
            <Divider sx={{ my: 2 }} />
            
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              Skills:
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {userData[currentIndex].skills.map((skill, index) => (
                <Chip 
                  key={index}
                  label={skill}
                  size="small"
                  sx={{
                    backgroundColor: '#e8f0fe',
                    color: '#1967d2',
                    fontWeight: 500
                  }}
                />
              ))}
            </Box>
          </CardContent>
        </Card>

        <IconButton 
          onClick={goToNext}
          sx={{
            position: 'absolute',
            right: -60,
            color: '#5f6368',
            backgroundColor: 'white',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            '&:hover': {
              backgroundColor: '#f1f3f4'
            }
          }}
        >
          <ChevronRight fontSize="large" />
        </IconButton>
      </Box>
      
      <Box sx={{ 
        display: 'flex',
        mt: 3,
        gap: 1
      }}>
        {userData.map((_, index) => (
          <Box 
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: currentIndex === index ? '#1967d2' : '#dadce0',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default UserCardSlider;