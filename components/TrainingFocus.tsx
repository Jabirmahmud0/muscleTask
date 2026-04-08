import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";

export type TrainingFocusType = {
  className?: string;
};

const TrainingFocus: FunctionComponent<TrainingFocusType> = ({
  className = "",
}) => {
  return (
    <Box
      className={`absolute top-[0px] left-[0px] rounded-[45px] bg-[#000] w-full flex items-start !pt-[39px] !pb-[38px] !pl-[39px] !pr-[39px] box-border gap-[68px] max-w-full z-[1] mq1600:flex-wrap ${className}`}
    >
      <Box className="h-[668px] w-[1680px] relative rounded-[45px] bg-[#000] hidden max-w-full shrink-0" />
      <img
        className="w-[522px] relative rounded-[22px] max-h-full object-cover max-w-full z-[2] shrink-0"
        loading="lazy"
        alt=""
        src="/portrait-anime-character-doing-fitness-exercising-2-1@2x.png"
      />
      <section className="w-[451px] flex flex-col items-start !pt-[29px] !pb-0 !pl-0 !pr-[17px] box-border max-w-full shrink-0 text-left text-2xl text-[rgba(255,255,255,0.75)] font-[Satoshi]">
        <Box className="self-stretch flex flex-col items-start gap-[68.3px] max-w-full">
          <Typography
            className="!m-0 relative text-[#fff] inline-block z-[2]"
            variant="inherit"
            sx={{
              fontFamily: "Satoshi, sans-serif !important",
              fontWeight: "700 !important",
              fontSize: "28px !important",
              width: "278px",
              height: "38px",
              lineHeight: "38px",
              whiteSpace: "nowrap",
            }}
          >
            Training Focus Areas:
          </Typography>
          <Box className="w-[380px] flex flex-col items-start gap-2.5 max-w-full">
            <Typography
              className="!m-0 relative inline-block z-[2]"
              variant="inherit"
              sx={{
                fontFamily: "Satoshi, sans-serif !important",
                fontWeight: "700 !important",
                fontSize: "24px !important",
                color: "#fff",
              }}
            >{`Strength & Conditioning`}</Typography>
            <div
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                width: "75%",
                color: "rgba(255, 255, 255, 0.7)",
              }}
              className="relative z-[2]"
            >
              Develop knockout power with a mix of strength training and
              explosive movements.
            </div>
          </Box>
          <Box className="self-stretch flex flex-col items-start gap-2.5">
            <Typography
              className="!m-0 relative z-[2]"
              variant="inherit"
              sx={{
                fontFamily: "Satoshi, sans-serif !important",
                fontWeight: "700 !important",
                fontSize: "24px !important",
                color: "#fff",
              }}
            >{`Speed & Agility`}</Typography>
            <div
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                width: "75%",
                color: "rgba(255, 255, 255, 0.7)",
              }}
              className="relative z-[2]"
            >
              Sharpen your reflexes and footwork with dynamic drills that
              improve speed and coordination.
            </div>
          </Box>
          <Box className="w-[422px] flex flex-col items-start gap-2.5 max-w-full">
            <Typography
              className="!m-0 relative z-[2]"
              variant="inherit"
              sx={{
                fontFamily: "Satoshi, sans-serif !important",
                fontWeight: "700 !important",
                fontSize: "24px !important",
                color: "#fff",
              }}
            >
              Endurance Training
            </Typography>
            <div
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 400,
                fontSize: "20px",
                width: "75%",
                color: "rgba(255, 255, 255, 0.7)",
              }}
              className="relative z-[2]"
            >
              Boost your stamina with high-intensity circuits that keep you
              fighting strong till the final round.
            </div>
          </Box>
        </Box>
      </section>
      <section className="w-[451px] flex flex-col items-start !pt-[29px] !pb-0 !pl-0 !pr-0 box-border max-w-full shrink-0 text-left text-[28px] text-[#fff] font-[Satoshi]">
        <Box className="self-stretch flex flex-col items-start gap-[69px] max-w-full">
          <Typography
            className="!m-0 relative z-[2]"
            variant="inherit"
            sx={{
              fontFamily: "Satoshi, sans-serif !important",
              fontWeight: "700 !important",
              fontSize: "28px !important",
              width: "251px",
              height: "38px",
              lineHeight: "38px",
              whiteSpace: "nowrap",
            }}
          >
            Why Train With Us:
          </Typography>
          <Box className="self-stretch flex flex-col items-start gap-[41px] max-w-full text-2xl text-[rgba(255,255,255,0.75)]">
            <Box className="self-stretch flex flex-col items-start gap-2.5">
              <Typography
                className="!m-0 relative inline-block z-[2]"
                variant="inherit"
                sx={{
                  fontFamily: "Satoshi, sans-serif !important",
                  fontWeight: "700 !important",
                  fontSize: "24px !important",
                  color: "#fff",
                }}
              >
                Expert Coaches
              </Typography>
              <div
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 400,
                  fontSize: "20px",
                  width: "75%",
                }}
                className="relative z-[2]"
              >
                Our experienced boxing trainers have worked with amateur and
                professional athletes, ensuring you get the best training
                tailored to your goals.
              </div>
            </Box>
            <Box className="w-[422px] flex flex-col items-start !pt-0 !pb-2.5 !pl-0 !pr-0 box-border gap-2.5 max-w-full">
              <Typography
                className="!m-0 relative inline-block z-[2]"
                variant="inherit"
                sx={{
                  fontFamily: "Satoshi, sans-serif !important",
                  fontWeight: "700 !important",
                  fontSize: "24px !important",
                  color: "#fff",
                }}
              >
                Flexible Programs
              </Typography>
              <div
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontWeight: 400,
                  fontSize: "20px",
                  width: "75%",
                }}
                className="relative z-[2]"
              >
                Whether you're a beginner or seasoned boxer, we offer flexible
                programs that fit your schedule and needs.
              </div>
            </Box>
            <Box className="flex items-start gap-8 max-w-full mq450:flex-wrap">
              <Button
                className="z-[2]"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  background: "#57B233 !important",
                  borderRadius: "20px",
                  "&:hover": { background: "#57B233" },
                  width: "287px",
                  height: "86px",
                  fontFamily: "Satoshi, sans-serif !important",
                  fontWeight: "700 !important",
                  fontSize: "28px !important",
                  padding: 0,
                  "& .MuiButton-label": {
                    width: "150px",
                    height: "38px",
                  },
                }}
              >
                Punch Now
              </Button>
              <Box className="h-[86px] w-[86px] flex items-start relative isolate">
                <Box className="h-full w-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[50px] max-w-full overflow-hidden max-h-full z-[2]"
                    alt=""
                    src="/Ellipse-4-Stroke.svg"
                  />
                  <img
                    className="absolute top-[24px] left-[24px] z-[3] w-[38px] h-[38px] object-contain"
                    alt=""
                    src="/Polygon 165.png"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </Box>
  );
};

export default TrainingFocus;
