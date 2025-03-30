import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { CustomShapeDivider } from '../WaveSeparator';
import { palette } from '../../utils/styleguide';
import { InstagramLink } from '../ContactUsIcons';
import Grid from '@mui/material/Grid2';
import { useTranslation } from 'react-i18next';
import { HomePageScrollSections, SupportedLanguages } from '../../utils/types';
import { useRosemaryNavigator } from '../../utils/hook';
import { formattedId, PAGES_NAMES } from '../../utils/utils';

type SmallMenuProps = {
  handleLanguage: (lng: SupportedLanguages) => void;
  handleDrawerToggle: () => void;
  drawerOpen: boolean;
  selectedLanguage: SupportedLanguages;
};

export const SmallMenu = ({
  handleLanguage,
  handleDrawerToggle,
  drawerOpen,
  selectedLanguage,
}: SmallMenuProps) => {
  const { t } = useTranslation();
  const { navigateHomePage } = useRosemaryNavigator();

  const onNavItemHandler = (page: HomePageScrollSections) => {
    navigateHomePage(page);

    handleDrawerToggle();
  };

  return (
    <>
      <IconButton
        size="large"
        onClick={handleDrawerToggle}
        sx={{ color: palette.purple }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          zIndex: 6000,
          '& .MuiDrawer-paper': {
            height: '100%',
            position: 'relative',
            backgroundColor: palette.lightGreen,
          },
        }}
        transitionDuration={{
          enter: 500,
          exit: 500,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <IconButton onClick={handleDrawerToggle} color="inherit">
            <CloseIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            zIndex: 7000,
          }}
        >
          <List
            sx={{
              '& .MuiListItem-root': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                padding: 2,
              },
              '& .MuiListItemText-root .MuiTypography-root': {
                fontSize: '2rem',
                textAlign: 'center',
                fontWeight: 200,
              },
            }}
          >
            {PAGES_NAMES.map((page) => {
              const translatedPage = t(`navbar.${formattedId(page)}`);
              return (
                <ListItem
                  component="li"
                  key={page}
                  onClick={() =>
                    onNavItemHandler(page as HomePageScrollSections)
                  }
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    color: palette.darkGreen,
                    textTransform: 'lowercase',
                    '&:hover': {
                      color: palette.purple,
                    },
                    '& .MuiListItemText-root .MuiTypography-root': {
                      fontWeight: 'bold',
                    },
                  }}
                >
                  <ListItemText primary={translatedPage} />
                </ListItem>
              );
            })}

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <img
                src={`${process.env.PUBLIC_URL}/ukFlag.svg`}
                alt="UK Flag"
                width="30"
                height="30"
                onClick={() => handleLanguage('en')}
                style={{
                  cursor: 'pointer',
                  marginRight: '10px',
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
                  marginRight: '10px',
                  opacity: selectedLanguage === 'en' ? 0.3 : 1,
                }}
              />
            </Grid>
          </List>
        </Box>
        <Box
          sx={{
            bottom: 200,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <InstagramLink />
        </Box>
        <CustomShapeDivider
          bgColor={palette.lightGreen}
          shapeColor="transparent"
        />
      </Drawer>
    </>
  );
};

export default SmallMenu;
