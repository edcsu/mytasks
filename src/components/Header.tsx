import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Logo from "../assets/logo.png"
import Switch from '@mui/material/Switch';
type Props = {
    isDark: boolean,
    toggleTheme: () => void
};

const Header: React.FC<Props> = ({ isDark, toggleTheme } : Props)=> {
    const label = { inputProps: { 'aria-label': 'Toggle theme' } };
    return (
        <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Avatar alt="logo" src={Logo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} variant="rounded" />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                mytasks
            </Typography>
            <Switch
                color="secondary" 
                value={isDark}
                onChange={toggleTheme}
                {...label}
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    ml : 150
                }}
            />
            <Avatar alt="logo" src={Logo} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} variant="rounded" />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                mytasks
            </Typography>
            <Switch
                name='Toggle theme'
                color="secondary" 
                value={isDark}
                onChange={toggleTheme}
                {...label}
                sx={{
                    display: { xs: 'flex', md: 'none' },
                }}
            />
            </Toolbar>
        </Container>
        </AppBar>
    );
}
export default Header;
