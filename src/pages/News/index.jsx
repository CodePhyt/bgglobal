import { Box, Container, Typography } from '@mui/material';

const News = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h1" align="center" gutterBottom>
            News
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Stay Updated
          </Typography>
          <Typography align="center" color="text.secondary" sx={{ mb: 6 }}>
            Coming Soon - Check back later for the latest updates and news from BG
            Global.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default News;