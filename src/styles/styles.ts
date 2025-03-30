import styled from '@emotion/styled';
import { palette } from '../utils/styleguide';

export interface ShapeDividerProps {
  bgColor?: string;
  shapeColor?: string;
}

export const ShapeDivider = styled.div<ShapeDividerProps>`
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  background-color: ${({ bgColor }) => bgColor || palette.white};

  svg {
    position: relative;
    display: block;
    width: calc(154% + 1.3px);
    height: 100px;
  }

  .shape-fill {
    fill: ${({ shapeColor }) => shapeColor || palette.green};
  }
`;

export const ShapeDividerOp = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(135% + 1.3px);
    height: 120px;
    transform: rotateY(180deg);
  }

  .shape-fill {
    fill: ${palette.lightPurple};
  }
`;

export const CustomShapeNavbarStyled = styled.div`
  position: fixed;
  top: 80;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 1000;

  svg {
    position: relative;
    display: block;
    width: calc(270% + 100.3px);
    height: 296px;
  }

  .shape-fill {
    fill: ${palette.lightGreen};
  }
`;

export const ParallaxSection = styled.section`
  background-image: url('./');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-position-y: 70px;
`;

export const StyledRosemaryLogo = styled.img`
  position: fixed;
  left: 50%;
  z-index: 5000;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
