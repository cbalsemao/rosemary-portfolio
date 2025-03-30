import { Typography } from '@mui/material';
import { ReactNode, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import { palette } from '../utils/styleguide';
import { randomPhrase } from '../utils/utils';
import styled from '@emotion/styled';

const CourtesyPhrases: string[] = [
  'Something good is coming soon!🌿',
  'Stay tuned, something exciting is on the way! 🌿',
  'Great things are just around the corner!🌿',
  "We're working hard to bring you something amazing!🌿",
  'Exciting times ahead! Check back soon!🌿',
  'The wait is almost over. Get ready!🌿',
  'We are building something wonderful for you!🌿',
  'We are preparing something big for you!🌿',
  'We are working on something amazing!🌿',
];

export const StyledCourtesyGrid = styled(Grid)`
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('backgroundCourtesy.png') no-repeat center center;
  background-size: cover;
`;

const CourtesyViewWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <StyledCourtesyGrid
        container
        sx={{
          padding: {
            xs: '10px',
            sm: '15px',
            md: '20px',
            lg: '100px',
          },
        }}
      >
        {children}
      </StyledCourtesyGrid>
    </>
  );
};

const CourtesyTypography = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: palette.black,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: {
            xs: '2rem',
            sm: '3rem',
            md: '4rem',
            lg: '5rem',
          },
          border: '10px dotted',
          borderColor: palette.black,
          padding: {
            xs: '20px',
            sm: '50px',
            md: '100px',
          },
          borderRadius: '50px',
        }}
      >
        {children}
      </Typography>
    </Grid>
  );
};

const CourtesyViewRosemary = () => {
  const [courtesyPhrase, setCourtesyPhrase] = useState(
    randomPhrase(CourtesyPhrases)
  );

  useEffect(() => {
    setCourtesyPhrase(randomPhrase(CourtesyPhrases));
  }, []);

  return (
    <CourtesyViewWrapper>
      <CourtesyTypography>{courtesyPhrase}</CourtesyTypography>
    </CourtesyViewWrapper>
  );
};

export default CourtesyViewRosemary;
