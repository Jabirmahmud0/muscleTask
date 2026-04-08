import { FunctionComponent } from "react";
import { Box, Typography, Button } from "@mui/material";

export type NewsletterType = {
  className?: string;
};

const Newsletter: FunctionComponent<NewsletterType> = ({
  className = "",
}) => {
  return (
    <section
      className={`absolute top-[4836px] left-[calc(50%_-_823.5px)] w-[1647px] flex items-start flex-wrap content-start !pt-0 !pb-0 !pl-[138px] !pr-0 box-border isolate gap-3.5 max-w-full shrink-0 text-left text-[28px] text-[#fff] font-[Satoshi] ${className}`}
    >
      <Box className="flex-1 flex flex-col items-start !pt-px !pb-0 !pl-0 !pr-0 box-border min-w-[918px] max-w-full shrink-0 mq1275:min-w-full">
        <Box className="self-stretch rounded-[45px] bg-[#000] flex flex-col items-start !pt-[40px] !pb-[40px] !pl-[226px] !pr-[225px] box-border gap-[19px] max-w-full">
          <Box className="w-[1413px] h-[486px] relative rounded-[45px] bg-[#000] hidden max-w-full shrink-0" />
          <Box className="self-stretch flex items-start !pt-0 !pb-0 !pl-[356px] !pr-[354px] shrink-0">
            <Typography
              className="!m-0 relative inline-block z-[1]"
              variant="inherit"
              sx={{
                fontFamily: "Satoshi, sans-serif !important",
                fontWeight: "500 !important",
                fontSize: "28px !important",
                width: "252px",
                height: "38px",
                lineHeight: "38px",
                textAlign: "left",
              }}
            >
              Join our community
            </Typography>
          </Box>
          <Box className="self-stretch flex items-start !pt-0 !pb-0 !pl-[174px] !pr-[172px] box-border max-w-full shrink-0">
            <Box className="flex-1 flex flex-col items-start min-h-[61px] max-w-full">
              <Box className="flex items-start relative isolate max-w-full">
                <Typography
                  className="!m-0 relative flex items-center shrink-0 z-[1]"
                  variant="inherit"
                  sx={{
                    fontFamily: "'Tilt Warp', sans-serif !important",
                    fontWeight: "400 !important",
                    fontSize: "48px !important",
                    width: "800px",
                    height: "61px",
                    lineHeight: "61px",
                    textAlign: "left",
                  }}
                >
                  Subscribe to our Newsletter
                </Typography>
                <img
                  className="h-[16.9px] w-[233px] absolute !!m-[0 important] right-[3.5px] bottom-[-10px] rounded-[78px] z-[1] shrink-0"
                  loading="lazy"
                  alt=""
                  src="/Vector-4.svg"
                />
              </Box>
              <Box className="w-[616px] flex items-start justify-end !pt-0 !pb-0 !pl-0 !pr-0 box-border max-w-full !mt-[-10px] relative">
                <Box className="h-[7.1px] w-[10.2px] relative shrink-0">
                  <img
                    className="absolute top-[2.9px] left-[0px] w-[4.2px] h-[4.2px] object-contain z-[1]"
                    alt=""
                    src="/Star-Shape.svg"
                  />
                  <img
                    className="absolute top-[0px] left-[4.1px] w-[6.1px] h-[6.1px] object-contain z-[1]"
                    alt=""
                    src="/Star-Shape.svg"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <div
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 500,
              fontSize: "18px",
              width: "962px",
              height: "38px",
              lineHeight: "1.2",
              textAlign: "center",
              color: "rgba(255, 255, 255, 0.75)",
            }}
            className="relative mx-auto capitalize z-[1] shrink-0"
          >
            Join our community of fitness enthusiasts and athletes! By
            subscribing to our newsletter, you’ll receive expert training tips,
            nutrition guides.
          </div>
          <Box className="flex items-start !pt-0 !pb-0 !pl-[94px] !pr-[94px] box-border max-w-full shrink-0">
            <Box
              sx={{
                width: "735px",
                height: "82px",
                borderRadius: "110px",
                border: "3px solid #fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 16px 0 48px",
                boxSizing: "border-box",
                zIndex: 1,
              }}
            >
              <Box className="flex flex-col items-start shrink-0">
                <Typography
                  className="relative capitalize"
                  variant="inherit"
                  sx={{
                    fontFamily: "Satoshi, sans-serif !important",
                    fontWeight: "700 !important",
                    fontSize: "22px !important",
                    color: "rgba(255, 255, 255, 0.75)",
                  }}
                >
                  Enter your email
                </Typography>
              </Box>
              <Button
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontFamily: "Satoshi, sans-serif !important",
                  fontWeight: "500 !important",
                  fontSize: "18px !important",
                  background: "#fff !important",
                  borderRadius: "30px",
                  "&:hover": { background: "#fff" },
                  height: "50px",
                  padding: "0 32px",
                }}
              >
                SUBSCRIBE
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <img
        className="h-[22px] w-[37px] absolute !!m-[0 important] bottom-[11px] left-[0px] shrink-0"
        loading="lazy"
        alt=""
        src="/Polygon-132.svg"
      />
      <Box className="flex items-start gap-2 shrink-0">
        <img
          className="h-[37px] w-[22px] relative object-contain"
          alt=""
          src="/Polygon-132.svg"
        />
        <img
          className="h-[37px] w-[22px] relative object-contain"
          alt=""
          src="/Polygon-132.svg"
        />
        <img
          className="h-[37px] w-[22px] relative object-contain"
          alt=""
          src="/Polygon-132.svg"
        />
      </Box>
    </section>
  );
};

export default Newsletter;
