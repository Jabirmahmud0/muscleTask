import { FC } from "react";

interface ExpertiseHeaderProps {
  className?: string;
}

const ExpertiseHeader: FC<ExpertiseHeaderProps> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-start gap-2 max-w-full text-black/75 font-satoshi ${className}`}>
      <div className="flex flex-wrap items-center gap-5 w-full">
        <h2 className="text-[36px] font-bold leading-[49px] m-0 whitespace-nowrap">
          Train Like a Champion
        </h2>
        
        <div className="flex gap-2 pt-3">
          {[1, 2, 3].map((i) => (
            <img 
              key={i}
              className="h-[37px] w-[22px] object-contain" 
              alt="" 
              src="/Polygon-132.svg" 
            />
          ))}
        </div>
      </div>

      <h3 className="text-[24px] font-medium leading-[32px] m-0">
        Unleash Your Power with Expert Boxing Training
      </h3>
    </div>
  );
};

export default ExpertiseHeader;

