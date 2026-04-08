import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";

export type ProductsHeaderType = {
  className?: string;
};

const ProductsHeader: FunctionComponent<ProductsHeaderType> = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[1150px] left-[calc(50%_-_788px)] w-[1536px] flex flex-col items-start gap-4 max-w-full shrink-0 text-left text-2xl text-[rgba(0,0,0,0.75)] font-[Satoshi] ${className}`}
    >
      <Box className="self-stretch flex flex-col items-end max-w-full">
        <Box className="flex items-start flex-wrap content-start !pt-0 !pb-0 !pl-5 !pr-0 box-border gap-2 shrink-0 max-w-full">
          <img
            className="h-[37px] w-[22px] relative object-contain z-[1]"
            alt=""
            src="/Polygon-132.svg"
          />
          <Box className="flex-1 flex flex-col items-start min-w-[816px] max-w-full mq1275:min-w-full">
            <img
              className="w-[22px] h-[37px] relative object-contain"
              alt=""
              src="/Polygon-132.svg"
            />
          </Box>
          <Box className="w-[52px] flex flex-col items-start !pt-2 !pb-0 !pl-0 !pr-0 box-border">
            <Box className="self-stretch h-[37px] relative">
              <img
                className="absolute top-[0px] left-[30px] w-[22px] h-[37px] object-contain"
                alt=""
                src="/Polygon-132.svg"
              />
              <img
                className="absolute top-[0px] left-[0px] w-[22px] h-[37px] object-contain z-[1]"
                alt=""
                src="/Polygon-132.svg"
              />
            </Box>
          </Box>
        </Box>
        <Box className="w-[1406px] flex items-start justify-end !pt-0 !pb-0 !pl-[30px] !pr-[30px] box-border max-w-full !mt-[-8px] relative">
          <Box className="flex-1 flex items-start flex-wrap content-start gap-2 shrink-0 max-w-full">
            <img
              className="h-[37px] w-[22px] relative object-contain z-[2]"
              alt=""
              src="/Polygon-132.svg"
            />
            <Box className="flex-1 flex flex-col items-start min-w-[816px] max-w-full mq1275:min-w-full">
              <img
                className="w-[22px] h-[37px] relative object-contain"
                alt=""
                src="/Polygon-132.svg"
              />
            </Box>
            <Box className="w-[52px] flex flex-col items-start !pt-2 !pb-0 !pl-0 !pr-0 box-border">
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
            </Box>
          </Box>
        </Box>
        <Box className="flex items-start flex-wrap content-start !pt-0 !pb-0 !pl-5 !pr-0 box-border gap-[38px] shrink-0 max-w-full !mt-[-8px] relative">
          <img
            className="h-[37px] w-[22px] relative object-contain z-[1]"
            alt=""
            src="/Polygon-132.svg"
          />
          <Box className="flex-1 flex flex-col items-start min-w-[777px] max-w-full mq900:min-w-full">
            <img
              className="w-[22px] h-[37px] relative object-contain"
              alt=""
              src="/Polygon-132.svg"
            />
          </Box>
          <Box className="w-[82px] flex flex-col items-start !pt-2 !pb-0 !pl-0 !pr-0 box-border">
            <Box className="self-stretch flex items-start justify-between gap-5">
              <img
                className="h-[37px] w-[22px] relative object-contain z-[1]"
                alt=""
                src="/Polygon-132.svg"
              />
              <img
                className="h-[37px] w-[22px] relative object-contain"
                alt=""
                src="/Polygon-132.svg"
              />
            </Box>
          </Box>
        </Box>
        <Box className="self-stretch flex items-start justify-start !pt-0 !pb-0 !pl-0 !pr-0 box-border max-w-full !mt-[-8px] relative">
          <Box className="flex-1 flex items-start justify-start gap-5 shrink-0 max-w-full mq450:flex-wrap mq450:gap-5">
            <Box className="h-[57.5px] w-[299px] relative">
              <Typography
                className="!m-0 relative z-[1]"
                variant="inherit"
                sx={{
                  fontFamily: "Satoshi, sans-serif !important",
                  fontWeight: "700 !important",
                  fontSize: "36px !important",
                  width: "auto",
                  minWidth: "233px",
                  height: "49px",
                  lineHeight: "49px",
                  color: "#000",
                  whiteSpace: "nowrap",
                }}
              >
                Our Products
              </Typography>
              <img
                className="absolute top-[0px] left-[217px] w-[22px] h-[37px] object-contain"
                alt=""
                src="/Polygon-132.svg"
              />
              <img
                className="absolute top-[0px] left-[247px] w-[22px] h-[37px] object-contain"
                alt=""
                src="/Polygon-132.svg"
              />
              <img
                className="absolute top-[0px] left-[277px] w-[22px] h-[37px] object-contain"
                alt=""
                src="/Polygon-132.svg"
              />
            </Box>
            <Box className="flex flex-col items-start !pt-2 !pb-0 !pl-0 !pr-0">
              <Box className="flex items-start gap-2">
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
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography
        className="!m-0 relative inline-block max-w-full ml-[-18px]"
        variant="inherit"
        sx={{
          fontFamily: "Satoshi, sans-serif !important",
          fontWeight: "500 !important",
          fontSize: "24px !important",
          width: "535px",
          height: "32px",
          lineHeight: "32px",
        }}
      >
        Fuel Your Workouts with Protein-Packed Nutrition
      </Typography>
    </section>
  );
};

export default ProductsHeader;
