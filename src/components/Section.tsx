import { ReactNode } from "react";
import { Box } from "@mui/material";
import { useViewPort } from "../utils/hook";

const Section = ({
  backgroundColor,
  children,
}: {
  backgroundColor: string;
  children?: ReactNode;
}) => {
  const { dynamicHeight } = useViewPort();

  const sectionStyle = {
    height: dynamicHeight(),
    backgroundColor: backgroundColor,
    transition: "height 0.5s",
  };

  return <Box sx={sectionStyle}>{children}</Box>;
};

export default Section;
