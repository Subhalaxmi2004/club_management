"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { useMediaQuery } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const pages = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#About_section' },
  { name: 'Clubs', href: '/clubs' },
  { name: 'Profile', href: '/profile' }
];
interface ResponsiveAppBarProps {
  isAuthenticated: boolean;
}
function ResponsiveAppBar({ isAuthenticated }: ResponsiveAppBarProps) {
  const [activePage, setActivePage] = React.useState(pages[0].name);
  const [isSidenavOpen, setSidenavOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery('(max-width: 900px)');
  const sidenavRef = React.useRef<HTMLDivElement | null>(null);

  const router = useRouter(); 
  const handleSidenavToggle = () => {
    setSidenavOpen(prev => !prev);
  };

  const handlePageChange = (pageName: string) => {
    const selectedPage = pages.find(page => page.name === pageName);
      if (selectedPage) {
        setActivePage(pageName);
        setSidenavOpen(false);
        router.push(selectedPage.href);
      }
    
  };
  
  

  const handleLoginClick = () => {
    alert('Login clicked');
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    alert('Logout clicked');
    handleCloseMenu();
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isSidenavOpen && sidenavRef.current && !sidenavRef.current.contains(event.target as Node)) {
        setSidenavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidenavOpen]);
 
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#252525' }}>
        <Container>
          <Toolbar disableGutters>
            {/* Hamburger Menu for Mobile */}
            {isMobile && (
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleSidenavToggle}
                color="inherit"
                sx={{ mr: 2 }}
              >
                <FontAwesomeIcon icon={faBars} />
              </IconButton>
            )}

            {/* Logo and Title */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image
            src="/images/vssut logo.jpg"
            alt="VSSUT Logo"
                width={40}
  height={40}
  style={{ objectFit: 'contain' }}
/>

              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: { xs: '0.7em', md: '0.8em' },
                  textTransform: 'uppercase',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginLeft: '8px',
                }}
              >
                  <Typography
    component="span"
    sx={{ fontSize: { xs: '0.8em', md: '0.9em' } }}
  >
    Clubs of
  </Typography>
  <Typography
    component="span"
    sx={{ fontSize: { xs: '1em', md: '1.2em' } }}
  >
    VSSUT
  </Typography>
              </Typography>
            </Box>

            {/* Navigation Links for Desktop */}
            
{!isMobile && (
  <Box sx={{ display: 'inline-flex', ml: 'auto' }}>
    {pages.map((page) => (
      <Button
        key={page.name} 
        onClick={() => handlePageChange(page.name)}
        sx={{
          my: 2,
          color: activePage === page.name ? 'white' : '#bdbdbd',
          position: 'relative',
          fontSize: { xs: '16px', md: '18px' },
          padding: '12px 16px',
          textTransform: 'none',
          '&:hover': {
            color: 'white',
            '&::after': {
              content: '""',
              position: 'absolute',
              left: '50%',
              bottom: '-4px',
              height: '2px',
              width: '100%',
              backgroundColor: 'white',
              transform: 'translateX(-50%) scaleX(1)',
              transition: 'transform 0.3s ease',
            },
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            left: '50%',
            bottom: '-4px',
            height: '2px',
            width: '100%',
            backgroundColor: 'transparent',
            transform: 'translateX(-50%) scaleX(0)',
            transition: 'transform 0.3s ease',
          },
        }}
      >
        {page.name}
      </Button>
    ))}
  </Box>
)}


            {/* Profile Avatar for Authenticated Users */}
            {isAuthenticated ? (
                 <IconButton onClick={handleProfileClick} sx={{ ml: 'auto' }}>
                 <Avatar
                   alt="Jason Hughes"
                   src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                   sx={{
                     bgcolor: 'secondary.main',  
                     width: 32,                  
                     height: 32,
                   }}
                 />
               </IconButton>
            ) : (
              <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: 'white',
                    color: '#424242',
                    border: '1px solid white',
                    borderRadius: '4px',
                    padding: '6px 32px',
                    fontSize: { xs: '14px', md: '18px' },
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'white',
                      color: '#424242',
                    },
                  }}
                  onClick={handleLoginClick}
                >
                  LOG IN
                </Button>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        PaperProps={{
          style: {
            backgroundColor: '#252525',
            color: 'white',
            borderRadius: '8px',
            maxWidth: '200px',
            marginTop: '8px',
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem
          onClick={() => { handleCloseMenu(); handlePageChange('Profile'); }}
          sx={{ padding: '10px 20px' }}
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={handleLogout}
          sx={{ padding: '10px 20px' }}
        >
          Logout
        </MenuItem>
      </Menu>

      {/* Sidenav - only show on mobile */}
      {isMobile && (
        <nav
          ref={sidenavRef}
          id="sidenav-1"
          className="sidenav"
          style={{
            position: 'fixed',
            top: 0,
            left: isSidenavOpen ? 0 : '-250px',
            height: '100%',
            width: '250px',
            backgroundColor: '#252525',
            padding: '10px',
            zIndex: 1000,
            transition: 'left 0.3s ease',
          }}
        >
          <Box sx={{ padding: '10px' }}>
            <ul className="sidenav-menu">
              {pages.map((page) => (
                <li className="sidenav-item" key={page.name}>
                  <Button
                    className="sidenav-link"
                    onClick={() => handlePageChange(page.name)}
                    sx={{ 
                      color: 'white', 
                      padding: '10px 20px', 
                      width: '100%', 
                      backgroundColor: '#252525' 
                    }}
                  >
                    {page.name}
                  </Button>
                </li>
              ))}
              {!isAuthenticated && (
                <li className="sidenav-item">
                  <Button
                    variant="outlined"
                    onClick={handleLoginClick}
                    sx={{
                      backgroundColor: '#424242',
                      color: 'white',
                      border: '1px solid white',
                      borderRadius: '4px',
                      padding: '10px 20px',
                      width: '100%',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#333',
                        color: 'white',
                      },
                    }}
                  >
                    LOG IN
                  </Button>
                </li>
              )}
            </ul>
          </Box>
        </nav>
      )}
    </>
  );
}

export default ResponsiveAppBar;
