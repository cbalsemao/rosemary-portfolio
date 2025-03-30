import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ReactNode } from 'react';
import { palette } from '../../utils/styleguide';
import { useScrollLogoPosition } from '../../utils/hook';

export const paddingResponsive = {
  sm: 2,
  md: 5,
  lg: 20,
};

export const NavbarWrapper = ({ children }: { children: ReactNode }) => {
  const isScrolled = useScrollLogoPosition();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: palette.white,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          paddingRight: paddingResponsive,
          paddingLeft: paddingResponsive,
          height: {
            xs: '100px',
            md: isScrolled ? '100px' : '180px',
          },
          transition: 'height 0.4s ease',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {children}
        </Toolbar>
      </AppBar>
    </>
  );
};
