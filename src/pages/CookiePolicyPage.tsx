import {
  Container,
  Typography,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { useScrollToTop } from '../utils/hook';
import { useTranslation } from 'react-i18next';

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: 'justify',
          lineHeight: 1.9,
          wordSpacing: '0.01em',
          letterSpacing: '-0.02em',
          hyphens: 'auto',
          orphans: 2,
          widows: 2,
        },
      },
    },
  },
});

const CookiePolicyPage = () => {
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
              {t('cookiePolicyData.title')}
            </Typography>
            <Typography variant="body1">
              <strong>{t('cookiePolicyData.greeting')}</strong>
              <br />
              {t('cookiePolicyData.intro')}
            </Typography>
            <Typography variant="body1">
              <strong>{t('cookiePolicyData.whatAreCookies.title')}</strong>
              <br />
              {t('cookiePolicyData.whatAreCookies.content1')}
            </Typography>
            <Typography variant="body1">
              {t('cookiePolicyData.whatAreCookies.content2')}
            </Typography>
            <Typography variant="body1">
              <strong>{t('cookiePolicyData.cookieTypes.title')}</strong>
              <br />
              <strong>
                {t('cookiePolicyData.cookieTypes.technical.title')}
              </strong>{' '}
              {t('cookiePolicyData.cookieTypes.technical.content')}
              <ul>
                <li>
                  <strong>
                    {t(
                      'cookiePolicyData.cookieTypes.technical.navigationOrSession.title'
                    )}
                  </strong>{' '}
                  {t(
                    'cookiePolicyData.cookieTypes.technical.navigationOrSession.content'
                  )}
                </li>
                <li>
                  <strong>
                    {t(
                      'cookiePolicyData.cookieTypes.technical.analytics.title'
                    )}
                  </strong>{' '}
                  {t(
                    'cookiePolicyData.cookieTypes.technical.analytics.content'
                  )}
                </li>
                <li>
                  <strong>
                    {t(
                      'cookiePolicyData.cookieTypes.technical.functionality.title'
                    )}
                  </strong>{' '}
                  {t(
                    'cookiePolicyData.cookieTypes.technical.functionality.content'
                  )}
                </li>
              </ul>
              {t('cookiePolicyData.cookieTypes.technical.installationNotice')}
            </Typography>
            <Typography variant="body1">
              <strong>
                {t('cookiePolicyData.cookieTypes.profiling.title')}
              </strong>
              {t('cookiePolicyData.cookieTypes.profiling.content')}
              <ul>
                <li>
                  <strong>
                    {t(
                      'cookiePolicyData.cookieTypes.profiling.advertising.title'
                    )}
                  </strong>{' '}
                  {t(
                    'cookiePolicyData.cookieTypes.profiling.advertising.content'
                  )}
                </li>
                <li>
                  <strong>
                    {t(
                      'cookiePolicyData.cookieTypes.profiling.behavioral.title'
                    )}
                  </strong>{' '}
                  {t(
                    'cookiePolicyData.cookieTypes.profiling.behavioral.content'
                  )}
                </li>
              </ul>
              {t('cookiePolicyData.cookieTypes.profiling.installationNotice')}
            </Typography>
            <Typography variant="body1">
              <strong>
                {t('cookiePolicyData.cookieTypes.cookieSubjects.title')}
              </strong>
              <ul>
                <li>
                  <strong>
                    {t(
                      'cookiePolicyData.cookieTypes.cookieSubjects.siteManagerCookies.title'
                    )}
                  </strong>{' '}
                  {t(
                    'cookiePolicyData.cookieTypes.cookieSubjects.siteManagerCookies.content'
                  )}
                </li>
                <li>
                  <strong>
                    {' '}
                    {t(
                      'cookiePolicyData.cookieTypes.cookieSubjects.thirdPartyCookies.title'
                    )}
                  </strong>{' '}
                  {t(
                    'cookiePolicyData.cookieTypes.cookieSubjects.thirdPartyCookies.content'
                  )}
                </li>
              </ul>
            </Typography>
            <Typography variant="body1">
              <strong>
                {' '}
                {t('cookiePolicyData.cookieTypes.cookieDuration.title')}
              </strong>
              <ul>
                <li>
                  <strong>
                    {' '}
                    {t(
                      'cookiePolicyData.cookieTypes.cookieDuration.sessionCookies.title'
                    )}
                  </strong>{' '}
                  {t(
                    'cookiePolicyData.cookieTypes.cookieDuration.sessionCookies.content'
                  )}
                </li>
                <li>
                  <strong>
                    {t(
                      'cookiePolicyData.cookieTypes.cookieDuration.persistentCookies.title'
                    )}
                  </strong>{' '}
                  {t(
                    'cookiePolicyData.cookieTypes.cookieDuration.persistentCookies.content'
                  )}
                </li>
              </ul>
            </Typography>
            <Typography variant="body1">
              <strong>{t('cookiePolicyData.userNotification.title')}</strong>
              <br />
              {t('cookiePolicyData.userNotification.content')}
            </Typography>
            <Typography variant="body1">
              <strong>{t('cookiePolicyData.browserInstructions.title')}</strong>
              <br />
              {t('cookiePolicyData.browserInstructions.content')}
            </Typography>
            <Typography variant="body1">
              {t('cookiePolicyData.browserInstructions.content2')}
              <ul>
                <li>
                  <a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d#:~:text=and%20login%20information.-,Open%20Edge%20browser%2C%20select%20Settings%20and%20more%20in%20the%20upper,recommended)%20to%20allow%20all%20cookies.">
                    Microsoft Edge
                  </a>
                </li>
                <li>
                  <a href="https://support.google.com/chrome/bin/answer.py?hl=es&answer=95647&p=cpn_cookies">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="http://support.mozilla.org/is-ES/kb/Enabling%20and%20disabling%20cookies">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="http://support.apple.com/kb/PH17191?viewlocale=es_ES&locale=es_ES">
                    Safari
                  </a>
                </li>
              </ul>
            </Typography>
            <Typography variant="body1">
              <strong>
                {' '}
                {t('cookiePolicyData.thirdPartyCookiesBlocking.title')}
              </strong>
              <br />
              {t('cookiePolicyData.thirdPartyCookiesBlocking.content')}
            </Typography>
            <Typography variant="body1">
              <strong> {t('cookiePolicyData.doNotTrackOption.title')}</strong>
              <br />
              {t('cookiePolicyData.doNotTrackOption.content')}
            </Typography>
            <Typography variant="body1">
              <strong>{t('cookiePolicyData.incognitoMode.title')}</strong>
              <br />
              {t('cookiePolicyData.incognitoMode.content')}
              <br />
              {t('cookiePolicyData.incognitoMode.content2')}
            </Typography>

            <Box sx={{ mt: 4 }}>
              <strong>{t('cookiePolicyData.cookiesTitle')}</strong>
              <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      {[
                        'Nombre del cookie',
                        'Descripción del cookie',
                        'Tipo',
                        'Gestión',
                        'Duración',
                      ].map((header) => (
                        <TableCell
                          key={header}
                          sx={{
                            backgroundColor: '#f2f2f2',
                            fontWeight: 'bold',
                          }}
                        >
                          {header}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      {
                        name: '_tccl_visitor',
                        description:
                          'Recopila datos agregados y anonimizados sobre el rendimiento del sitio.',
                        type: 'Análisis',
                        management: 'GoDaddy',
                        duration: '1 año',
                      },
                      {
                        name: '_tccl_visit',
                        description:
                          'Recopila datos anonimizados para mejorar el rendimiento del sitio.',
                        type: 'Análisis',
                        management: 'GoDaddy',
                        duration: '1 hora',
                      },
                      {
                        name: '_scc_session',
                        description: 'Gestiona la sesión del usuario.',
                        type: 'Otro',
                        management: 'Interno',
                        duration: '20 min',
                      },
                    ].map((cookie) => (
                      <TableRow key={cookie.name}>
                        {Object.values(cookie).map((value, index) => (
                          <TableCell key={index}>{value}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <br />
            <Typography variant="body1">
              <strong>
                {t('cookiePolicyData.thirdPartyCookiesInfo.title')}
              </strong>
              <br />
              {t('cookiePolicyData.thirdPartyCookiesInfo.content')}{' '}
              <a href="http://www.youronlinechoices.co.uk">
                www.youronlinechoices.co.uk
              </a>
              .
            </Typography>
            <Typography variant="body1">
              <strong>{t('cookiePolicyData.contactData.title')}</strong>
              <br />
              {t('cookiePolicyData.contactData.content')}{' '}
              <a href="mailto:admin@rosemary.es">
                {t('cookiePolicyData.contactData.email')}
              </a>
              .
            </Typography>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default CookiePolicyPage;
