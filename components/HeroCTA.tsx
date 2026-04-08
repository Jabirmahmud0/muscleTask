import { FunctionComponent } from "react";
import { Button, Box } from "@mui/material";

export type HeroCTAType = {
  className?: string;
};

const HeroCTA: FunctionComponent<HeroCTAType> = ({
  className = "",
}) => {
  return (
    <section
      className={`absolute top-[-91px] left-[597px] w-[1118px] h-[1194px] max-w-full shrink-0 mq450:h-auto mq450:min-h-[1194px] ${className}`}
    >
      <img
        className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_-22px_246px_rgba(0,_0,_0,_0.07),_0px_-10.2px_113.7px_rgba(0,_0,_0,_0.05),_0px_-5.8px_65.1px_rgba(0,_0,_0,_0.04),_0px_-3.5px_39.5px_rgba(0,_0,_0,_0.04),_0px_-2.1px_23.8px_rgba(0,_0,_0,_0.03),_0px_-1.2px_13.3px_rgba(0,_0,_0,_0.03),_0px_-0.5px_5.7px_rgba(0,_0,_0,_0.02)] max-w-full overflow-hidden max-h-full object-cover z-[2]"
        alt=""
        src="/Black-Blue-Modern-Geometric-Financial-Company-Logo-33-1@2x.png"
      />
      <Box className="absolute top-[1030px] left-[49px] w-[998px] h-[90px] flex items-start max-w-full">
        <Box className="self-stretch w-[456px] flex items-start gap-[33px] max-w-full mq450:flex-wrap">
          <Button
            className="flex-1 [backdrop-filter:blur(25px)] box-border z-[3]"
            variant="contained"
            sx={{
              color: "#fff",
              fontSize: "32px !important",
              fontFamily: "Satoshi, sans-serif !important",
              fontWeight: "500 !important",
              background: "rgba(255, 255, 255, 0.1)",
              border: "#fff solid 2px",
              borderRadius: "18px",
              "&:hover": { background: "rgba(255, 255, 255, 0.1)" },
              width: "333px",
              height: "90px",
              textTransform: "none",
            }}
          >
            <span style={{ width: "175px", height: "29px", display: "inline-block", lineHeight: "1" }}>Shop Now</span>
          </Button>
          <Button
            className="self-stretch [backdrop-filter:blur(25px)] box-border z-[3]"
            variant="contained"
            sx={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "#fff solid 2px",
              borderRadius: "18px",
              "&:hover": { background: "rgba(255, 255, 255, 0.1)" },
              width: "90px",
              height: "90px",
              minWidth: "90px",
              padding: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img width="36px" height="36px" src="/maps-and-flags-1.png" style={{ display: "block" }} />
          </Button>
        </Box>
      </Box>
      <Box className="absolute top-[269px] left-[930px] flex flex-col items-start gap-2">
        <Box className="flex items-start gap-[3px]">
          <img
            className="h-[22px] w-[37px] relative object-contain z-[3]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="h-[22px] w-[37px] relative object-contain z-[3]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="h-[22px] w-[37px] relative object-contain z-[3]"
            alt=""
            src="/Polygon-132.svg"
          />
        </Box>
        <Box className="flex items-start !pt-0 !pb-0 !pl-0 !pr-5 gap-0.5">
          <img
            className="h-[22px] w-[37px] relative object-contain z-[3]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="h-[22px] w-[37px] relative object-contain z-[3]"
            alt=""
            src="/Polygon-132.svg"
          />
        </Box>
        <Box className="flex items-start !pt-0 !pb-0 !pl-0 !pr-5 gap-0.5">
          <img
            className="h-[22px] w-[37px] relative object-contain z-[3]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="h-[22px] w-[37px] relative object-contain z-[3]"
            alt=""
            src="/Polygon-132.svg"
          />
        </Box>
        <Box className="flex items-start gap-[3px]">
          <img
            className="h-[22px] w-[37px] relative object-contain z-[3]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="h-[22px] w-[37px] relative object-contain z-[3]"
            alt=""
            src="/Polygon-132.svg"
          />
          <img
            className="h-[22px] w-[37px] relative object-contain z-[3]"
            alt=""
            src="/Polygon-132.svg"
          />
        </Box>
        <Box className="flex items-start !pt-0 !pb-0 !pl-[39px] !pr-[41px]">
          <img
            className="h-[22px] w-[37px] relative object-contain z-[3]"
            alt=""
            src="/Polygon-132.svg"
          />
        </Box>
      </Box>
    </section>
  );
};

export default HeroCTA;
