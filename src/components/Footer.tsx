import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';

const Copyright = () => {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link 
        color="text.secondary" 
        href="https://www.linkedin.com/in/ssewannonda-keith-edwin-443303129"
        rel="noreferrer noopener"
        target="_blank"
      >
        Keith
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
        position : 'fixed',
        bottom: 0,
        left: 0
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://github.com/edcsu"
            rel="noreferrer noopener"
            target="_blank"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://x.com/skeith696"
            rel="noreferrer noopener"
            target="_blank"
            aria-label="X"
            sx={{ alignSelf: 'center' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="https://www.linkedin.com/in/ssewannonda-keith-edwin-443303129"
            rel="noreferrer noopener"
            target="_blank"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            href="mailto:skeith696@gmail.com"
            aria-label="email"
            rel="noreferrer noopener"
            target="_blank"
            sx={{ alignSelf: 'center' }}
          >
            <EmailIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}

export default Footer