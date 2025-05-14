import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const solutionCategories = [
  {
    title: 'Horti',
    description: 'Complete turnkey greenhouse construction projects and solutions.',
    path: '/solutions/horti',
    image: '/images/solutions/real/bgglobal-smart-greenhouses-1.jpg'
  },
  {
    title: 'Climate',
    description: 'Creating the optimum greenhouse climate for your crops.',
    path: '/solutions/climate',
    image: '/images/solutions/real/bgglobal-Sustainable-growth-2.jpg'
  },
  {
    title: 'Energy',
    description: 'Sustainable and efficient energy solutions for greenhouses.',
    path: '/solutions/energy',
    image: '/images/solutions/real/Enerji.jpg'
  },
];

const Solutions = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        component={motion.div}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        sx={{ py: 8, bgcolor: 'background.paper' }}
      >
        <Container maxWidth="lg">
          <Typography 
            component={motion.h1}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            variant="h1" 
            align="center" 
            gutterBottom
          >
            Solutions
          </Typography>
          <Typography
            component={motion.h2}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Our Solutions
          </Typography>
          <Typography 
            component={motion.p}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            align="center" 
            color="text.secondary" 
            sx={{ mb: 6 }}
          >
            BG Global supplies complete turnkey greenhouse construction projects
            worldwide, focusing on innovation and sustainability.
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
        sx={{ py: 8 }}
      >
        <Grid container spacing={4}>
          {solutionCategories.map((solution, index) => (
            <Grid 
              item 
              xs={12} 
              md={4} 
              key={solution.title}
              component={motion.div}
              custom={index}
              variants={cardVariants}
            >
              <Box
                component={motion.div}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                sx={{
                  p: 0,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
                  }
                }}
              >
                <Box 
                  component="img"
                  src={solution.image}
                  alt={solution.title}
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
                <Box sx={{ p: 4 }}>
                  <Typography 
                    variant="h4" 
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
                    sx={{ mb: 4, flexGrow: 1, lineHeight: 1.7 }}
                  >
                    {solution.description}
                  </Typography>
                  <Button
                    component={RouterLink}
                    to={solution.path}
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      py: 1.5,
                      px: 4,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 600,
                      '&:hover': {
                        transform: 'scale(1.02)'
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Looking for collaboration?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Solutions;