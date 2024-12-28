"use client"

import React from 'react';
import { useState } from 'react';
import Login from './Login';
import LoginBox from './LoginBox';
import { Box } from '@mui/material';

function MainLogin() {
  const [authType, setAuthType] = useState<'sign-in' | 'sign-up'>('sign-in');
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Box bgcolor='#1E1E1E'>
      <Login onAdminSelect={setIsAdmin} />
      {/* Pass authType to LoginBox */}
      <LoginBox authType={authType} setAuthType={setAuthType} isAdmin={isAdmin}/>
    </Box>
  );
}

export default MainLogin;
