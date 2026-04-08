import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { Box, Typography } from "@mui/material";

export type OfferCardType = {
  className?: string;
  yoga12?: string;
  groundRunning?: string;

  /** Style props */
  actionsStackPadding?: CSSProperties["padding"];
  groundRunningAlignSelf?: CSSProperties["alignSelf"];
};

const OfferCard: FunctionComponent<OfferCardType> = ({
  className = "",
  actionsStackPadding,
  yoga12,
  groundRunning,
  groundRunningAlignSelf,
}) => {
  const actionsStackStyle: CSSProperties = useMemo(() => {
    return {
      padding: actionsStackPadding,
    };
  }, [actionsStackPadding]);

  const groundRunningStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: groundRunningAlignSelf,
    };
  }, [groundRunningAlignSelf]);

  return (
    <Box
      className={`self-stretch rounded-[30px] bg-[rgba(255,255,255,0.15)] border-[rgba(255,255,255,0.5)] border-solid border-[2px] box-border flex items-start !pt-[26px] !pb-[26px] !pl-[33px] !pr-[31px] gap-[22px] max-w-full z-[2] text-left text-2xl text-[#fff] font-[Satoshi] mq450:flex-wrap ${className}`}
      style={actionsStackStyle}
    >
      <Box className="h-[134px] w-[344px] relative rounded-[30px] bg-[rgba(255,255,255,0.15)] border-[rgba(255,255,255,0.5)] border-solid border-[2px] box-border hidden max-w-full shrink-0" />
      <Box className="h-[76px] w-[76px] rounded-[15px] bg-[rgba(255,255,255,0.15)] border-[rgba(255,255,255,0.35)] border-solid border-[2px] box-border flex items-start !pt-1 !pb-1 !pl-[5px] !pr-[5px] z-[3] shrink-0">
        <Box className="h-[76px] w-[76px] relative rounded-[15px] bg-[rgba(255,255,255,0.15)] border-[rgba(255,255,255,0.35)] border-solid border-[2px] box-border hidden shrink-0" />
        <img
          className="h-[62px] w-[62px] relative object-cover z-[4] shrink-0"
          loading="lazy"
          alt=""
          src={yoga12}
        />
      </Box>
      <Box className="flex-1 flex flex-col items-start !pt-[22px] !pb-0 !pl-0 !pr-0 box-border min-w-[116px] shrink-0">
        <Typography
          className="!m-0 relative z-[3]"
          variant="inherit"
          sx={{
            fontFamily: "Satoshi, sans-serif !important",
            fontWeight: "700 !important",
            fontSize: "24px !important",
            width: "180px",
            height: "32px",
            lineHeight: "32px",
          }}
          style={groundRunningStyle}
        >
          {groundRunning}
        </Typography>
      </Box>
    </Box>
  );
};

export default OfferCard;
