import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";

export type TestimonialsHeaderType = {
  className?: string;
};

const TestimonialsHeader: FunctionComponent<TestimonialsHeaderType> = ({
  className = "",
}) => {
  return (
    <section
      className={`absolute top-[687.2px] left-[calc(50%_-_768px)] w-[1536px] flex flex-col items-start gap-[0.7px] max-w-full text-left text-4xl text-[rgba(0,0,0,0.75)] font-[Satoshi] ${className}`}
    >
      <Box className="w-full h-[124.8px] relative max-w-full">
        <Box className="absolute top-[0px] left-[0px] w-[171.9px] h-[89px]">
          <img
            className="absolute top-[0px] left-[0px] w-[41.4px] h-[30.8px] object-contain"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[0.2px] left-[115px] w-[41.4px] h-[30.8px] object-contain"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[19.4px] left-[43.5px] w-[41.4px] h-[30.8px] object-contain"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[28.9px] left-[7.8px] w-[41.4px] h-[30.8px] object-contain z-[1]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[29.2px] left-[122.8px] w-[41.4px] h-[30.8px] object-contain z-[1]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[38.8px] left-[87px] w-[41.4px] h-[30.8px] object-contain z-[2]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[48.3px] left-[51.3px] w-[41.4px] h-[30.8px] object-contain z-[3]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[58.2px] left-[130.5px] w-[41.4px] h-[30.8px] object-contain z-[2]"
            loading="lazy"
            alt=""
            src="/Polygon-132.svg"
          />
        </Box>
        <img
          className="absolute top-[72.8px] left-[1454px] w-[37px] h-[22px]"
          loading="lazy"
          alt=""
          src="/Polygon-132.svg"
        />
        <Box className="absolute top-[102.8px] left-[1454px] flex items-start">
          <img
            className="h-[22px] w-[37px] relative"
            loading="lazy"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="h-[22px] w-[37px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/Polygon-132.svg"
          />
        </Box>
      </Box>
      <Box className="self-stretch h-[59.3px] relative max-w-full mq900:h-auto mq900:min-h-[59.3px]">
        <img
          className="absolute top-[37.3px] left-[1585px] w-[37px] h-[22px]"
          alt=""
          src="/Polygon-132.svg"
        />
        <Box className="absolute top-[0px] left-[0px] w-full flex flex-col items-start gap-2.5 max-w-full">
          <Typography
            className="!m-0 relative inline-block max-w-full"
            variant="inherit"
            sx={{
              fontFamily: "'Tilt Warp', sans-serif !important",
              fontWeight: "400 !important",
              fontSize: "48px !important",
              lineHeight: "60px",
              textAlign: "left",
            }}
          >
            What Our Clients Are Saying
          </Typography>
          <Typography
            className="!m-0 relative inline-block"
            sx={{
              fontFamily: "Satoshi, sans-serif !important",
              fontWeight: "500 !important",
              fontSize: "22px !important",
              color: "rgba(0, 0, 0, 0.75)",
              textAlign: "left",
            }}
          >
            Real Stories from Our Community
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default TestimonialsHeader;
