import { palette, sectionStyle } from '../utils/styleguide';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutUsWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      id={'about-us'}
      sx={{
        ...sectionStyle,
        backgroundColor: palette.lightGreen,
        paddingX: {
          xs: 2,
          sm: 8,
          md: 10,
          lg: 30,
          xl: 40,
        },
        margin: '0 auto',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {children}
    </Box>
  );
};

const DescriptionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        flex: 1,
        marginRight: {
          xs: 0,
          md: 2,
        },
        marginBottom: {
          xs: 2,
          md: 0,
        },
      }}
    >
      {children}
    </Box>
  );
};

const PictureWrapper = () => {
  return (
    <Box
      component="img"
      src="https://posterilove.com/_ipx/w_420,f_webp,q_80/cdn/images/l0e9la0s17158660726319.png"
      alt="img about us"
      sx={{
        maxWidth: {
          xs: '100%',
          md: '50%',
        },
        marginLeft: {
          xs: 0,
          md: 4,
        },
        marginTop: {
          xs: 2,
          md: 0,
        },
      }}
    ></Box>
  );
};

const DescritpionTypography = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography
      sx={{
        textAlign: 'justify',
        textJustify: 'inter-word',
        mt: 2,
        mb: 2,
        lineHeight: 1.5,
        wordSpacing: '0.01em',
        letterSpacing: '-0.02em',
        hyphens: 'auto',
        orphans: 2,
        widows: 2,
        fontSize: {
          xs: '18px',
          sm: '20px',
          md: '22px',
          lg: '24px',
        },
      }}
    >
      {children}
    </Typography>
  );
};

const AboutUsSection = () => {
  const { t } = useTranslation();

  return (
    <AboutUsWrapper>
      <DescriptionWrapper>
        <Typography
          variant="h3"
          sx={{
            textAlign: 'left',
            mt: 5,
          }}
          fontWeight={700}
        >
          {t('about-us.title')}
        </Typography>
        <DescritpionTypography>
          {t('about-us.description')}
        </DescritpionTypography>
      </DescriptionWrapper>
      <PictureWrapper />
      <Box />
    </AboutUsWrapper>
  );
};

export default AboutUsSection;
