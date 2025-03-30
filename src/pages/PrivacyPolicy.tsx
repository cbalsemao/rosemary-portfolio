import {
  Container,
  Typography,
  Box,
  Paper,
  Link,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import { useScrollToTop } from '../utils/hook';
import { useTranslation } from 'react-i18next';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: 'justify',
        },
      },
    },
  },
});

const PrivacyPolicyPage = () => {
  useScrollToTop();
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          padding: { xs: 2, sm: 8, md: 10, xl: 15 },
          marginTop: { xs: 15, sm: 6, md: 6 },
        }}
      >
        <Paper elevation={4} sx={{ p: { xs: 2, sm: 4, md: 6 }, mt: 3 }}>
          <Box>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              {t('privacyPolicy.title')}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>{t('privacyPolicy.greeting')}</strong>
              <br />
              {t('privacyPolicy.intro')}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>{t('privacyPolicy.dataProcessingLocation.title')}</strong>
              <br />
              {t('privacyPolicy.dataProcessingLocation.content')}
              <Link
                href="https://www.godaddy.com/es/legal/agreements/privacy-policy"
                target="_blank"
                rel="noopener"
              >
                {t('privacyPolicy.dataProcessingLocation.linkText')}
              </Link>
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>{t('privacyPolicy.contactInfoUsage.title')}</strong>
              <br />
              {t('privacyPolicy.contactInfoUsage.content')}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>{t('privacyPolicy.dataAccessSubjects.title')}</strong>
              <br />
              {t('privacyPolicy.dataAccessSubjects.content')}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>{t('privacyPolicy.dataProvision.title')}</strong>
              <br />
              {t('privacyPolicy.dataProvision.content')}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>{t('privacyPolicy.navigationData.title')}</strong>
              <br />
              {t('privacyPolicy.navigationData.content')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('privacyPolicy.navigationDataDetail')}
            </Typography>
            <Typography variant="body1" paragraph>
              {t('privacyPolicy.cookiesReference')}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>{t('privacyPolicy.navigationDataAccess.title')}</strong>
              <br />
              {t('privacyPolicy.navigationDataAccess.content')}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>{t('privacyPolicy.cookies.title')}</strong>
              <br />
              {t('privacyPolicy.cookies.content')}
              <Link href="/cookie-policy">
                {t('privacyPolicy.cookies.linkText')}
              </Link>
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>{t('privacyPolicy.rights.title')}</strong>
              <br />
              {t('privacyPolicy.rights.intro')}
              <ul>
                <li>{t('privacyPolicy.rights.access')}</li>
                <li>{t('privacyPolicy.rights.correction')}</li>
                <li>{t('privacyPolicy.rights.deletion')}</li>
                <li>{t('privacyPolicy.rights.limitation')}</li>
                <li>{t('privacyPolicy.rights.opposition')}</li>
                <li>{t('privacyPolicy.rights.complaint')}</li>
              </ul>
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>{t('privacyPolicy.dataControllerContact.title')}</strong>
              <br />
              {t('privacyPolicy.dataControllerContact.contact')}
              <br />
              {t('privacyPolicy.dataControllerContact.address')}
              <br />
              {t('privacyPolicy.dataControllerContact.email')}
              <br />
              {t('privacyPolicy.dataControllerContact.phone')}
            </Typography>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default PrivacyPolicyPage;
