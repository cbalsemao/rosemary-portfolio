import { useMediaQuery } from '@mui/material';
import { theme } from './styleguide';
import { getOffsetBySectionId, handleScrollTo, ZERO } from './utils';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HomePageScrollSections } from './types';

export const useViewPort = () => {
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'xl'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const dynamicHeight = () => {
    switch (true) {
      case isDesktop:
        return '700px';
      case isTablet:
        return '500px';
      case isMobile:
        return '300px';
      default:
        return '800px';
    }
  };

  const dynamicPadding = () => {
    switch (true) {
      case isDesktop:
        return 40;
      case isTablet:
        return 30;
      case isMobile:
        return 10;
      default:
        return 40;
    }
  };

  return { isDesktop, isTablet, isMobile, dynamicHeight, dynamicPadding };
};

export const useScrollToTop = () => {
  useEffect(() => {
    handleScrollTo(ZERO);
  }, []);
};

export const useRosemaryNavigator = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateHomePage = (withScrollableSection?: HomePageScrollSections) => {
    navigate('/');
    if (!withScrollableSection) return;
    setTimeout(() => {
      const targetOffset = getOffsetBySectionId(withScrollableSection);
      handleScrollTo(targetOffset);
    }, 300);
  };

  const navigateCookiesPolicy = () => {
    navigate('/cookie-policy');
  };

  const isHomePage = location.pathname === '/';

  return {
    isHomePage,
    navigateHomePage,

    navigateCookiesPolicy,
  };
};

export const useScrollLogoPosition = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrolled;
};
