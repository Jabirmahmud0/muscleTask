import { FunctionComponent } from "react";
import { Box, Button, Typography } from "@mui/material";

export type NavbarType = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarType> = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-col items-start gap-[60px] ${className}`}
      style={{ position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)", width: 1600, maxWidth: "100%", fontSize: 20, color: "rgba(255,255,255,0.75)", fontFamily: "'Tilt Warp', sans-serif" }}
    >
      <section className="relative self-stretch flex items-start gap-5 max-w-full text-left text-xl text-[#fff] font-[Satoshi]">
        <Box className="w-[900px] flex items-end gap-[80px] max-w-full">
          <Box className="w-[100px] flex items-start">
            <Box className="h-[100px] flex-1 relative">
              <Box className="absolute top-[0px] left-[0px] rounded-[50%] bg-[#71ac16] w-full h-full z-[1]" />
              <img
                className="absolute top-[30px] left-[30px] w-[40px] h-[40px] object-contain z-[2]"
                loading="lazy"
                alt=""
                src="/paper-plane-1-1@2x.png"
              />
            </Box>
          </Box>
          <Box
            className="h-[80px] w-[680px] flex items-center justify-between !pl-12 !pr-5 gap-5 max-w-full z-[3]"
            sx={{
              border: "2px solid #fff",
              borderRadius: "100px",
            }}
          >
            <Box className="h-[80px] w-[680px] relative rounded-[100px] border-[#fff] border-solid border-[3px] box-border hidden max-w-full shrink-0" />
            <Box className="flex flex-col justify-center shrink-0">
              <div className="relative font-medium inline-block min-w-[65px] z-[1] text-[18px]">
                Home
              </div>
            </Box>
            <Box className="w-[150px] flex flex-col justify-center box-border shrink-0">
              <div className="self-stretch relative font-medium z-[1] text-[18px]">
                Our gym location
              </div>
            </Box>
            <Box className="h-full flex flex-col justify-center shrink-0">
              <Box className="w-0.5 h-[30px] relative bg-[#fff] z-[1]" />
            </Box>
            <Box className="rounded-[70px] bg-[rgba(255,255,255,0.25)] flex items-center justify-between !pt-[10px] !pb-[10px] !pl-[32px] !pr-[32px] gap-[32px] z-[1] shrink-0 text-[18px]">
              <Box className="h-[54px] w-[180px] relative rounded-[70px] bg-[rgba(255,255,255,0.25)] hidden shrink-0" />
              <div className="relative font-medium inline-block min-w-[60px] z-[1] shrink-0">
                Search
              </div>
              <button className="cursor-pointer [border:none] !pt-0.5 !pb-0 !pl-0 !pr-0 bg-[transparent] flex flex-col items-start shrink-0">
                <img
                  className="cursor-pointer [border:none] !p-0 bg-[transparent] w-[22px] h-[22px] relative object-cover z-[1]"
                  alt=""
                  src="/magnifying-glass-1-1@2x.png"
                />
              </button>
            </Box>
          </Box>
        </Box>
        <Button
          className="absolute top-0 right-[-24px] h-[80px] w-[300px] box-border max-w-full z-[3]"
          disableElevation
          variant="contained"
          sx={{
            color: "#fff",
            fontSize: "28px",
            fontFamily: "'Tilt Warp', sans-serif !important",
            fontWeight: "400 !important",
            background: "#71ac16",
            borderRadius: "40px",
            "&:hover": { background: "#71ac16" },
            width: 300,
            height: 80,
            textTransform: "none",
          }}
        >
          Register
        </Button>
      </section>
      <Box className="w-[502px] flex items-start !pt-0 !pb-0 !pl-[73px] !pr-[73px] box-border max-w-full">
        <Box className="flex-1 flex flex-col items-start gap-[11px] max-w-full">
          <Box className="self-stretch flex items-start gap-[21px] mq900:flex-wrap">
            <Box className="flex flex-col items-start !pt-px !pb-0 !pl-0 !pr-0">
              <Typography
                className="!m-0 relative inline-block z-[1] shrink-0"
                variant="inherit"
                sx={{
                  fontFamily: "'Tilt Warp', sans-serif !important",
                  fontWeight: "400 !important",
                  fontSize: "18px !important",
                  width: "100px",
                  height: "24px",
                  lineHeight: "24px",
                }}
              >
                Follow On:
              </Typography>
            </Box>
            <Box className="flex flex-col items-start !pt-0.5 !pb-0 !pl-0 !pr-2">
              <img
                className="w-[22px] h-[22px] relative object-cover z-[1]"
                alt=""
                src="/facebook-app-symbol-1@2x.png"
              />
            </Box>
            <Box className="flex flex-col items-start !pt-0.5 !pb-0 !pl-0 !pr-2">
              <img
                className="w-[22px] h-[22px] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/instagram-4-1@2x.png"
              />
            </Box>
            <Box className="flex flex-col items-start !pt-0.5 !pb-0 !pl-0 !pr-[7px]">
              <img
                className="w-[22px] h-[22px] relative object-cover z-[1]"
                alt=""
                src="/twitter-3-1@2x.png"
              />
            </Box>
            <img
              className="h-6 w-6 relative object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/linkedin-1-1@2x.png"
            />
          </Box>
          <Box className="flex items-start justify-center gap-[15.7px] mq900:flex-wrap">
            <Box className="flex flex-col items-start !pt-2 !pb-0 !pl-0 !pr-0">
              <Box className="w-[37px] h-[54px] relative">
                <img
                  className="absolute top-[32px] left-[0px] w-[28px] h-[16px] object-contain z-[1]"
                  alt=""
                  src="/Polygon-132.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-[28px] h-[16px] object-contain z-[1]"
                  alt=""
                  src="/Polygon-132.svg"
                />
              </Box>
            </Box>
            <Box className="flex flex-col items-start !pt-[30px] !pb-0 !pl-0 !pr-0">
              <Box className="w-[37px] h-[54px] relative">
                <img
                  className="absolute top-[0px] left-[0px] w-[28px] h-[16px] object-contain z-[1]"
                  alt=""
                  src="/Polygon-132.svg"
                />
                <img
                  className="absolute top-[32px] left-[0px] w-[28px] h-[16px] object-contain z-[2]"
                  alt=""
                  src="/Polygon-132.svg"
                />
              </Box>
            </Box>
            <Box className="flex flex-col items-start !pt-[52px] !pb-0 !pl-0 !pr-0">
              <img
                className="w-[28px] h-[16px] relative object-contain z-[1]"
                alt=""
                src="/Polygon-132.svg"
              />
            </Box>
            <Box className="flex flex-col items-start !pt-2.5 !pb-0 !pl-0 !pr-0">
              <Box className="flex flex-col items-start gap-[42px]">
                <Box className="flex items-start !pt-0 !pb-0 !pl-px !pr-0">
                  <img
                    className="h-[16px] w-[28px] relative object-contain z-[1]"
                    alt=""
                    src="/Polygon-132.svg"
                  />
                </Box>
                <img
                  className="w-[28px] h-[16px] relative object-contain z-[2]"
                  alt=""
                  src="/Polygon-132.svg"
                />
              </Box>
            </Box>
            <Box className="flex flex-col items-start gap-[42px]">
              <Box className="w-[37px] h-[54px] relative">
                <img
                  className="absolute top-[32px] left-[0px] w-[28px] h-[16px] object-contain z-[1]"
                  alt=""
                  src="/Polygon-132.svg"
                />
                <img
                  className="absolute top-[0px] left-[0px] w-[28px] h-[16px] object-contain z-[1]"
                  alt=""
                  src="/Polygon-132.svg"
                />
              </Box>
              <Box className="flex items-start !pt-0 !pb-0 !pl-px !pr-0">
                <img
                  className="h-[16px] w-[28px] relative object-contain z-[2]"
                  alt=""
                  src="/Polygon-132.svg"
                />
              </Box>
            </Box>
            <Box className="flex flex-col items-start !pt-[22px] !pb-0 !pl-0 !pr-0">
              <Box className="w-[38px] h-[54px] relative">
                <img
                  className="absolute top-[32px] left-[0px] w-[28px] h-[16px] object-contain z-[1]"
                  alt=""
                  src="/Polygon-132.svg"
                />
                <img
                  className="absolute top-[0px] left-[1px] w-[28px] h-[16px] object-contain z-[1]"
                  alt=""
                  src="/Polygon-132.svg"
                />
              </Box>
            </Box>
            <Box className="flex flex-col items-start !pt-[22px] !pb-0 !pl-0 !pr-0">
              <Box className="flex flex-col items-start gap-[42px]">
                <img
                  className="w-[28px] h-[16px] relative object-contain z-[1]"
                  alt=""
                  src="/Polygon-132.svg"
                />
                <img
                  className="w-[28px] h-[16px] relative object-contain z-[1]"
                  alt=""
                  src="/Polygon-132.svg"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Navbar;
