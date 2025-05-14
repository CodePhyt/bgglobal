import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Chip, Button, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import DescriptionIcon from '@mui/icons-material/Description';

const projects = [
  {
    title: 'BG Polly Greenhouse Russia',
    location: 'Russia',
    status: 'Completed',
    image: '/images/projects/real/Bg-Polly-Greenhouse-Russia-1.jpg'
  },
  {
    title: 'Venlo Type Greenhouse Netherlands',
    location: 'Netherlands',
    status: 'Completed',
    image: '/images/projects/real/Venlo-Type-Greenhouse-Netharland.jpg'
  },
  {
    title: 'Venlo Type Greenhouse Russia',
    location: 'Russia',
    status: 'Completed',
    image: '/images/projects/real/Venlo-Type-Greenhouse-Russia.jpg'
  },
  {
    title: 'Venlo Type Greenhouse Azerbaijan Plant Life',
    location: 'Azerbaijan',
    status: 'Completed',
    image: '/images/projects/real/Venlo-Type-Greenhouse-Azerbaijan-Plant-Life-2.jpg'
  },
  {
    title: 'Venlo Type Greenhouse Kazakhstan Green Technology',
    location: 'Kazakhstan',
    status: 'Completed',
    image: '/images/projects/real/Venlo-Type-Greenhouse-Kazakhstan-Green-Technology-ne.jpg'
  },
  {
    title: 'BG Poly Type Greenhouse Turkmenia',
    location: 'Turkmenia',
    status: 'Completed',
    image: '/images/projects/real/BG-Poly-Type-Greenhouse-Kazakhstan-Zaure-Group.jpg'
  },
  {
    title: 'Venlo Type Greenhouse Kazakhstan Almedia',
    location: 'Kazakhstan',
    status: 'Completed',
    image: '/images/projects/real/Venlo-Type-Greenhouse-Kazakhstan-Almedia-2.jpg'
  },
  {
    title: 'BG Poly Type Greenhouse Turkmenia Mizemez',
    location: 'Turkmenia',
    status: 'Completed',
    image: '/images/projects/real/Venlo-Type-Greenhouse-Russia-new-1.jpg'
  },
  {
    title: 'BG Poly Type Greenhouse Azerbaijan Sumgait',
    location: 'Azerbaijan',
    status: 'Completed',
    image: '/images/projects/real/BG-Poly-Type-Greenhouse-Azerbaijan-Sumgait-1.jpg'
  },
  {
    title: 'BG Poly Type Greenhouse Turkey Oyak',
    location: 'Turkey',
    status: 'Completed',
    image: '/images/projects/real/BG-Poly-Type-Greenhouse-Turkey-Oyak-1.jpg'
  },
  {
    title: 'BG Poly Type Greenhouse Turkey Oyak Hektas',
    location: 'Turkey',
    status: 'Completed',
    image: '/images/projects/real/BG-Poly-Type-Greenhouse-Turkey-Oyak-Hektas.jpg'
  },
  {
    title: 'Garden Center Kazakhstan',
    location: 'Kazakhstan',
    status: 'Completed',
    image: '/images/projects/real/Garden-Center-Kazakhstan-1.jpg'
  }
];

const projectStrategy = [
  {
    title: 'Market Research',
    description: 'Comprehensive analysis of local and global market trends, consumer demands, and competitive landscape to identify optimal opportunities.',
    icon: '📊'
  },
  {
    title: 'Product Selection',
    description: 'Strategic selection of high-yield, market-demanded crops based on climate compatibility, profitability, and sustainability factors.',
    icon: '🌱'
  },
  {
    title: 'Cultivation Techniques',
    description: 'Implementation of advanced growing methods including hydroponics, vertical farming, and precision agriculture for maximum efficiency.',
    icon: '🌿'
  },
  {
    title: 'Soil and Fertilization',
    description: 'Expert soil management and nutrient optimization using sustainable practices and advanced fertilization systems.',
    icon: '💧'
  },
  {
    title: 'Disease and Pest Control',
    description: 'Integrated pest management combining biological controls, monitoring systems, and preventive measures for healthy crops.',
    icon: '🛡️'
  },
  {
    title: 'Irrigation and Climate Control',
    description: 'State-of-the-art climate control systems ensuring optimal temperature, humidity, and ventilation for year-round production.',
    icon: '🌡️'
  },
  {
    title: 'Productivity Optimization',
    description: 'Continuous monitoring and improvement of production processes to maximize yield and resource efficiency.',
    icon: '📈'
  },
  {
    title: 'Harvest and Storage',
    description: 'Advanced harvesting techniques and controlled atmosphere storage systems to maintain product quality and extend shelf life.',
    icon: '📦'
  },
  {
    title: 'Quality Control',
    description: 'Rigorous quality assurance protocols ensuring consistent product standards and food safety compliance.',
    icon: '✅'
  },
  {
    title: 'Innovation and Technology',
    description: 'Integration of cutting-edge technologies including automation, IoT sensors, and AI-driven analytics.',
    icon: '🤖'
  },
  {
    title: 'Cost Management',
    description: 'Strategic resource allocation and operational optimization to maintain competitive pricing and maximize ROI.',
    icon: '💰'
  },
  {
    title: 'Sustainability Strategy',
    description: 'Implementation of eco-friendly practices including renewable energy, water conservation, and waste reduction.',
    icon: '🌍'
  }
];

const Projects = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  const handleOpenDialog = (strategy) => {
    setSelectedStrategy(strategy);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedStrategy(null);
  };

  const containerVariants = {
    initial: { opacity: 1, y: 0 },
    animate: {
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
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

  return (
    <Box>
      {/* Video Banner Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '50vh', md: '70vh' },
          width: '100%',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5))',
            zIndex: 1
          }
        }}
      >
        <Box
          component="iframe"
          src="https://www.youtube.com/embed/9oy0K7iF0aw?autoplay=1&mute=1&controls=0&loop=1&playlist=9oy0K7iF0aw"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100vw',
            height: '56.25vw', // 16:9 aspect ratio
            minHeight: '100%',
            minWidth: '177.77vh', // 16:9 aspect ratio
            border: 'none',
            pointerEvents: 'none'
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            zIndex: 2,
            width: '100%',
            px: 2
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              maxWidth: '800px',
              mx: 'auto',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}
          >
            Professional Greenhouse Experience
          </Typography>
        </Box>
      </Box>

      {/* Projects Grid */}
      <Container 
        component={motion.div}
        initial="initial"
        animate="animate"
        variants={containerVariants}
        maxWidth="lg" 
        sx={{ 
          py: { xs: 8, md: 12 },
          position: 'relative'
        }}>
        <Typography variant="h4" gutterBottom align="center">
          Our Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <motion.div
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                    loading="lazy"
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)'
                      }
                    }}
                  />
                  <CardContent>
                    <Box sx={{ mb: 2 }}>
                      <Typography 
                        variant="h6" 
                        component="h2" 
                        gutterBottom
                        sx={{
                          fontSize: '1.25rem',
                          fontWeight: 700,
                          lineHeight: 1.4,
                          minHeight: '2.8em'
                        }}
                      >
                        {project.title}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography 
                        variant="body1" 
                        color="text.secondary"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            bgcolor: 'primary.main',
                            display: 'inline-block'
                          }}
                        />
                        {project.location}
                      </Typography>
                      <Chip
                        label={project.status}
                        color="success"
                        size="small"
                        sx={{
                          fontWeight: 600,
                          borderRadius: '16px'
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Project Strategy */}
      <Box 
        component={motion.div}
        initial="initial"
        animate="animate"
        variants={containerVariants}
        sx={{ 
          bgcolor: 'background.paper', 
          py: { xs: 10, md: 16 },
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(135deg, rgba(46, 125, 50, 0.03) 0%, rgba(25, 118, 210, 0.03) 100%)',
            zIndex: 0
          }
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(90deg, #2E7D32 0%, #1976D2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Our Project Strategy
          </Typography>
          <Typography 
            align="center" 
            paragraph
            sx={{
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              mb: 8
            }}
          >
            We use our greenhouse production strategy to ensure success in every
            project.
          </Typography>
          
          <Box
            sx={{
              position: 'relative',
              py: 4,
              mb: 6,
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, rgba(46, 125, 50, 0.4), rgba(25, 118, 210, 0.4))',
                zIndex: 0
              }
            }}
          >
            <Grid container spacing={3}>
              {projectStrategy.map((strategy, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    variants={cardVariants}
                    custom={index}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  >
                    <Box
                      onClick={() => handleOpenDialog(strategy)}
                      sx={{
                        p: 3,
                        bgcolor: 'background.default',
                        borderRadius: 2,
                        boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        mx: 'auto',
                        mb: 2,
                        position: 'relative',
                        zIndex: 1,
                        transition: 'all 0.3s ease-in-out',
                        border: '1px solid',
                        borderColor: 'background.paper',
                        minHeight: '200px',
                        maxHeight: '220px',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        '&:hover': {
                          boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
                          borderColor: 'primary.main',
                          transform: 'scale(1.02)',
                          '& .description': {
                            opacity: 1,
                            transform: 'translateY(0)'
                          }
                        }
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          mb: 1.5,
                          width: '100%'
                        }}
                      >
                        <Typography 
                          variant="h1"
                          sx={{
                            fontSize: '2rem',
                            color: 'primary.main'
                          }}
                        >
                          {strategy.icon}
                        </Typography>
                        <Typography 
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            fontSize: '1.25rem',
                            color: 'text.primary',
                            lineHeight: 1.3,
                            textAlign: 'left',
                            flex: 1
                          }}
                        >
                          {strategy.title}
                        </Typography>
                      </Box>
                      <Typography 
                        variant="body1"
                        className="description"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          fontSize: '1rem',
                          opacity: 0.9,
                          transform: 'translateY(4px)',
                          transition: 'all 0.3s ease-in-out',
                          textAlign: 'left',
                          width: '100%'
                        }}
                      >
                        {strategy.description}
                      </Typography>
                    </Box>
                    <Box
                      component={motion.div}
                      whileHover={{ scale: 1.1 }}
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        bgcolor: index % 2 === 0 ? '#2E7D32' : '#1976D2',
                        mx: 'auto',
                        mt: 1,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      }}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
          
          {/* Terms and Privacy Dialog */}
          <Dialog 
            open={openDialog} 
            onClose={handleCloseDialog}
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
              {selectedStrategy?.title} - Terms & Privacy
            </DialogTitle>
            <DialogContent dividers>
              <List>
                <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <DescriptionIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Terms of Service"
                    secondary={
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                        sx={{ display: 'block', mt: 1 }}
                      >
                        By engaging with our {selectedStrategy?.title.toLowerCase()} services, you agree to our professional standards and operational protocols. We maintain strict quality control measures and industry best practices to ensure optimal results. Our commitment to excellence is backed by comprehensive service agreements and performance guarantees.
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem alignItems="flex-start" sx={{ px: 0, mt: 2 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <SecurityIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Privacy Policy"
                    secondary={
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.secondary"
                        sx={{ display: 'block', mt: 1 }}
                      >
                        We respect your privacy and maintain strict confidentiality regarding all project information. Your data is protected through industry-standard security measures and is used solely for project implementation and improvement purposes. We never share sensitive information with third parties without explicit consent.
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </DialogContent>
            <DialogActions sx={{ px: 3, py: 2 }}>
              <Button 
                onClick={handleCloseDialog}
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

          <Box sx={{ mt: 10, textAlign: 'center' }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                background: 'linear-gradient(90deg, #2E7D32, #1976D2)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
                }
              }}
            >
              Discuss Your Project
            </Button>
          </Box>
        </Container>
      </Box>


    </Box>
  );
};

export default Projects;