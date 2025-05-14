import { Box } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const HeroBackground = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video playback failed:", error);
        // Fallback to image if video fails to play
      });
    }
  }, []);
  
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: 'rgba(0, 0, 0, 0.1)',
          zIndex: 1,
        },
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          y,
        }}
      >
        <video
          ref={videoRef}
          muted
          playsInline
          autoPlay
          loop
          poster="/images/hero-bg.svg"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src="/Ana Sayfa Video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <Box
          component="img"
          src="/images/hero-bg.svg"
          alt="Hero Background"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
            display: 'block',
          }}
        />
      </motion.div>
    </Box>
  );
};

export default HeroBackground;