import { FunctionComponent, useState } from "react";
import { Box } from "@mui/material";
import TestimonialCard from "./TestimonialCard";

export type TestimonialsGridType = {
  className?: string;
};

const TestimonialsGrid: FunctionComponent<TestimonialsGridType> = ({
  className = "",
}) => {
  const [frameComponent8Items] = useState([
    {
      frameSectionBoxShadow:
        "0px 100px 80px rgba(0, 0, 0, 0.07), 0px 41.8px 33.4px rgba(0, 0, 0, 0.05), 0px 22.3px 17.9px rgba(0, 0, 0, 0.04), 0px 12.5px 10px rgba(0, 0, 0, 0.04), 0px 6.7px 5.3px rgba(0, 0, 0, 0.03), 0px 2.8px 2.2px rgba(0, 0, 0, 0.02)" as const,
      man51: "/man-5-1@2x.png",
    },
    {
      frameSectionBoxShadow: "unset" as const,
      man51: "/man-5-12@2x.png",
    },
    {
      frameSectionBoxShadow: undefined,
      man51: "/man-5-14@2x.png",
    },
  ]);
  const [frameComponent8Items1] = useState([
    {
      frameSectionBoxShadow: "unset" as const,
      man51: "/man-5-13@2x.png",
    },
    {
      frameSectionBoxShadow: undefined,
      man51: "/man-5-15@2x.png",
    },
    {
      frameSectionBoxShadow: "unset" as const,
      man51: "/man-5-11@2x.png",
    },
  ]);
  return (
    <section
      className={`absolute top-[3807.7px] left-[calc(50%_-_768px)] flex flex-col items-center gap-[37.3px] max-w-full shrink-0 ${className}`}
    >
      <Box className="w-[1536px] rounded-[45px] bg-[rgba(0,0,0,0.08)] flex flex-col items-center !pt-[50px] !pb-[50px] !pl-12 !pr-12 box-border gap-[60px] max-w-full">
        <Box className="w-full h-[880px] relative rounded-[45px] bg-[rgba(0,0,0,0.08)] hidden max-w-full shrink-0" />
        <Box className="self-stretch flex items-start justify-between gap-5 max-w-full shrink-0 mq1600:flex-wrap">
          {frameComponent8Items.map((item, index) => (
            <TestimonialCard
              key={index}
              frameSectionBoxShadow={item.frameSectionBoxShadow}
              man51={item.man51}
            />
          ))}
        </Box>
        <Box className="self-stretch flex items-start justify-between gap-5 max-w-full shrink-0 mq1600:flex-wrap">
          {frameComponent8Items1.map((item, index) => (
            <TestimonialCard
              key={index}
              frameSectionBoxShadow={item.frameSectionBoxShadow}
              man51={item.man51}
            />
          ))}
        </Box>
      </Box>
      <Box className="w-32 flex items-start justify-end !pt-0 !pb-0 !pl-[38px] !pr-[38px] box-border">
        <Box className="flex-1 flex flex-col items-start">
          <Box className="flex items-start !pt-0 !pb-0 !pl-[30px] !pr-0">
            <img
              className="h-[37px] w-[22px] relative object-contain z-[1]"
              alt=""
              src="/Polygon-132.svg"
            />
          </Box>
          <Box className="self-stretch h-[37px] relative">
            <img
              className="absolute top-[0px] left-[30px] w-[22px] h-[37px] object-contain"
              alt=""
              src="/Polygon-132.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[22px] h-[37px] object-contain z-[2]"
              alt=""
              src="/Polygon-132.svg"
            />
          </Box>
          <img
            className="w-[22px] h-[37px] relative object-contain z-[1]"
            alt=""
            src="/Polygon-132.svg"
          />
        </Box>
      </Box>
    </section>
  );
};

export default TestimonialsGrid;
