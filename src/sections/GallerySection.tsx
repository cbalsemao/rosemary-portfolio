import { Card, CardMedia, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { palette } from '../utils/styleguide';
import { TOTAL_IMAGES } from '../utils/utils';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';

const StyledTitle = styled(Typography)`
  font-weight: bold;
  color: ${palette.darkGreen};
  text-align: center;
`;

const SyledContainer = styled(Box)`
  background-color: ${palette.darkWhite};
  padding-bottom: 200px;
  @media (max-width: 600px) {
    padding-bottom: 100px;
  }
`;

const CardContainer = styled(Card)`
  box-shadow: 3;
  border-radius: 2;
  overflow: hidden;
`;

const GallerySection = () => {
  const { t } = useTranslation();

  const imageNames: string[] = Array.from(
    { length: TOTAL_IMAGES },
    (_, index) => `DSC_${index + 1}.jpg`
  );

  return (
    <SyledContainer sx={{ padding: 6 }}>
      <StyledTitle
        variant="h2"
        sx={{
          pb: { xs: 5, md: 15 },
          pt: { xs: 5, md: 15 },
          fontSize: {
            xs: '1.5rem',
            md: '2.5rem',
            sm: '2rem',
            lg: '3rem',
            xl: '4rem',
          },
        }}
      >
        {t('gallerySection.title')}
      </StyledTitle>
      <Grid container spacing={1} justifyContent="center">
        {imageNames.map((image, index) => (
          <Grid sx={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} key={index}>
            <CardContainer>
              <Box sx={{ overflow: 'hidden' }}>
                <CardMedia
                  component="img"
                  image={`/gallery/${image}`}
                  alt={`Gallery Image ${index + 1}`}
                  sx={{
                    objectFit: 'contain',
                    height: { xs: 200, sm: 300, md: 300, lg: 300 },
                    transition: 'transform 0.7s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.1)',
                    },
                  }}
                />
              </Box>
            </CardContainer>
          </Grid>
        ))}
      </Grid>
    </SyledContainer>
  );
};

export default GallerySection;
