import { Box, Container, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const climateSolutions = [
  {
    title: 'BG Climate System',
    description: 'Thanks to the BG Climate system, mixing two airflows is no longer a problem. Our advanced climate control systems ensure optimal growing conditions for your crops.',
    image: '/images/climate/climate-system.svg'
  },
  {
    title: 'CO2 systems',
    description: 'BG Global supplies advanced CO2 systems for your greenhouse to promote crop growth and increase yields. Our systems ensure efficient and precise CO2 management.',
    image: '/images/climate/co2-system.svg'
  },
  {
    title: 'Geothermal Heat Connections',
    description: 'We rely on our experience and expertise of the most innovative technologies to individually design every energy project. Our geothermal solutions provide sustainable heating.',
    image: '/images/climate/geothermal.svg'
  },
  {
    title: 'Heating and Cooling Systems',
    description: 'Optimum integration of your greenhouse and technology creates the best climate for your crop. Our comprehensive temperature control solutions ensure perfect growing conditions.',
    image: '/images/climate/heating-cooling.svg'
  },
  {
    title: 'Semi-Closed Greenhouse Concepts',
    description: 'BG Global is your supplier of custom-made semi-closed greenhouse concepts that meet all your needs. Our innovative systems provide optimal climate control while maximizing energy efficiency.',
    image: '/images/climate/semi-closed.svg'
  },
];

const Climate = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
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
            content: '"\"',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.05) 0%, rgba(25, 118, 210, 0.05) 100%)',
            zIndex: 0
          },
          '&::after': {
            content: '"\"',
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
            Climate
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
            Our Climate Solutions
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
            BG Global is the leading specialist in creating the optimum greenhouse climate. The climate determines the quality and quantity of your production. Both optimum production conditions and minimum energy consumption are important for sustainable growth.
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
        sx={{ py: { xs: 6, md: 10 } }}
      >
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {climateSolutions.map((solution, index) => (
            <Grid item xs={12} md={6} key={solution.title}>
              <Box
                component={motion.div}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                sx={{
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                    '& img': {
                      transform: 'scale(1.05)'
                    }
                  }
                }}
              >
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

export default Climate;