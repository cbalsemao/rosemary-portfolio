import { palette } from '../utils/styleguide';
import { Parallax } from '../components/Parallax';
import { CustomShapeDivider } from '../components/WaveSeparator';
import { useScrollToTop } from '../utils/hook';
import GallerySection from '../sections/GallerySection';
import MessageSection from '../sections/MessageSection';
import OpeningHoursSection from '../sections/OpeningHoursSection';
import MenuSection from '../sections/Menu';

const LandingPage = () => {
  useScrollToTop();
  return (
    <>
      {/* <Parallax /> */}
      <MessageSection />

      {/* <CustomShapeDividerOp /> */}
      <CustomShapeDivider
        bgColor={palette.lightPurple}
        shapeColor={palette.darkWhite}
      />
      <GallerySection />
      <MenuSection />
      <CustomShapeDivider
        bgColor={palette.white}
        shapeColor={palette.lightPurple}
      />
      <OpeningHoursSection />
      <CustomShapeDivider
        bgColor={palette.lightPurple}
        shapeColor={palette.darkWhite}
      />
    </>
  );
};

export default LandingPage;
