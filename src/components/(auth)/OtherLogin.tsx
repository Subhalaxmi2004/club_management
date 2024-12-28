import { Button, Stack, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

type OtherLoginProps = {
    setAuthType: (type: 'sign-in' | 'sign-up') => void;
    authType: 'sign-in' | 'sign-up';
};

function OtherLogin({ setAuthType, authType }: OtherLoginProps) {
    const toggleAuthType = () => {
        if (authType === 'sign-in') {
            setAuthType('sign-up');
        } else {
            setAuthType('sign-in');
        }
    };

    return (

        //sign in with google button
        <Stack spacing={2} px={{ xs: 4, sm: 8, md: 12 }} my={3}>
            <Button
                size='large'
                startIcon={<GoogleIcon />}
                variant='contained'
                sx={{
                    bgcolor: '#252525',
                    color: 'white',
                    fontSize: '0.8rem',
                    textTransform: 'capitalize',
                    paddingBlock: '1rem'
                }}
                disableElevation
                disableRipple
            >
                Sign in with Google
            </Button>

            {/* sign in with github button */}
            <Button
                size='large'
                startIcon={<GitHubIcon />}
                variant='contained'
                sx={{
                    bgcolor: '#252525',
                    color: 'white',
                    fontSize: '0.8rem',
                    textTransform: 'capitalize',
                    paddingBlock: '1rem'
                }}
                disableElevation
                disableRipple
            >
                Sign in with GitHub
            </Button>
            <Typography
                variant='body2'
                sx={{
                    color: '#424242',
                    fontSize: '12px',
                }}
            >
                {authType === 'sign-in' ? (
                    <>
                        Not registered yet?
                        <Typography
                            component='span'
                            sx={{
                                color: 'white',
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                fontSize: { xs: '0.6rem', sm: '0.7rem', md: '1rem' },
                            }}
                            onClick={toggleAuthType}
                        >
                            Click here to sign up now
                        </Typography>
                    </>
                ) : (
                    <>
                        Already have an account?
                        <Typography
                            component='span'
                            sx={{
                                color: 'white',
                                textDecoration: 'underline',
                                cursor: 'pointer',
                            }}
                            onClick={toggleAuthType}
                        >
                            Log In
                        </Typography>
                    </>
                )}
            </Typography>
        </Stack>
    );
}

export default OtherLogin;
