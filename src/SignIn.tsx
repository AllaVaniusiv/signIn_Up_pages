import React, { useState } from 'react';
import { Button, TextField, Typography, Link, Grid, Container, CssBaseline, Box, InputLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FacebookIcon from './assets/Facebook.svg'
import AppleIcon from './assets/Apple.svg';
import GoogleIcon from './assets/Google.svg';

interface SignInProps {
    onFormSwitch: (formName: string) => void;
}

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Poppins, sans-serif',
        },
        h5: {
            fontWeight: '600',
            fontSize: '24px',
            color: '#101828'
        },
        subtitle1: {
            fontWeight: '400',
            fontSize: '16px',
            color: '#667085'
        },
        body1: {
            fontSize: '16px',
        },
        body2: {
            fontSize: '14px',
        },
    },
});


export const SignIn: React.FC<SignInProps> = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box  sx={{ backgroundColor: '#f2f4f7', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Container component="main" maxWidth="xs" sx={{ display: 'flex', backgroundColor: 'white', flexDirection: 'column', alignItems: 'center', height: '90vh', borderRadius: '15px', justifyContent: 'center' }}>
                    <Box className="auth-form-container">
                        <Box mb={2}>
                            <Typography component="h1" variant="h5" mt={0}>
                                Log in to your account
                            </Typography>
                        </Box>
                        <Box mb={2}>
                            <Typography component="h3" variant="subtitle1" mb={5}>
                                Welcome back! Please enter your details
                            </Typography>
                        </Box>
                        <form className="login-form" onSubmit={handleSubmit} >
                            <Box style={{ width: '100%', height: '100%' }}>
                                <Grid item>
                                        <InputLabel htmlFor="email" sx={{ textAlign: 'left', fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: '14px', color: '#344054', marginTop: '10px', marginBottom: '-10px' }}>Email</InputLabel>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            id="email"
                                            label=""
                                            placeholder="Enter your email"
                                            name="email"
                                            autoComplete="email"
                                            value={email}
                                            InputLabelProps={{ shrink: true }}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required={true}
                                            type="email"
                                            InputProps={{
                                                sx: {
                                                    height: '40px',
                                                    border: 'none',
                                                    '& .MuiOutlinedInput-notchedOutline': {
                                                        border: 'none',
                                                    },
                                                }
                                            }}
                                            sx={{
                                                width: '300px',
                                                border: '1px solid var(--gray-300, #D0D5DD)',
                                                borderRadius: '8px',
                                                background: 'var(--White, #FFF)',
                                                boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                                            }}
                                        />
                                    <InputLabel htmlFor="pass" sx={{ textAlign: 'left', fontFamily: 'Poppins, sans-serif', fontWeight: '500', fontSize: '14px', color: '#344054', marginTop: '10px', marginBottom: '-10px' }}>Password</InputLabel>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        id="pass"
                                        label=""
                                        placeholder="Create password"
                                        name="pass"
                                        autoComplete="pass"
                                        value={pass}
                                        InputLabelProps={{ shrink: true }}
                                        onChange={(e) => setPass(e.target.value)}
                                        required={true}
                                        type="password"
                                        InputProps={{
                                            sx: {
                                                height: '40px',
                                                border: 'none',
                                                '& .MuiOutlinedInput-notchedOutline': {
                                                    border: 'none',
                                                },
                                            }
                                        }}
                                        sx={{
                                            width: '300px',
                                            border: '1px solid var(--gray-300, #D0D5DD)',
                                            borderRadius: '8px',
                                            background: 'var(--White, #FFF)',
                                            boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                                        }}
                                    />
                                </Grid>
                                <Box style={{ textAlign: 'right', marginTop: '-10px', marginBottom: '20px' }}>
                                    <Link href="#" variant="body2" sx={{
                                        backgroundImage: 'linear-gradient(180deg, #f9d423 0%, #fc9239 48.96%, #ff4e50 100%)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        color: 'transparent',
                                        textDecoration: 'none',
                                        width: '100%',
                                        fontSize: '14px',
                                        fontWeight: '600',
                                        textTransform: 'none',
                                    }}>
                                        Forgot password?
                                    </Link>
                                </Box>

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#101828',
                                        color: 'white',
                                        width: '100%',
                                        marginBottom: "10px",
                                        fontWeight: '600',
                                        textTransform: 'none',
                                        borderRadius: '8px',
                                        '&:hover': {
                                            backgroundColor: '#101828',
                                        },
                                    }}
                                >
                                    Sign in
                                </Button>
                            </Box>
                            <Grid container justifyContent="center" alignItems="center" style={{ flexDirection: 'column', width: '100%', height: '100%' }} >
                                <Grid item sx={{ textAlign: 'center', width: '100%', marginBottom: "10px" }}>
                                    <Button variant="outlined" style={{
                                        color: '#344054',
                                        textTransform: 'none',
                                        width: '100%',
                                        height: '40px',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        border: '1px solid var(--gray-300, #D0D5DD)',
                                        borderRadius: '8px',
                                        background: 'var(--White, #FFF)',
                                        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                                    }} startIcon={<img src={GoogleIcon} alt="GoogleIcon" style={{ width: '24px', height: '24px', marginRight: '8px' }} />}>
                                        Log in with Google
                                    </Button>
                                </Grid>
                                <Grid item sx={{ textAlign: 'center', width: '100%', marginBottom: "10px" }}>
                                    <Button variant="outlined" style={{
                                        color: '#344054',
                                        textTransform: 'none',
                                        width: '100%',
                                        height: '40px',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        border: '1px solid var(--gray-300, #D0D5DD)',
                                        borderRadius: '8px',
                                        background: 'var(--White, #FFF)',
                                        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                                    }} startIcon={<img src={FacebookIcon} alt="Facebook Icon" style={{ width: '24px', height: '24px', marginRight: '8px' }} />}>
                                        Log in with Facebook
                                    </Button>
                                </Grid>
                                <Grid item sx={{ textAlign: 'center', width: '100%', marginBottom: "10px" }}>
                                    <Button variant="outlined" style={{
                                        color: '#344054',
                                        textTransform: 'none',
                                        width: '100%',
                                        height: '40px',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        border: '1px solid var(--gray-300, #D0D5DD)',
                                        borderRadius: '8px',
                                        background: 'var(--White, #FFF)',
                                        boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                                    }} startIcon={<img src={AppleIcon} alt="Apple Icon" style={{ width: '24px', height: '24px', marginRight: '8px' }} />}>
                                        Log in with Apple
                                    </Button>
                                </Grid>

                            </Grid>

                        </form>
                        <Box sx={{ textAlign: 'center' }}>
                            <Link
                                className="link-bth"
                                sx={{ color: '#667085' }}
                                onClick={() => props.onFormSwitch('register')}
                                variant="body2"
                            >
                                Don't have an account?
                            </Link>
                            {' '}
                            <Link
                                className="link-bth"
                                sx={{
                                    backgroundImage: 'linear-gradient(180deg, #f9d423 0%, #fc9239 48.96%, #ff4e50 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    color: 'transparent',
                                    textDecoration: 'none',
                                    fontWeight: '600'
                                }}
                                onClick={() => props.onFormSwitch('register')}
                                variant="body2"
                            >
                                Sign up
                            </Link>
                        </Box>
                    </Box>
                </Container >
            </Box >
        </ThemeProvider >
    );
};
