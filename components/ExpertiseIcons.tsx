import { FC } from "react";

interface ExpertiseIconsProps {
  className?: string;
}

const ExpertiseIcons: FC<ExpertiseIconsProps> = ({ className = "" }) => {
  return (
    <div className={`self-stretch flex flex-wrap items-start gap-5 ${className}`}>
      {/* First group of icons */}
      <div className="flex items-start">
        <img className="h-[22px] w-[37px]" loading="lazy" alt="" src="/Polygon-132.svg" />
        <div className="pt-[30px]">
          <img className="w-[37px] h-[22px]" loading="lazy" alt="" src="/Polygon-132.svg" />
        </div>
        <img className="h-[22px] w-[37px]" alt="" src="/Polygon-132.svg" />
        <div className="h-[52px] w-[37px] relative">
          <img className="absolute top-[30px] left-0 w-[37px] h-[22px]" alt="" src="/Polygon-132.svg" />
          <img className="absolute top-0 left-0 w-[37px] h-[22px] z-[1]" alt="" src="/Polygon-132.svg" />
        </div>
      </div>

      {/* Second group of icons */}
      <div className="pt-2">
        <div className="flex items-start gap-2">
          <div className="flex flex-col">
            <img className="w-[22px] h-[37px] object-contain z-[2]" alt="" src="/Polygon-132.svg" />
            <img className="w-[22px] h-[37px] object-contain z-[1]" alt="" src="/Polygon-132.svg" />
          </div>
          <img className="h-[37px] w-[22px] object-contain" alt="" src="/Polygon-132.svg" />
          <div className="pt-[37px]">
            <img className="w-[22px] h-[37px] object-contain" alt="" src="/Polygon-132.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseIcons;

