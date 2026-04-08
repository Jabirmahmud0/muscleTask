import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box, Typography } from "@mui/material";

export type TestimonialCardType = {
  className?: string;
  man51?: string;

  /** Style props */
  frameSectionBoxShadow?: CSSProperties["boxShadow"];
};

const TestimonialCard: FunctionComponent<TestimonialCardType> = ({
  className = "",
  frameSectionBoxShadow,
  man51,
}) => {
  const frameSectionStyle: CSSProperties = useMemo(() => {
    return {
      boxShadow: frameSectionBoxShadow,
    };
  }, [frameSectionBoxShadow]);

  return (
    <section
      className={`h-[360px] w-[450px] shadow-[0px_100px_80px_rgba(0,_0,_0,_0.07),_0px_41.8px_33.4px_rgba(0,_0,_0,_0.05),_0px_22.3px_17.9px_rgba(0,_0,_0,_0.04),_0px_12.5px_10px_rgba(0,_0,_0,_0.04),_0px_6.7px_5.3px_rgba(0,_0,_0,_0.03),_0px_2.8px_2.2px_rgba(0,_0,_0,_0.02)] flex items-start !pt-[46px] !pb-[45px] !pl-[41px] !pr-10 box-border relative isolate text-left text-2xl text-[#fff] font-[Satoshi] ${className}`}
      style={frameSectionStyle}
    >
      <Box className="h-full w-full absolute !!m-[0 important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[25px] bg-[#000] z-[0] shrink-0" />
      <Box className="flex flex-col items-start gap-[48.3px] z-[1] shrink-0">
        <Box className="w-[315px] flex flex-col items-start gap-[16.8px]">
          <Typography
            className="!m-0 relative inline-block shrink-0 z-[2]"
            variant="inherit"
            sx={{
              fontFamily: "Satoshi, sans-serif !important",
              fontWeight: "500 !important",
              fontSize: "24px !important",
            }}
          >
            The Best Training Program!
          </Typography>
          <div
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              textAlign: "justify",
              color: "rgba(255, 255, 255, 0.7)",
            }}
            className="w-full relative z-[1]"
          >
            The boxing program helped me build confidence, strength, and
            endurance. The coaches are supportive and push you to be your best.
            Highly recommend for anyone serious about their fitness!
          </div>
        </Box>
        <Box className="flex items-end gap-[21px]">
          <img
            className="h-[71px] w-[71px] relative object-cover"
            loading="lazy"
            alt=""
            src={man51}
          />
          <Box className="flex flex-col items-start justify-end !pt-0 !pb-[7px] !pl-0 !pr-0 box-border">
            <Box className="flex items-end gap-[20px]">
              <Box className="flex flex-col items-start">
                <Typography
                  className="!m-0 relative inline-block"
                  variant="inherit"
                  sx={{
                    fontFamily: "Satoshi, sans-serif !important",
                    fontWeight: "500 !important",
                    fontSize: "24px !important",
                  }}
                >
                  Stive meloni
                </Typography>
                <div
                  style={{
                    fontFamily: "Satoshi, sans-serif",
                    fontWeight: 400,
                    fontSize: "18px",
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                  className="relative whitespace-pre-wrap inline-block"
                >
                  Ceo Of Miko
                </div>
              </Box>
              <Box className="h-5 w-[103px] flex flex-col items-start justify-end !pt-0 !pb-1 !pl-0 !pr-0 box-border text-xs">
                <Box className="w-[103px] h-4 flex items-start gap-2">
                  <Box className="h-3.5 w-[70px] flex flex-col items-start !pt-0.5 !pb-0 !pl-0 !pr-0 box-border">
                    <Box className="w-[70px] h-3 flex items-start gap-[4.1px]">
                      <img
                        className="h-3 w-3 relative"
                        alt=""
                        src="/Star-Icon1.svg"
                      />
                      <img
                        className="h-3 w-3 relative"
                        alt=""
                        src="/Star-Icon1.svg"
                      />
                      <img
                        className="h-3 w-3 relative"
                        alt=""
                        src="/Star-Icon1.svg"
                      />
                      <img
                        className="h-3 w-3 relative"
                        alt=""
                        src="/Star-Icon1.svg"
                      />
                      <img
                        className="h-[10.9px] w-[5.7px] relative"
                        alt=""
                        src="/Star-23.svg"
                      />
                    </Box>
                  </Box>
                  <div
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 500,
                    }}
                    className="h-4 w-[25px] relative inline-block text-[#fff]"
                  >
                    (4.5)
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default TestimonialCard;
