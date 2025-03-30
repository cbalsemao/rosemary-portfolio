import { Box, Button, styled, Typography } from '@mui/material';
import { palette } from '../utils/styleguide';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const MENU_PDF_LINK = 'https://rosemaryveggie.com/rosemary-menu.pdf';

const BoxContainerStyled = styled(Box)`
  padding: ${({ theme }) => theme.spacing(10)};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palette.white};
`;

const BoxTextStyled = styled(Box)`
  text-align: center;
  color: ${palette.darkGreen};
  max-width: 60%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(8)};
`;

const TextStyled = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { fontSize: '2.8rem' },
  [theme.breakpoints.up('md')]: { fontSize: '3.5rem' },
  [theme.breakpoints.up('lg')]: { fontSize: '4rem' },
  textTransform: 'uppercase',
}));

const StyledButton = styled(Button)`
  color: ${palette.darkGreen};
  border: 3px solid ${palette.darkGreen};
  transition: all 0.3s ease-in-out;
  padding: ${({ theme }) => theme.spacing(2, 5)};
  border-radius: 12px;

  &:hover {
    color: ${palette.darkGreen};
    transform: scale(1.1);
  }
`;

const MenuSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <BoxContainerStyled id={'menu'}>
      <BoxTextStyled>
        <TextStyled as="h1">
          {t('menuSection.title')}✨<br />
        </TextStyled>
        <StyledButton
          variant="outlined"
          onClick={() => {
            window.open(MENU_PDF_LINK, '_blank');
          }}
        >
          {t('menuSection.menu-button')}
        </StyledButton>
      </BoxTextStyled>
    </BoxContainerStyled>
  );
};

export default MenuSection;
