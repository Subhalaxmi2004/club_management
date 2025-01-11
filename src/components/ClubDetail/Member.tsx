"use client";
import React from 'react';
import { Stack, Typography } from '@mui/material';
import CardSection from '@/components/Member/ClubSection2';
import { profiles1 } from '@/constants';


const Page: React.FC = () => {


  return (
    <div>
      <Stack
        sx={{
          backgroundColor: '#1E1E1E',
          padding: { xs: 1, sm: 2 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: '#fff',
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '2rem' },
            fontFamily: 'Poppins , sans-serif',
            fontWeight: 600,
          }}
        >
          All Members
        </Typography>

        <CardSection profiles={profiles1} />
      </Stack>
    </div>
  );
};

export default Page;
