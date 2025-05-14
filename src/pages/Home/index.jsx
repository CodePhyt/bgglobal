import { Box, Container, Typography, Button, Grid, Card, CardContent, Avatar, CardMedia } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link as RouterLink } from 'react-router-dom';
import HeroBackground from '../../components/HeroBackground';
import NewsGrid from '../../components/NewsGrid';

const Home = () => {
  const [testimonialRef, testimonialInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <HeroBackground />

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                fontWeight: 700,
                textAlign: 'center',
                mb: 4,
                fontSize: { xs: '2rem', md: '3.5rem' },
              }}
            >
              Innovative Solutions for Greenhouses
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                mt: 4,
              }}
            >
              <Button
                component={RouterLink}
                to="/solutions"
                variant="contained"
                size="large"
              >
                Our Solutions
              </Button>
              <Button
                component={RouterLink}
                to="/contact"
                variant="outlined"
                size="large"
                sx={{ color: 'white', borderColor: 'white' }}
              >
                Contact Us
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Intro Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Typography variant="h2" align="center" gutterBottom>
              Welcome to BG GLOBAL
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
            >
              Welcome to the official website of BG GLOBAL, your trusted partner in
              innovative greenhouse solutions. We specialize in delivering
              cutting-edge technology and sustainable practices to revolutionize
              agricultural production.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {[
              {
                title: 'Sustainable Projects',
                description:
                  'We prioritize environmental sustainability in all our projects, minimizing resource consumption while maximizing productivity. Our innovative approach ensures eco-friendly solutions that are both efficient and environmentally responsible.',
                image: '/images/solutions/real/bgglobal-Sustainable-growth-2.jpg'
              },
              {
                title: 'Smart Greenhouse Technology',
                description:
                  'Our advanced smart greenhouse solutions integrate automation, climate control, and data analytics for optimal performance. We implement cutting-edge technologies to ensure precise control and maximum yield for all crops.',
                image: '/images/solutions/real/bgglobal-smart-greenhouses-1.jpg'
              },
              {
                title: 'Energy Solutions',
                description:
                  'Providing cost-effective and innovative energy systems that reduce operational costs while increasing efficiency. Our sustainable approach integrates renewable resources and smart technologies for optimal performance.',
                image: '/images/solutions/real/Enerji.jpg'
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  <Box
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      bgcolor: 'background.default',
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.title}
                        sx={{
                          width: '100%',
                          height: 200,
                          objectFit: 'cover',
                          borderRadius: 1,
                          mb: 3,
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.05)'
                          }
                        }}
                      />
                      <Typography variant="h5" gutterBottom align="center" sx={{ mb: 2 }}>
                        {item.title}
                      </Typography>
                      <Typography color="text.secondary" align="center" sx={{ flexGrow: 1 }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* News Section */}
      <NewsGrid />

      {/* Statistics Section */}
      <Box sx={{ py: 10, bgcolor: 'background.default' }} ref={ref}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {[
              { label: 'COMPLETED PROJECTS', value: 28 },
              { label: 'ONGOING PROJECTS', value: 8 },
              { label: 'YEARS OF EXPERIENCE', value: 25 },
              { label: 'CUSTOMER HAPPINESS', value: '100%' }
            ].map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <Box 
                    sx={{ 
                      p: 4,
                      borderRadius: 3,
                      bgcolor: 'background.paper',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 3,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '4px',
                        background: 'linear-gradient(90deg, #2E7D32, #1976D2)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      },
                      '&:hover': {
                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)',
                        '&::after': {
                          opacity: 1
                        }
                      }
                    }}
                  >
                    <Typography 
                      variant="h2" 
                      color="primary.main" 
                      sx={{ 
                        fontSize: { xs: '2.75rem', md: '3.25rem' }, 
                        fontWeight: 800,
                        lineHeight: 1,
                        letterSpacing: '-0.5px',
                        background: 'linear-gradient(90deg, #2E7D32, #1976D2)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      color="text.secondary"
                      sx={{
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        lineHeight: 1.3,
                        textTransform: 'uppercase',
                        fontSize: { xs: '0.85rem', md: '0.95rem' },
                        flexShrink: 1
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }} ref={testimonialRef}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" align="center" gutterBottom>
              What Our Clients Say
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
            >
              Discover what our valued clients have to say about their experience working with BG GLOBAL
            </Typography>
          </motion.div>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              {
                name: 'Robert Anderson',
                role: 'Agriculture Technology Director',
                text: 'The innovative greenhouse solutions from BG GLOBAL have completely transformed our production capacity. Their commitment to sustainability aligns perfectly with our long-term vision for eco-friendly farming practices.',
                image: 'https://randomuser.me/api/portraits/men/32.jpg'
              },
              {
                name: 'Elena Martinez',
                role: 'Greenhouse Owner',
                text: 'Our partnership with BG GLOBAL has delivered extraordinary results. Their climate control technologies have increased our yields by 30%, while reducing energy consumption. The ROI we\'ve seen is remarkable!',
                image: 'https://randomuser.me/api/portraits/women/44.jpg'
              },
              {
                name: 'Michael Zhang',
                role: 'Operations & Logistics Manager',
                text: 'The professionalism of the BG GLOBAL team exceeded our expectations at every stage. From initial planning to implementation and after-service support, they\'ve been phenomenal partners in our greenhouse expansion.',
                image: 'https://randomuser.me/api/portraits/men/67.jpg'
              }
            ].map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={testimonialInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 3,
                      },
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          fontStyle: 'italic',
                          mb: 3,
                          color: 'text.primary',
                          lineHeight: 1.6,
                        }}
                      >
                        "{testimonial.text}"
                      </Typography>
                      <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                        <Avatar 
                          src={testimonial.image}
                          alt={testimonial.name}
                          sx={{ width: 56, height: 56, mr: 2 }}
                        />
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Project Highlights */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" align="center" gutterBottom>
              Featured Projects
            </Typography>
            <Typography
              variant="body1"
              align="center"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
            >
              Explore our latest innovative greenhouse projects around the world
            </Typography>
          </motion.div>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {[
              {
                title: 'Modern Greenhouse Complex',
                location: 'Netherlands',
                description: 'State-of-the-art Venlo-type greenhouse facility with advanced climate control systems and latest technology integration.',
                image: '/images/projects/real/Venlo-Type-Greenhouse-Netharland.jpg',
                projectId: 'venlo-type-greenhouse-netherlands'
              },
              {
                title: 'Poly Greenhouse Project',
                location: 'Turkey',
                description: 'Innovative poly greenhouse implementation for Oyak-Hektas with sustainable energy solutions and optimal crop production.',
                image: '/images/projects/real/BG-Poly-Type-Greenhouse-Turkey-Oyak-Hektas.jpg',
                projectId: 'bg-poly-type-greenhouse-turkey-oyak-hektas'
              },
              {
                title: 'Advanced Greenhouse Systems',
                location: 'Azerbaijan',
                description: 'Cutting-edge greenhouse facility in Sumgait with integrated automation and climate management for year-round production.',
                image: '/images/projects/real/BG-Poly-Type-Greenhouse-Azerbaijan-Sumgait-new.jpg',
                projectId: 'bg-poly-type-greenhouse-azerbaijan-sumgait'
              }
            ].map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="h5"
                          gutterBottom
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="primary.main"
                          gutterBottom
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 2,
                          }}
                        >
                          <LocationOnIcon fontSize="small" />
                          {project.location}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {project.description}
                      </Typography>
                      <Button
                        component={RouterLink}
                        to="/projects"
                        variant="outlined"
                        size="small"
                        endIcon={<ArrowForwardIcon />}
                        sx={{ mt: 'auto' }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 6,
            }}
          >
            <Button
              component={RouterLink}
              to="/projects"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
              }}
            >
              View All Projects
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          py: 8,
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom>
            Looking for collaboration?
          </Typography>
          <Typography align="center" paragraph>
            Let's discuss how we can help with your next project.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="outlined"
              size="large"
              sx={{ color: 'white', borderColor: 'white' }}
            >
              Let's talk
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;