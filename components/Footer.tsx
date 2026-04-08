import { FunctionComponent } from "react";
import FooterLinks from "./FooterLinks";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  const dividerStyle: React.CSSProperties = {
    width: "100%",
    borderTop: "1px solid rgba(0, 0, 0, 0.2)",
    border: "none",
  };

  const bottomDividerStyle: React.CSSProperties = {
    width: 600,
    borderTop: "1px solid rgba(0, 0, 0, 0.2)",
    border: "none",
    margin: "0 auto",
  };

  return (
    <section
      className={`absolute top-[5200px] left-[calc(50%_-_650.5px)] w-[1561px] max-w-full text-left font-[Satoshi] ${className}`}
    >
      <div className="mb-[20px] mt-[24px] ml-[70px] h-px w-[1280px] max-w-full bg-[rgba(0,0,0,0.2)]" />
      <section>
        <footer>
          <hr style={dividerStyle} />

          <div className="flex justify-between pt-[50px] pb-[40px]">
            <FooterLinks />
          </div>

          <hr style={bottomDividerStyle} />
          <div className="mx-auto mt-[10px] h-px w-[180px] bg-[rgba(0,0,0,0.2)]" />

          <p
            className="text-center pt-[18px]"
            style={{
              fontFamily: "Satoshi, sans-serif",
              fontSize: 18,
              fontWeight: 400,
              color: "rgba(0,0,0,0.75)",
            }}
          >
            websitename.com©2024 all right reserve
          </p>
        </footer>
      </section>
    </section>
  );
};

export default Footer;
