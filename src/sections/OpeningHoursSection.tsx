import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  Paper,
  styled,
} from '@mui/material';
import { palette } from '../utils/styleguide';
import { useViewPort } from '../utils/hook';
import { useTranslation } from 'react-i18next';

const StyledPaper = styled(Paper)`
  background-color: white;
  border-radius: 16px;
  box-shadow: 1;
  padding: 32px;
  width: 100%;
  text-align: center;
`;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: palette.lightPurple,
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
}));

const StyledContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'center',
});

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: palette.darkPurple,
  fontWeight: 700,
  letterSpacing: '1px',
  lineHeight: 1.3,
  fontSize: '2rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
}));

const StyledSubheading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(1),
  fontSize: '1.2rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
}));

const StyledBodyText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginTop: theme.spacing(3),
  fontSize: '1.5rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '2.1rem',
  },
}));

const OpeningHoursSection = () => {
  const { t } = useTranslation();
  const { isMobile } = useViewPort();

  const fontSize = (small: string, large: string) => (isMobile ? small : large);

  const openingHours = [
    { text: t('openingHours.days'), size: '2.2rem' },
    { text: t('openingHours.openingHour'), size: '1.5rem' },
    { text: t('openingHours.closingHour'), size: '1.5rem' },
  ];

  return (
    <StyledBox>
      <StyledContainer>
        <StyledPaper>
          <StyledHeading>{t('openingHours.title')}</StyledHeading>
          <StyledSubheading>{t('openingHours.subtitle')}</StyledSubheading>
          <StyledBodyText>{t('openingHours.address')}</StyledBodyText>

          <List>
            {openingHours.map(({ text, size }) => (
              <ListItem key={text} sx={{ justifyContent: 'center' }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.primary',
                    fontSize: fontSize('1.2rem', size),
                  }}
                >
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>
        </StyledPaper>
      </StyledContainer>
    </StyledBox>
  );
};

export default OpeningHoursSection;
