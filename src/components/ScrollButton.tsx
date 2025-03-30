import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { palette } from '../utils/styleguide';
import { handleScrollTo, ZERO } from '../utils/utils';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop > 100 && scrollTop + windowHeight < documentHeight - 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button
      onClick={() => handleScrollTo(ZERO)}
      sx={{
        position: 'fixed',
        bottom: { xs: '16px', md: '24px' },
        right: { xs: '16px', md: '24px' },
        zIndex: 900,
        fontSize: { xs: '12px', md: '16px' },
        padding: { xs: '8px', md: '12px' },
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        backgroundColor: palette.darkPurple,
      }}
      variant="contained"
    >
      <KeyboardArrowUpIcon sx={{ color: palette.white }} />
    </Button>
  );
};

export default ScrollToTopButton;
