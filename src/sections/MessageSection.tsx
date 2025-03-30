import { Box, styled, Typography } from '@mui/material';
import { palette } from '../utils/styleguide';
import { useTranslation } from 'react-i18next';
import { useScrollLogoPosition } from '../utils/hook';
import { paddingResponsive } from '../components/navbar/NavbarWrapper';

const BoxStyled = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid white;
  border-radius: 2px;
  z-index: 0;
`;

const BoxContainerStyled = styled(Box)`
  background-color: ${palette.lightPurple};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxTextStyled = styled(Box)`
  text-align: center;
  color: ${palette.darkWhite};
  padding: ${({ theme }) => theme.spacing(6)};
  max-width: 80%;
  position: relative;
  display: inline-block;
`;

const TextStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.0rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.0rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '3rem',
  },
  lineHeight: 1.4,
  letterSpacing: 0.5,
  position: 'relative',
  zIndex: 1,
}));

const MessageSection = () => {
  const { t } = useTranslation();
  const isScrolled = useScrollLogoPosition();
  return (
    <BoxContainerStyled
      sx={{
        marginTop: {
          xs: '100px',
          md: isScrolled ? '100px' : '180px',
        },
        padding: 2,
        paddingTop: 4,
      }}
    >
      <BoxTextStyled>
        <TextStyled variant="h4" as="h1">
          {t('messageSection.title')} <br /> {t('messageSection.subtitle')}{' '}
          <br /> 🥗✨
        </TextStyled>

        <BoxStyled />
      </BoxTextStyled>
    </BoxContainerStyled>
  );
};

export default MessageSection;
