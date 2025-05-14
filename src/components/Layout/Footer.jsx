import { Box, Container, Grid, Typography, Link, IconButton, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const socialLinks = [
  {
    name: 'WhatsApp',
    icon: <WhatsAppIcon />,
    url: 'https://api.whatsapp.com/send/?phone=905305475152&text&type=phone_number&app_absent=0',
    color: '#25D366'
  },
  {
    name: 'LinkedIn',
    icon: <LinkedInIcon />,
    url: 'https://www.linkedin.com/company/bgglobal/',
    color: '#0A66C2'
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon />,
    url: 'https://www.instagram.com/bgglobal_bv/',
    color: '#E4405F'
  },
  {
    name: 'YouTube',
    icon: <YouTubeIcon />,
    url: 'https://www.youtube.com/@bgglobalbv6675/',
    color: '#FF0000'
  },
  {
    name: 'Facebook',
    icon: <FacebookIcon />,
    url: 'https://www.facebook.com/people/BG-Global/100078048486457/',
    color: '#1877F2'
  }
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              BG GLOBAL
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pieter Ghijssenlaan 24E
              <br />
              1506 PV Zaandam
              <br />
              THE NETHERLANDS
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +31 6 34861015
              <br />
              Email:{' '}
              <Link href="mailto:info@bgglobal.nl" color="inherit">
                info@bgglobal.nl
              </Link>
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link component={RouterLink} to="/solutions" color="inherit">
                Solutions
              </Link>
              <Link component={RouterLink} to="/projects" color="inherit">
                Projects
              </Link>
              <Link component={RouterLink} to="/about-us" color="inherit">
                About Us
              </Link>
              <Link component={RouterLink} to="/contact" color="inherit">
                Contact
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              {socialLinks.map((link) => (
                <IconButton 
                  key={link.name}
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  sx={{ 
                    color: 'white',
                    bgcolor: link.color,
                    '&:hover': {
                      bgcolor: link.color,
                      filter: 'brightness(1.1)'
                    }
                  }}
                  size="small"
                >
                  {link.icon}
                </IconButton>
              ))}
            </Stack>
            <Typography variant="body2" color="text.secondary">
              Follow us for updates and news
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} BG Global. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;