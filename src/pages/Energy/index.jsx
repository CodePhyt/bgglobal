import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const energySolutions = [
  {
    title: 'District Heating',
    description: 'Our district heating systems use renewable energy sources and help reduce CO2 emissions. We provide efficient and sustainable heating solutions for greenhouse complexes.',
    image: '/images/energy/district-heating.svg'
  },
  {
    title: 'Sustainable Green Energy Networks',
    description: 'BG Global has extensive experience in designing and constructing heat and cooling networks for industry and greenhouse horticulture, helping combat world climate condition changes.',
    image: '/images/energy/sustainable-energy.svg'
  },
  {
    title: 'Photovoltaic System',
    description: 'Our solar system is a durable and structurally strong self-supporting greenhouse structure specifically designed to integrate framed and unframed solar panels in Venlo and wide-span greenhouses. We determine the most optimal use of solar panels based on your specific needs.',
    image: '/images/energy/photovoltaic.svg'
  },
  {
    title: 'Heat Exchangers and Heat Pumps',
    description: 'BG Global supplies high-quality heat exchangers and pumps for various applications, ensuring optimal energy transfer and efficiency in your greenhouse operations.',
    image: '/images/energy/heat-exchanger.svg'
  },
  {
    title: 'Energy Efficiency',
    description: 'We believe in using only the highest-quality materials and partnering with trusted brands for our heating systems. Our solutions ensure reliable performance while promoting environmentally friendly practices.',
    image: '/images/energy/energy-efficiency.svg'
  },
];

const Energy = () => {
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
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/images/energy/energy-solutions-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
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
            gutterBottom
            component={motion.h1}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{
              fontSize: { xs: '2.75rem', md: '4rem' },
              fontWeight: 800,
              mb: 3,
              background: 'linear-gradient(90deg, #FF8F00 0%, #E53935 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Energy
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component={motion.h2}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            sx={{
              fontSize: { xs: '1.35rem', md: '1.75rem' },
              fontWeight: 600,
              mb: 4,
              letterSpacing: '0.5px'
            }}
          >
            Our Energy Solutions
          </Typography>
          <Typography 
            align="center" 
            color="text.secondary"
            component={motion.p}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            sx={{ 
              mb: 8,
              maxWidth: '900px',
              mx: 'auto',
              lineHeight: 2,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              letterSpacing: '0.3px'
            }}
          >
            BG Global has over half a century of experience in heating systems, and in designing and installing heat networks for industry and horticulture. We're at the forefront of the latest applications and technologies, carrying out entire projects with care and dedication. Sustainability is maximized by using waste heat and geothermal energy.
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
          {energySolutions.map((solution, index) => (
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

      {/* Additional Info */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 8 }, borderTop: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 3,
              fontSize: { xs: '1.75rem', md: '2rem' }
            }}
          >
            Sustainable Energy Solutions
          </Typography>
          <Typography 
            align="center" 
            color="text.secondary"
            sx={{
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.8,
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}
          >
            Our commitment to sustainability drives us to develop and implement
            innovative energy solutions that reduce environmental impact while
            maximizing efficiency and productivity.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Energy;