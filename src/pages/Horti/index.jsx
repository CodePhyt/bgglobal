import { Box, Container, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const hortiSolutions = [
  {
    title: 'Artificial / LED lighting',
    description: 'Artificial lighting technology used to cultivate plants in greenhouses and get them to flower. Our advanced LED solutions provide optimal light spectrums for plant growth.',
    image: '/images/horti/led-lighting.svg'
  },
  {
    title: 'Climate Installations',
    description: 'Optimum integration of your greenhouse and technology creates the best climate for your crop. Our climate installations ensure perfect growing conditions year-round.',
    image: '/images/horti/climate-control.svg'
  },
  {
    title: 'Complete Greenhouse Construction',
    description: 'BG Global realizes greenhouse construction projects anywhere in the world, complete with all installations. Our turnkey solutions ensure seamless project execution.',
    image: '/images/horti/greenhouse-construction.svg'
  },
  {
    title: 'Greenhouse Structures',
    description: 'Investing in BG Global greenhouse concepts means investing in technically sophisticated and sustainable solutions. Our structures are built to last and optimize growing conditions.',
    image: '/images/horti/greenhouse-structure.svg'
  },
  {
    title: 'In-house logistics',
    description: 'For optimal utilization of the available greenhouse area, BG Global offers various logistical cultivation solutions that streamline operations and maximize efficiency.',
    image: '/images/horti/logistics-water.svg'
  },
  {
    title: 'Screen Installations',
    description: 'The screen, heating, irrigation, and cooling systems have a significant impact on the crop\'s environment. Our screen installations provide optimal climate control and energy savings.',
    image: '/images/horti/screen-installation.svg'
  },
  {
    title: 'Training and Project Management',
    description: 'From the very first advice to completion, you have a single point of contact. Our comprehensive training and management services ensure project success.',
    image: '/images/horti/training.svg'
  },
  {
    title: 'Water and Electrical Installations',
    description: 'The quality and reliability of water systems and electrical installations in horticulture is crucial. We provide complete, reliable solutions for all your infrastructure needs.',
    image: '/images/horti/water-electrical.svg'
  },
];

const Horti = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: 'easeOut'
      }
    })
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        sx={{ 
          py: { xs: 10, md: 16 }, 
          bgcolor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'divider',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.05) 0%, rgba(25, 118, 210, 0.05) 100%)',
            zIndex: 0
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.05) 1px, transparent 0)',
            backgroundSize: '20px 20px',
            zIndex: 1,
            opacity: 0.5
          }
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h1" 
            align="center" 
            component={motion.h1}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            sx={{
              fontSize: { xs: '2.75rem', md: '4rem' },
              fontWeight: 800,
              mb: 3,
              background: 'linear-gradient(90deg, #2E7D32 0%, #1976D2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Horticulture
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component={motion.h2}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            sx={{
              fontSize: { xs: '1.35rem', md: '1.75rem' },
              fontWeight: 600,
              mb: 4,
              letterSpacing: '0.5px'
            }}
          >
            Advanced Greenhouse Technology & Solutions
          </Typography>
          <Typography 
            align="center" 
            color="text.secondary"
            component={motion.p}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            sx={{ 
              mb: 8,
              maxWidth: '900px',
              mx: 'auto',
              lineHeight: 2,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              letterSpacing: '0.3px'
            }}
          >
            BG Global delivers state-of-the-art greenhouse solutions worldwide, integrating cutting-edge technology with sustainable practices. Our comprehensive approach combines technical sophistication with environmental responsibility, creating optimal growing environments that drive success. Backed by our Climate department's expertise, we continuously innovate to build sustainable platforms for agricultural excellence.
          </Typography>
        </Container>
      </Box>

      {/* Solutions Grid */}
      <Container 
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        maxWidth="lg" 
        sx={{ 
          py: { xs: 8, md: 12 },
          position: 'relative'
        }}
      >
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {hortiSolutions.map((solution, index) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              md={6} 
              key={solution.title}
              component={motion.div}
              custom={index}
              variants={cardVariants}
            >
              <Box
                sx={{
                  p: { xs: 4, md: 5 },
                  height: '100%',
                  bgcolor: 'background.paper',
                  borderRadius: 4,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #2E7D32 0%, #1976D2 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out'
                  },
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
                    '& img': {
                      transform: 'scale(1.08)'
                    },
                    '&::before': {
                      opacity: 1
                    }
                  }
                }}
              >
                <Box
                  component="img"
                  src={solution.image}
                  alt={solution.title}
                  sx={{
                    width: '100%',
                    maxWidth: { xs: 160, md: 200 },
                    height: 'auto',
                    mb: 3,
                    mx: 'auto',
                    display: 'block',
                    transition: 'transform 0.3s ease-in-out'
                  }}
                />
                <Typography 
                  variant="h5" 
                  component="h2" 
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    mb: 2
                  }}
                >
                  {solution.title}
                </Typography>
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {solution.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Horti;