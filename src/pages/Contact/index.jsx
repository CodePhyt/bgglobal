import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Checkbox, FormControlLabel, Alert, Snackbar, CircularProgress, Paper, IconButton, Link, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import DescriptionIcon from '@mui/icons-material/Description';
import SecurityIcon from '@mui/icons-material/Security';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
    },
  }),
};

const officeLocations = [
  {
    country: 'The Netherlands',
    address: 'Pieter Ghijssenlaan 24E 1506 PV Zaandam THE NETHERLANDS',
    phone: '+31 6 34861015',
    email: 'info@bgglobal.nl',
    coordinates: { lat: 52.4416, lng: 4.8292 },
    logo: '/images/contact/netherlands-logo.svg'
  },
  {
    country: 'UAE',
    address: 'Dubai, UAE',
    phone: '+971 56 219 4054',
    coordinates: { lat: 25.2048, lng: 55.2708 },
    logo: '/images/contact/uae-logo.svg'
  },
  {
    country: 'Turkey',
    address: 'Antalya, Turkey',
    phone: '+90 242 243 49 60',
    coordinates: { lat: 36.8969, lng: 30.7133 },
    logo: '/images/contact/turkey-logo.svg'
  }
];

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

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Full name is required')
    .min(2, 'Name should be at least 2 characters'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Enter a valid phone number'),
  subject: yup
    .string()
    .required('Subject is required')
    .min(3, 'Subject should be at least 3 characters'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message should be at least 10 characters'),
  termsAccepted: yup
    .boolean()
    .oneOf([true], 'You must accept the terms of service'),
  privacyAccepted: yup
    .boolean()
    .oneOf([true], 'You must accept the privacy policy')
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  const [openDialog, setOpenDialog] = useState({
    terms: false,
    privacy: false
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleOpenDialog = (type) => {
    setOpenDialog({ ...openDialog, [type]: true });
  };

  const handleCloseDialog = (type) => {
    setOpenDialog({ ...openDialog, [type]: false });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      termsAccepted: false,
      privacyAccepted: false
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSnackbar({ open: true, message: 'Message sent successfully!', severity: 'success' });
        resetForm();
      } catch (error) {
        console.error('Form submission error:', error);
        setSnackbar({ open: true, message: 'Failed to send message. Please try again.', severity: 'error' });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          py: { xs: 10, md: 16 }, 
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 1,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/images/contact/home-greenhouse.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5,
            zIndex: -1
          }
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h1" 
            align="center" 
            gutterBottom
            sx={{
              fontSize: { xs: '2.75rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
              textShadow: '0px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Contact
          </Typography>
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontSize: { xs: '1.5rem', md: '1.75rem' },
              fontWeight: 500,
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '0px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            We're here to answer any question you may have
          </Typography>
        </Container>
      </Box>

      {/* Contact Information and Form Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Grid container spacing={4}>
          {/* Social Media Links */}
          <Grid 
            item 
            xs={12} 
            md={6}
            component={motion.div}
            variants={cardVariants}
            custom={0}
          >
            <Paper 
              component={motion.div}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              elevation={3} 
              sx={{ 
                p: 4, 
                height: '100%', 
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: 'primary.main', textAlign: 'center', mb: 3 }}>
                CONNECT WITH US
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
                Reach out to us through your preferred communication channel.
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                flexWrap: 'wrap', 
                gap: 4, 
                mb: 4,
                p: 2,
                borderRadius: 2,
                bgcolor: 'background.default' 
              }}>
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <IconButton
                      component={Link}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      sx={{
                        color: 'white',
                        bgcolor: link.color,
                        p: 2.5,
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                        '&:hover': {
                          bgcolor: link.color,
                          filter: 'brightness(1.1)',
                          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)'
                        }
                      }}
                    >
                      {link.icon}
                    </IconButton>
                    <Typography variant="subtitle2" display="block" textAlign="center" sx={{ mt: 1.5, fontWeight: 500 }}>
                      {link.name}
                    </Typography>
                  </motion.div>
                ))}
              </Box>
              <Typography variant="body2" align="center" color="text.secondary" sx={{ mt: 4, fontStyle: 'italic' }}>
                Follow us on social media for the latest updates and news
              </Typography>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid 
            item 
            xs={12} 
            md={6}
            component={motion.div}
            variants={cardVariants}
            custom={1}
          >
            <Paper 
              component={motion.div}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              elevation={3} 
              sx={{ 
                p: 4, 
                height: '100%', 
                bgcolor: 'background.paper',
                borderRadius: 3,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '5px',
                  background: 'linear-gradient(90deg, #2E7D32 0%, #1976D2 100%)'
                }
              }}
            >
              <Box sx={{ mb: 4, textAlign: 'center' }}>
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700,
                    color: 'primary.main',
                    fontSize: { xs: '1.75rem', md: '2rem' },
                    mb: 1,
                    background: 'linear-gradient(90deg, #2E7D32 0%, #1976D2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Get in Touch
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                    maxWidth: '500px',
                    mx: 'auto'
                  }}
                >
                  Ready to start your next project? We're here to help bring your vision to life.
                </Typography>
              </Box>

              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="name"
                      name="name"
                      label="Full Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.1)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'text.secondary',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: 'primary.main',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="email"
                      name="email"
                      label="Email Address"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.1)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'text.secondary',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: 'primary.main',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="phone"
                      name="phone"
                      label="Phone Number"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                      helperText={formik.touched.phone && formik.errors.phone}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.1)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'text.secondary',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: 'primary.main',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="subject"
                      name="subject"
                      label="Project Subject"
                      value={formik.values.subject}
                      onChange={formik.handleChange}
                      error={formik.touched.subject && Boolean(formik.errors.subject)}
                      helperText={formik.touched.subject && formik.errors.subject}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.1)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'text.secondary',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: 'primary.main',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="message"
                      name="message"
                      label="Project Details"
                      multiline
                      rows={4}
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      error={formik.touched.message && Boolean(formik.errors.message)}
                      helperText={formik.touched.message && formik.errors.message}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.1)',
                          },
                          '&:hover fieldset': {
                            borderColor: 'primary.main',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'primary.main',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: 'text.secondary',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: 'primary.main',
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ 
                      p: 2, 
                      bgcolor: 'background.default', 
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider'
                    }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="termsAccepted"
                            checked={formik.values.termsAccepted}
                            onChange={formik.handleChange}
                            color="primary"
                          />
                        }
                        label={
                          <Typography variant="body2" color="text.secondary">
                            I accept the <Link 
                              component="button" 
                              onClick={() => handleOpenDialog('terms')} 
                              color="primary" 
                              sx={{ 
                                textDecoration: 'none', 
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                                p: 0,
                                '&:hover': { textDecoration: 'underline' } 
                              }}
                            >
                              terms of service
                            </Link>
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="privacyAccepted"
                            checked={formik.values.privacyAccepted}
                            onChange={formik.handleChange}
                            color="primary"
                          />
                        }
                        label={
                          <Typography variant="body2" color="text.secondary">
                            I accept the <Link 
                              component="button" 
                              onClick={() => handleOpenDialog('privacy')} 
                              color="primary" 
                              sx={{ 
                                textDecoration: 'none', 
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                                p: 0,
                                '&:hover': { textDecoration: 'underline' } 
                              }}
                            >
                              privacy policy
                            </Link>
                          </Typography>
                        }
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      disabled={isSubmitting}
                      sx={{ 
                        mt: 2,
                        py: 1.5,
                        fontSize: '1.1rem',
                        textTransform: 'none',
                        background: 'linear-gradient(90deg, #2E7D32 0%, #1976D2 100%)',
                        '&:hover': {
                          background: 'linear-gradient(90deg, #1B5E20 0%, #1565C0 100%)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                        },
                        transition: 'all 0.3s ease-in-out'
                      }}
                    >
                      {isSubmitting ? (
                        <CircularProgress size={24} color="inherit" />
                      ) : (
                        'Submit Project Inquiry'
                      )}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Office Locations Section */}
      <Box 
        sx={{ 
          mb: 8,
          position: 'relative',
          py: 8,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/images/contact/global-locations.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
            zIndex: 0
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom 
            component={motion.h2}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ 
              mb: 4,
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.5rem' },
              background: 'linear-gradient(90deg, #2E7D32 0%, #1976D2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            Our Global Offices
          </Typography>
          <Typography 
            variant="h6" 
            align="center"
            component={motion.p}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{ 
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
              color: 'text.secondary',
              fontSize: '1.1rem'
            }}
          >
            Visit one of our global offices to discuss your greenhouse project
          </Typography>
          <Grid container spacing={4}>
            {officeLocations.map((office, index) => (
              <Grid 
                item 
                xs={12} 
                md={4} 
                key={index}
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Paper
                  component={motion.div}
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  sx={{ 
                    borderRadius: 4,
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'background.paper',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <Box 
                    sx={{ 
                      bgcolor: 'primary.main',
                      p: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
                        zIndex: 1
                      }
                    }}
                  >
                    <Box 
                      component={motion.div}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                      sx={{ 
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        position: 'relative',
                        zIndex: 2,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                      }}
                    >
                      <LocationOnIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                    </Box>
                    <Typography 
                      variant="h5" 
                      color="white" 
                      fontWeight="bold" 
                      align="center"
                      sx={{ position: 'relative', zIndex: 2 }}
                    >
                      {office.country}
                    </Typography>
                  </Box>
                  <Box sx={{ p: 3, flexGrow: 1 }}>
                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                      <LocationOnIcon color="primary" sx={{ mt: 0.5 }} />
                      <Typography variant="body1">{office.address}</Typography>
                    </Box>
                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                      <PhoneIcon color="primary" />
                      <Typography variant="body1">{office.phone}</Typography>
                    </Box>
                    {office.email && (
                      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <EmailIcon color="primary" />
                        <Typography variant="body1">{office.email}</Typography>
                      </Box>
                    )}
                    <Button 
                      variant="contained" 
                      color="primary"
                      fullWidth
                      sx={{ 
                        mt: 2,
                        py: 1.5,
                        background: 'linear-gradient(90deg, #2E7D32 0%, #1976D2 100%)',
                        '&:hover': {
                          background: 'linear-gradient(90deg, #1B5E20 0%, #1565C0 100%)',
                        }
                      }}
                      component="a"
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<LocationOnIcon />}
                    >
                      View on Map
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Terms of Service Dialog */}
      <Dialog 
        open={openDialog.terms} 
        onClose={() => handleCloseDialog('terms')}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }
        }}
      >
        <DialogTitle sx={{ 
          pb: 1,
          background: 'linear-gradient(90deg, #2E7D32 0%, #1976D2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700
        }}>
          Terms of Service
        </DialogTitle>
        <DialogContent dividers>
          <List>
            <ListItem alignItems="flex-start" sx={{ px: 0 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <DescriptionIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Service Agreement"
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: 'block', mt: 1 }}
                  >
                    By engaging with our services, you agree to our professional standards and operational protocols. We maintain strict quality control measures and industry best practices to ensure optimal results. Our commitment to excellence is backed by comprehensive service agreements and performance guarantees.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start" sx={{ px: 0, mt: 2 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <DescriptionIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Project Terms"
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: 'block', mt: 1 }}
                  >
                    All projects are subject to our standard terms and conditions, including project timelines, deliverables, and quality standards. We ensure transparent communication throughout the project lifecycle and maintain professional documentation of all agreements and modifications.
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button 
            onClick={() => handleCloseDialog('terms')}
            variant="contained"
            sx={{
              background: 'linear-gradient(90deg, #2E7D32, #1976D2)',
              '&:hover': {
                background: 'linear-gradient(90deg, #1B5E20, #1565C0)'
              }
            }}
          >
            I Understand
          </Button>
        </DialogActions>
      </Dialog>

      {/* Privacy Policy Dialog */}
      <Dialog 
        open={openDialog.privacy} 
        onClose={() => handleCloseDialog('privacy')}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }
        }}
      >
        <DialogTitle sx={{ 
          pb: 1,
          background: 'linear-gradient(90deg, #2E7D32 0%, #1976D2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700
        }}>
          Privacy Policy
        </DialogTitle>
        <DialogContent dividers>
          <List>
            <ListItem alignItems="flex-start" sx={{ px: 0 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <SecurityIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Data Protection"
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: 'block', mt: 1 }}
                  >
                    We respect your privacy and maintain strict confidentiality regarding all project information. Your data is protected through industry-standard security measures and is used solely for project implementation and improvement purposes.
                  </Typography>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start" sx={{ px: 0, mt: 2 }}>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <SecurityIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Information Usage"
                secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    color="text.secondary"
                    sx={{ display: 'block', mt: 1 }}
                  >
                    We never share sensitive information with third parties without explicit consent. All personal and project data is handled in accordance with international data protection regulations and our strict internal privacy standards.
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button 
            onClick={() => handleCloseDialog('privacy')}
            variant="contained"
            sx={{
              background: 'linear-gradient(90deg, #2E7D32, #1976D2)',
              '&:hover': {
                background: 'linear-gradient(90deg, #1B5E20, #1565C0)'
              }
            }}
          >
            I Understand
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for form submission feedback */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;