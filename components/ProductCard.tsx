import { FunctionComponent } from "react";
import { Box, Typography } from "@mui/material";

export type ProductCardType = {
  className?: string;
  emptyPlaceholders?: string;
};

const ProductCard: FunctionComponent<ProductCardType> = ({
  className = "",
  emptyPlaceholders,
}) => {
  return (
    <section
      className={`h-[588px] w-[545px] relative min-w-[518px] max-w-full text-left text-2xl text-[#fff] font-[Satoshi] mq900:min-w-full ${className}`}
    >
      <Box className="absolute top-[0px] left-[0px] rounded-[45px] bg-[#000] w-full h-full" />
      <Box className="absolute top-[486px] left-[26px] w-[227px] flex items-start z-[1]">
        <Box className="flex-1 flex items-start">
          <Box className="flex-1 flex items-start">
            <Box className="flex-1 flex flex-col items-start gap-3">
              <Typography
                className="!m-0 self-stretch relative mq450:text-[19px]"
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "500" }}
              >
                Mint flavor chocolate
              </Typography>
              <Box className="self-stretch flex items-start gap-[17px] text-[28px]">
                <Typography
                  className="!m-0 flex-1 relative mq450:text-[22px]"
                  variant="inherit"
                  variantMapping={{ inherit: "h2" }}
                  sx={{ fontWeight: "500" }}
                >
                  ₹399.00
                </Typography>
                <Box className="flex flex-col items-start !pt-3 !pb-0 !pl-0 !pr-0">
                  <Box className="flex items-start gap-1.5">
                    <img
                      className="h-[15px] w-[15px] relative"
                      alt=""
                      src="/Stars-Filled1.svg"
                    />
                    <img
                      className="h-[15px] w-[15px] relative"
                      alt=""
                      src="/Stars-Filled1.svg"
                    />
                    <img
                      className="h-[15px] w-[15px] relative"
                      alt=""
                      src="/Stars-Filled1.svg"
                    />
                    <img
                      className="h-[15px] w-[15px] relative"
                      alt=""
                      src="/Stars-Filled1.svg"
                    />
                    <img
                      className="h-[15px] w-[15px] relative"
                      alt=""
                      src="/Star-18.svg"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="absolute top-[26px] left-[26px] w-[494px] h-[539px] flex flex-col items-end gap-[38px] max-w-full z-[2]">
        <img
          className="self-stretch flex-1 relative rounded-[35px] max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={emptyPlaceholders}
        />
        <Box className="w-[76px] flex items-start">
          <Box className="h-[76px] flex-1 relative">
            <Box className="absolute top-[0px] left-[0px] rounded-[17px] bg-[#57b233] w-full h-full" />
            <img
              className="absolute top-[25px] left-[25px] w-[25px] h-[26px] z-[1]"
              alt=""
              src="/Union.svg"
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default ProductCard;
