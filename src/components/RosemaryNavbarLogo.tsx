import { Typography } from '@mui/material';
import { StyledRosemaryLogo } from '../styles/styles';
import { palette } from '../utils/styleguide';
import { useRosemaryNavigator } from '../utils/hook';

export const RosemaryNavbarLogo = ({ size }: { size: 'small' | 'large' }) => {
  const { navigateHomePage } = useRosemaryNavigator();
  const logoHeightSize = size === 'small' ? '100px' : '180px';
  const logoWidthSize = size === 'small' ? '120px' : '220px';
  const logoTop = size === 'small' ? '50px' : '80px';

  return (
    <div>
      <Typography
        variant="h1"
        fontWeight={800}
        sx={{ color: palette.white, cursor: 'pointer' }}
        onClick={() => navigateHomePage()}
      >
        <StyledRosemaryLogo
          key={'rosemaryLogo'}
          src="/rosemaryLogo.png"
          alt="Rosemary"
          style={{
            height: logoHeightSize,
            width: logoWidthSize,
            top: logoTop,
            transition: 'height 0.4s ease, width 0.4s ease, top 0.4s ease',
          }}
        />
      </Typography>
    </div>
  );
};
