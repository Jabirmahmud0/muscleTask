import { FunctionComponent, useState } from "react";
import { Typography, Box } from "@mui/material";
import OfferCard from "./OfferCard";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: FunctionComponent<HeroSectionType> = ({
  className = "",
}) => {
  const [actionsStackItems] = useState([
    {
      actionsStackPadding: "26px 31px 26px 33px" as const,
      yoga12: "/yoga-1-2@2x.png",
      groundRunning: "Ground running",
      groundRunningAlignSelf: undefined,
    },
    {
      actionsStackPadding: "26px 29px 26px 33px" as const,
      yoga12: "/yoga-1-1@2x.png",
      groundRunning: "Yoga Assistance",
      groundRunningAlignSelf: "stretch" as const,
    },
    {
      actionsStackPadding: "26px 28px 26px 33px" as const,
      yoga12: "/yoga-1-3@2x.png",
      groundRunning: "Personal Trainer",
      groundRunningAlignSelf: undefined,
    },
  ]);
  return (
    <section
      className={`absolute top-[359px] left-[calc(50%_-_831px)] w-[1662.5px] flex items-start flex-wrap content-start gap-[6.5px] max-w-full shrink-0 ${className}`}
    >
      <section className="w-[376px] flex flex-col items-start !pt-[218px] !pb-[15px] !pl-4 !pr-[15px] box-border relative isolate gap-[33px] max-w-full text-left text-[35px] text-[rgba(255,255,255,0.75)] font-['Tilt_Warp']">
        <Typography
          className="!m-0 relative z-[2] shrink-0"
          variant="inherit"
          sx={{
            fontFamily: "'Tilt Warp', sans-serif !important",
            fontWeight: "400 !important",
            fontSize: "35px !important",
            width: "246px",
            height: "35px",
            lineHeight: "35px",
          }}
        >
          Our specialty
        </Typography>
        <Box className="w-full h-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] shrink-0">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[78px] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/Offer-Bar.svg"
          />
          <img
            className="absolute top-[106px] left-[16.5px] w-[37px] h-[22px] object-contain z-[2]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[74px] left-[58.5px] w-[37px] h-[22px] object-contain z-[2]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[106px] left-[100.5px] w-[37px] h-[22px] object-contain z-[2]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[106px] left-[142.5px] w-[37px] h-[22px] object-contain z-[2]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[170px] left-[225.5px] w-[37px] h-[22px] object-contain z-[2]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[138px] left-[184.5px] w-[37px] h-[22px] object-contain z-[2]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[138px] left-[266.5px] w-[37px] h-[22px] object-contain z-[2]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[138px] left-[16.5px] w-[37px] h-[22px] object-contain z-[2]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[106px] left-[58.5px] w-[37px] h-[22px] object-contain z-[2]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[138px] left-[100.5px] w-[37px] h-[22px] object-contain z-[2]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[170px] left-[142.5px] w-[37px] h-[22px] object-contain z-[2]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[138px] left-[58.5px] w-[37px] h-[22px] object-contain z-[2]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[170px] left-[100.5px] w-[37px] h-[22px] object-contain z-[2]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[37px] left-[328.5px] w-[37px] h-[22px] object-contain z-[2]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[47px] left-[275.5px] w-[37px] h-[22px] object-contain z-[2]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="absolute top-[69px] left-[328.5px] w-[37px] h-[22px] object-contain z-[2]"
            alt=""
            src="/Polygon-132.svg"
          />
        </Box>
        <Box className="self-stretch flex flex-col items-start !pt-0 !pb-0 !pl-0 !pr-px box-border gap-5 max-w-full shrink-0">
          {actionsStackItems.map((item, index) => (
            <OfferCard
              key={index}
              actionsStackPadding={item.actionsStackPadding}
              yoga12={item.yoga12}
              groundRunning={item.groundRunning}
              groundRunningAlignSelf={item.groundRunningAlignSelf}
            />
          ))}
        </Box>
      </section>
      <Box className="flex-1 flex flex-col items-start !pt-[37px] !pb-0 !pl-0 !pr-0 box-border min-w-[832px] max-w-full mq1275:min-w-full">
        <Box className="self-stretch flex items-start gap-[191px] max-w-full mq1275:flex-wrap">
          <Box className="h-[54px] w-[37px] relative">
            <img
              className="absolute top-[0px] left-[0px] w-[37px] h-[22px] object-contain z-[1]"
              alt=""
              src="/Polygon-132.svg"
            />
            <img
              className="absolute top-[32px] left-[0px] w-[37px] h-[22px] object-contain z-[1]"
              alt=""
              src="/Polygon-132.svg"
            />
          </Box>
          <section className="flex-1 flex flex-col items-start !pt-[187px] !pb-0 !pl-0 !pr-0 box-border min-w-[684px] max-w-full text-left text-[180px] text-[#fff] font-['Tilt_Warp'] mq900:min-w-full">
            <Box className="self-stretch flex items-start">
              <div className="relative tracking-[-0.04em] leading-[89.67%] inline-block min-h-[342px] z-[1] mq900:text-7xl mq900:leading-[108px] mq450:text-[45px] mq450:leading-[72px]">
                <Typography
                  variant="inherit"
                  variantMapping={{ inherit: "span" }}
                >
                  POWER YOUR
                  <br />
                </Typography>
                <Typography
                  variant="inherit"
                  variantMapping={{ inherit: "span" }}
                  sx={{ fontSize: "200px" }}
                >
                  POTENTIAL
                </Typography>
              </div>
              <div className="relative tracking-[-0.04em] leading-[89.67%] text-[rgba(255,255,255,0.15)] inline-block [backdrop-filter:blur(4px)] [-webkit-text-stroke:1px_#fff] [paint-order:stroke_fill] min-h-[342px] z-[3] !ml-[-1052px] mq900:text-7xl mq900:leading-[108px] mq450:text-[45px] mq450:leading-[72px]">
                <Typography
                  variant="inherit"
                  variantMapping={{ inherit: "span" }}
                >
                  POWER YOUR
                  <br />
                </Typography>
                <Typography
                  variant="inherit"
                  variantMapping={{ inherit: "span" }}
                  sx={{ fontSize: "200px" }}
                >
                  POTENTIAL
                </Typography>
              </div>
            </Box>
          </section>
        </Box>
      </Box>
    </section>
  );
};

export default HeroSection;
