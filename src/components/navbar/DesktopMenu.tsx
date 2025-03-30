import { Box, Button } from '@mui/material';
import { formattedId, PAGES_NAMES } from '../../utils/utils';
import { palette } from '../../utils/styleguide';
import { SupportedLanguages } from '../../utils/types';
import {
  useRosemaryNavigator,
  useScrollLogoPosition,
  useViewPort,
} from '../../utils/hook';
import { t } from 'i18next';
import { RosemaryNavbarLogo } from '../RosemaryNavbarLogo';

type DesktopMenuProps = {
  handleScroll: (sectionId: string) => void;
  handleLanguage: (lng: SupportedLanguages) => void;
  selectedLanguage: SupportedLanguages;
};

const ButtonSectionNavbar = ({
  page,
  onNavItemHandler,
  isScrolled,
  isDesktop,
}: {
  page: string;
  onNavItemHandler: (page: string) => void;
  isScrolled: boolean;
  isDesktop: boolean;
}) => {
  return (
    <Button
      key={page}
      onClick={() => onNavItemHandler(page)}
      sx={{
        color: palette.darkGreen,
        fontWeight: 'bold',
        fontSize: !isScrolled && isDesktop ? '25px' : '20px',
        transition: 'font-size 0.4s ease',
        textTransform: 'lowercase',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        '&:hover': {
          color: palette.purple,
          backgroundColor: 'transparent',
        },
      }}
    >
      {t(`navbar.${formattedId(page)}`)}
    </Button>
  );
};

export const DesktopMenu = ({
  handleScroll,
  handleLanguage,
  selectedLanguage,
}: DesktopMenuProps) => {
  const { isHomePage, navigateHomePage } = useRosemaryNavigator();
  const { isDesktop } = useViewPort();
  const isScrolled = useScrollLogoPosition();
  const onNavItemHandler = (page: string) => {
    if (page === 'menu' && !isHomePage) {
      navigateHomePage(page as 'menu');
    }
    handleScroll(formattedId(page));
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px',
      }}
    >
      {/* Sección Izquierda */}
      <Box sx={{ display: 'flex', flex: 1 }}>
        {PAGES_NAMES.slice(0, Math.floor(PAGES_NAMES.length / 2)).map(
          (page) => (
            <ButtonSectionNavbar
              key={page}
              page={page}
              onNavItemHandler={onNavItemHandler}
              isScrolled={isScrolled}
              isDesktop={isDesktop}
            />
          )
        )}
      </Box>
      <RosemaryNavbarLogo size={!isScrolled && isDesktop ? 'large' : 'small'} />
      {/* Sección Derecha */}
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        {PAGES_NAMES.slice(Math.floor(PAGES_NAMES.length / 2)).map((page) => (
          <ButtonSectionNavbar
            key={page}
            page={page}
            onNavItemHandler={onNavItemHandler}
            isScrolled={isScrolled}
            isDesktop={isDesktop}
          />
        ))}
        {/* Banderas de idioma */}
        <Box sx={{ ml: 2, display: 'flex', gap: 1 }}>
          <img
            src={`${process.env.PUBLIC_URL}/ukFlag.svg`}
            alt="UK Flag"
            width="30"
            height="30"
            onClick={() => handleLanguage('en')}
            style={{
              cursor: 'pointer',
              opacity: selectedLanguage === 'es' ? 0.3 : 1,
            }}
          />
          <img
            src={`${process.env.PUBLIC_URL}/spainFlag.svg`}
            alt="Spain Flag"
            width="30"
            height="30"
            onClick={() => handleLanguage('es')}
            style={{
              cursor: 'pointer',
              opacity: selectedLanguage === 'en' ? 0.3 : 1,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
