import { useState } from 'react';
import { Box } from '@mui/material';
import { getOffsetBySectionId, handleScrollTo } from '../../utils/utils';
import { useScrollLogoPosition, useViewPort } from '../../utils/hook';
import { useTranslation } from 'react-i18next';
import { NavbarWrapper } from './NavbarWrapper';
import { SupportedLanguages } from '../../utils/types';
import { DesktopMenu } from './DesktopMenu';
import SmallMenu from './SmallMenu';
import { RosemaryNavbarLogo } from '../RosemaryNavbarLogo';

const Navbar = () => {
  const { i18n } = useTranslation();
  const selectedLanguage = i18n.language as SupportedLanguages;
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { isDesktop, isTablet } = useViewPort();

  const handleLanguage = (lng: SupportedLanguages) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleScroll = (sectionId: string) => {
    const topOffsetPosition = getOffsetBySectionId(sectionId);
    handleScrollTo(topOffsetPosition);
    setDrawerOpen(false);
  };

  const commonMenuProps = {
    handleScroll,
    handleLanguage,
    selectedLanguage,
  };
  return (
    <>
      <NavbarWrapper>
        {isTablet || isDesktop ? (
          <DesktopMenu {...commonMenuProps} />
        ) : (
          <Box
            sx={{ display: 'flex', marginLeft: 'auto', alignItems: 'center' }}
          >
            <RosemaryNavbarLogo size={'small'} />
            <SmallMenu
              {...commonMenuProps}
              drawerOpen={drawerOpen}
              handleDrawerToggle={handleDrawerToggle}
            />
          </Box>
        )}
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
