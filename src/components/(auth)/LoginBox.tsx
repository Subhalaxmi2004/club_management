import { Box, Typography } from '@mui/material';
import React from 'react';
import LoginDetails from './LoginDetails';

type LoginBoxProps = {
  authType: 'sign-in' | 'sign-up';
  setAuthType: (type: 'sign-in' | 'sign-up') => void;
  isAdmin: boolean;
};

function LoginBox({ authType, setAuthType, isAdmin }: LoginBoxProps) {
  return (
    <>
      <Box
        bgcolor='#2A2A2A'
        sx={{ alignItems: 'center', justifyContent: "center", width: { xs: '80vw', sm: '60vw', md: '45vw' }, textAlign: 'center', margin: "auto" }}
      >
        <Box py={6}>
          <Typography variant='h5' component='h5'>Welcome Back</Typography>
          <Typography variant='body2'>Login and stay connected</Typography>
        </Box>
        {/* Pass authType to LoginDetails */}
        <LoginDetails authType={authType} setAuthType={setAuthType} isAdmin={isAdmin} />
      </Box>
    </>
  );
}

export default LoginBox;
