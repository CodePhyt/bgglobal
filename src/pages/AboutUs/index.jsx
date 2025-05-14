import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const whatWeDoBest = [
  {
    title: 'Greenhouse Construction',
    description: 'State-of-the-art greenhouse construction services with innovative designs and efficient layouts for optimal plant growth.',
    icon: '🏗️'
  },
  {
    title: 'Climate Control',
    description: 'Advanced climate control systems for optimal growing conditions, ensuring perfect temperature, humidity, and ventilation.',
    icon: '🌡️'
  },
  {
    title: 'Energy Solutions',
    description: 'Sustainable energy solutions for greenhouse operations, reducing costs and environmental impact while maximizing efficiency.',
    icon: '⚡'
  },
  {
    title: 'Automation',
    description: 'Cutting-edge automation systems for improved efficiency, reducing labor costs and increasing precision in all operations.',
    icon: '🤖'
  },
  {
    title: 'Consulting',
    description: 'Expert consulting services for greenhouse projects, from initial planning to implementation and ongoing optimization.',
    icon: '📊'
  },
  {
    title: 'Harvesting and Packaging',
    description: 'Complete solutions for post-harvest operations, ensuring product quality and efficient distribution to market.',
    icon: '📦'
  },
];

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box>
      {/* Banner Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '25vh', md: '35vh' },
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
          component="img"
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern Greenhouse Technology"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%'
          }}
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
            About Us
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
            Beyond conventional services
          </Typography>
        </Box>
      </Box>

      {/* Company History */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 4 }}>
          Our Story
        </Typography>
        <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          Founded in 2006 by <Link href="https://www.linkedin.com/in/mustafa-sert-37170aa6/" target="_blank" rel="noopener noreferrer" sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 600, '&:hover': { textDecoration: 'underline' } }}>Mustafa Sert</Link>, BG Global began its journey by importing insect nets from Spain for greenhouses in Antalya. 
          With Mustafa Sert's four years of experience in the Netherlands' greenhouse cultivation sector, the company quickly evolved from 
          an importer to a global supplier, now operating in countries from the USA to Japan.
        </Typography>
        <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          Since 2012, BG Global B.V., based in the Netherlands' Westland region, has been developing turnkey greenhouse projects, 
          closely following and integrating the latest technologies. Our support offices in the Netherlands and Turkey enable direct 
          communication with clients, providing fast and effective solutions.
        </Typography>
        <Typography paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          In 2010, a pivotal partnership with PESA Principal Consultant enhanced our expertise in greenhouse material supply. 
          By 2023, we expanded into the seed industry, taking charge of global business development for OYAK/HEKTAŞ Seeds.
        </Typography>
      </Container>

      {/* Major Projects */}
      <Box sx={{ 
        bgcolor: 'background.default', 
        py: { xs: 6, md: 10 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'linear-gradient(135deg, rgba(46, 125, 50, 0.05) 0%, rgba(25, 118, 210, 0.05) 100%)',
          zIndex: 0
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom 
            sx={{ 
              fontWeight: 700, 
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: 6,
              background: 'linear-gradient(90deg, #2E7D32 0%, #1976D2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 4,
                background: 'linear-gradient(90deg, #2E7D32 0%, #1976D2 100%)',
                borderRadius: 2
              }
            }}
          >
            Major Projects
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Box sx={{ 
                  p: 4, 
                  height: '100%',
                  minHeight: '300px',
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '5px',
                    height: '100%',
                    background: 'linear-gradient(to bottom, #2E7D32, #1976D2)',
                    borderTopLeftRadius: 12,
                    borderBottomLeftRadius: 12
                  }
                }}>
                  <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 700, mb: 3 }}>
                    Recent Achievements
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                    {[
                      'Baku Agropark – 10 ha – Azerbaijan, 2023',
                      'Oyak-Hektaş F.A.R.M. – 3.2 ha – Turkey, 2023',
                      'Zaure Group – 12 ha – Kazakhstan, 2022'
                    ].map((achievement, index) => (
                      <Box 
                        component="li" 
                        key={index}
                        sx={{ 
                          mb: 2,
                          fontSize: '1.05rem',
                          lineHeight: 1.6,
                          position: 'relative',
                          pl: 1
                        }}
                      >
                        {achievement}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Box sx={{ 
                  p: 4, 
                  height: '100%',
                  minHeight: '300px',
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '5px',
                    height: '100%',
                    background: 'linear-gradient(to bottom, #1976D2, #2E7D32)',
                    borderTopLeftRadius: 12,
                    borderBottomLeftRadius: 12
                  }
                }}>
                  <Typography variant="h5" gutterBottom sx={{ color: 'primary.main', fontWeight: 700, mb: 3 }}>
                    Global Partners
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                    {[
                      'Village Farms (USA / Canada / Mexico)',
                      'Pure Harvest (UAE)',
                      'Windset Farms (USA / Canada)',
                      'Natura Fresh Farms',
                      'Oyak-Hektaş'
                    ].map((partner, index) => (
                      <Box 
                        component="li" 
                        key={index}
                        sx={{ 
                          mb: 2,
                          fontSize: '1.05rem',
                          lineHeight: 1.6,
                          position: 'relative',
                          pl: 1
                        }}
                      >
                        {partner}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* What We Do Best */}
      <Box sx={{ 
        bgcolor: 'background.default', 
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
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
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              mb: 6,
              background: 'linear-gradient(90deg, #2E7D32 0%, #1976D2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 4,
                background: 'linear-gradient(90deg, #2E7D32 0%, #1976D2 100%)',
                borderRadius: 2
              }
            }}
          >
            This is what we do best
          </Typography>

          <Grid container spacing={4}>
            {whatWeDoBest.map((item, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                key={item.title}
                component={motion.div}
                custom={index}
                variants={cardVariants}
              >
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.02, y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  sx={{
                    p: 4,
                    height: '100%',
                    minHeight: '350px',
                    bgcolor: 'background.paper',
                    borderRadius: 3,
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.3s ease-in-out',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #2E7D32, #1976D2)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out'
                    },
                    '&:hover': {
                      boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
                      '&::before': {
                        opacity: 1
                      }
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                      background: 'linear-gradient(135deg, #2E7D32 0%, #1976D2 100%)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.1) rotate(5deg)'
                      }
                    }}
                  >
                    <Typography 
                      variant="h1" 
                      sx={{ 
                        fontSize: '2.5rem',
                        color: 'white',
                        lineHeight: 1
                      }}
                    >
                      {item.icon}
                    </Typography>
                  </Box>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      mb: 2,
                      color: 'primary.main'
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.7,
                      fontSize: '1rem',
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Additional Services */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4,
                height: '100%',
                minHeight: '350px',
                bgcolor: 'background.paper',
                borderRadius: 3,
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)'
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '5px',
                  height: '100%',
                  background: 'linear-gradient(to bottom, #2E7D32, #1976D2)',
                  borderTopLeftRadius: 12,
                  borderBottomLeftRadius: 12
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    background: 'linear-gradient(135deg, #2E7D32 0%, #1976D2 100%)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }}
                >
                  <Typography variant="h1" sx={{ fontSize: '1.5rem', color: 'white' }}>🌱</Typography>
                </Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: 'primary.main', 
                    fontWeight: 700,
                    fontSize: '1.5rem'
                  }}
                >
                  Food Industry Consultancy
                </Typography>
              </Box>
              <Typography 
                paragraph 
                sx={{ 
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  mb: 3
                }}
              >
                Drawing from our extensive expertise in agriculture and agribusiness, we deliver comprehensive consultancy services to industry leaders. Our specialized knowledge spans:
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 0, flex: 1 }}>
                {[
                  'Strategic raw material sourcing and supply chain optimization',
                  'Sustainable production methodologies and implementation',
                  'International market development and expansion strategies',
                  'Process optimization and efficiency enhancement',
                  'Quality control and certification compliance'
                ].map((item, index) => (
                  <Box 
                    component="li" 
                    key={index}
                    sx={{ 
                      mb: 2,
                      fontSize: '1.05rem',
                      lineHeight: 1.6,
                      color: 'text.secondary',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1,
                      '&::before': {
                        content: '"•"',
                        color: 'primary.main',
                        fontWeight: 'bold',
                        fontSize: '1.2rem'
                      }
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4,
                height: '100%',
                minHeight: '350px',
                bgcolor: 'background.paper',
                borderRadius: 3,
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)'
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '5px',
                  height: '100%',
                  background: 'linear-gradient(to bottom, #1976D2, #2E7D32)',
                  borderTopLeftRadius: 12,
                  borderBottomLeftRadius: 12
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                    background: 'linear-gradient(135deg, #1976D2 0%, #2E7D32 100%)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }}
                >
                  <Typography variant="h1" sx={{ fontSize: '1.5rem', color: 'white' }}>🌿</Typography>
                </Box>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: 'primary.main', 
                    fontWeight: 700,
                    fontSize: '1.5rem'
                  }}
                >
                  Seed Operations
                </Typography>
              </Box>
              <Typography 
                paragraph 
                sx={{ 
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.secondary',
                  mb: 3
                }}
              >
                Our seed division has evolved into a comprehensive global operation, marked by significant achievements:
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 0, flex: 1 }}>
                {[
                  'Global business development leadership for OYAK/HEKTAŞ Seeds',
                  'Strategic market development and expansion initiatives',
                  'Comprehensive sales and distribution network management',
                  'Innovation in seed technology and breeding programs',
                  'Sustainable agricultural practices implementation'
                ].map((item, index) => (
                  <Box 
                    component="li" 
                    key={index}
                    sx={{ 
                      mb: 2,
                      fontSize: '1.05rem',
                      lineHeight: 1.6,
                      color: 'text.secondary',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1,
                      '&::before': {
                        content: '"•"',
                        color: 'primary.main',
                        fontWeight: 'bold',
                        fontSize: '1.2rem'
                      }
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;