import { BANNER } from "../utils/images";
import { Box } from "@mui/material";
import { useViewPort } from "../utils/hook";

const BannerSection = () => {
  const { dynamicHeight } = useViewPort();

  const sectionStyle = {
    height: dynamicHeight(),
    transition: "height 0.5s",
    backgroundImage: `url(${BANNER.picture})`,
    backgroundSize: "cover",
  };

  return <Box sx={sectionStyle} />;
};

export default BannerSection;
