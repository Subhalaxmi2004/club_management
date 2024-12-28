import { Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

function Login({ onAdminSelect }: { onAdminSelect: (isAdmin: boolean) => void }) {
  const [isAdminSelected, setIsAdminSelected] = useState(false);

  const handleAdminClick = () => {
    setIsAdminSelected(true);
    onAdminSelect(true);  
  };

  const handleMemberClick = () => {
    setIsAdminSelected(false);
    onAdminSelect(false); 
  };

  return (
    <div>
      <Stack direction='row' spacing={2} py={3} sx={{ alignItems: 'center', justifyContent: "center" }}>
        <Typography variant='body1'>Logging in as:</Typography>
        <Button
          sx={{
            backgroundColor: isAdminSelected ? '#252525' : '#4285F4',
            color: isAdminSelected ? '#757575' : '#FFFFFF',
            fontWeight: 500
          }}
          size='medium'
          variant='contained'
          onClick={handleMemberClick}
        >
          Member
        </Button>
        <Button
          sx={{
            backgroundColor: isAdminSelected ? '#4285F4' : '#252525',
            color: isAdminSelected ? '#FFFFFF' : '#757575',
            fontWeight: 500
          }}
          size='medium'
          variant='contained'
          onClick={handleAdminClick}
        >
          Admin
        </Button>
      </Stack>
    </div>
  );
}

export default Login;
