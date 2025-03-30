import { Typography } from '@mui/material';
import { palette, sectionStyle } from '../utils/styleguide';
import Grid from '@mui/material/Grid2';
import {
  InstagramLink,
  LocationLink,
  WhatsAppLink,
} from '../components/ContactUsIcons';
import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';

const ContactWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      container
      id="contact"
      sx={{
        ...sectionStyle,
        backgroundColor: palette.darkWhite,
        paddingLeft: { xs: 5, md: 10, lg: 30, xl: 40 },
        paddingRight: { xs: 5, md: 10, lg: 30, xl: 40 },
        paddingTop: { xs: 5, md: 10 },
        paddingBottom: { xs: 5, md: 10 },
      }}
      spacing={2}
    >
      {children}
    </Grid>
  );
};

const ContactInfoSection = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      size={{ xs: 12, md: 4 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Grid>
  );
};

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <ContactWrapper>
        <ContactInfoSection>
          <Typography variant="h5" fontWeight="bold">
            <LocationLink />
          </Typography>
          <Typography
            sx={{ color: palette.darkPurple, fontWeight: 'bold' }}
            variant="body1"
          >
            Calle Mayor 41
          </Typography>
          <Typography
            sx={{ color: palette.darkPurple, fontWeight: 'bold' }}
            variant="body1"
          >
            Alicante/Alacant, España
          </Typography>
        </ContactInfoSection>

        <ContactInfoSection>
          <WhatsAppLink />
          <Typography
            sx={{ color: palette.darkPurple, fontWeight: 'bold' }}
            variant="body1"
            display="flex"
            alignItems="center"
          >
            +34 656 680 264
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: palette.darkPurple, fontWeight: 'bold' }}
          >
            rosemaryveggiefood@gmail.com
          </Typography>
        </ContactInfoSection>

        <ContactInfoSection>
          <InstagramLink />

          <Typography
            variant="body1"
            sx={{ color: palette.darkPurple, fontWeight: 'bold' }}
          >
            Rosemary
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: palette.darkPurple, fontWeight: 'bold' }}
          >
            @rosemaryveggiefood
          </Typography>
        </ContactInfoSection>
      </ContactWrapper>
      <div style={{ marginTop: 'auto', backgroundColor: palette.darkPurple }}>
        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: palette.white,
            padding: 2,
            fontSize: '1rem',
            fontFamily: 'Arial, sans-serif',
            fontWeight: 'bold',
          }}
        >
          © {new Date().getFullYear()} {t('footer.text')} |
          <a
            href="/cookie-policy"
            style={{
              color: palette.white,
              textDecoration: 'underline',
              marginLeft: 5,
            }}
          >
            {t('footer.cookiesPolicy')}
          </a>{' '}
          |
          <a
            href="/privacy-policy"
            style={{
              color: palette.white,
              textDecoration: 'underline',
              marginLeft: 5,
            }}
          >
            {t('footer.privacyPolicy')}
          </a>
        </Typography>
      </div>
    </>
  );
};

export default ContactSection;
