import { FunctionComponent } from "react";

export type FooterLinksType = {
  className?: string;
};

const FooterLinks: FunctionComponent<FooterLinksType> = ({ className = "" }) => {
  const headingStyle: React.CSSProperties = {
    fontFamily: "Satoshi, sans-serif",
    fontSize: 22,
    fontWeight: 500,
    color: "#000",
    margin: 0,
  };

  const textStyle: React.CSSProperties = {
    fontFamily: "Satoshi, sans-serif",
    fontSize: 18,
    fontWeight: 400,
    color: "rgba(0,0,0,0.75)",
    lineHeight: 1.5,
  };

  const linkStyle: React.CSSProperties = {
    ...textStyle,
    cursor: "pointer",
  };

  return (
    <div className={`flex gap-[80px] text-left font-[Satoshi] ${className}`}>
      <div style={{ width: 502 }}>
        <h3 style={headingStyle}>About</h3>
        <p style={{ ...textStyle, width: 502, height: 72, marginTop: 16 }}>
          At MuscleForge, we believe in the power of dedication and hard work.
          Our mission is to provide you with the tools, resources, and community
          you need to build the body of your dreams
        </p>
        <hr
          style={{
            width: 160,
            borderTop: "1px solid rgba(0,0,0,0.3)",
            margin: "36px 0 12px",
          }}
        />
        <div className="flex items-center gap-3" style={{ fontSize: 18 }}>
          <span style={{ ...textStyle, fontWeight: 500 }}>Social Media:</span>
          <b style={{ cursor: "pointer", color: "#000", fontSize: 18 }}>Fb</b>
          <b style={{ cursor: "pointer", color: "#000", fontSize: 18 }}>In</b>
          <b style={{ cursor: "pointer", color: "#000", fontSize: 18 }}>Tw</b>
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <h3 style={headingStyle}>Quick Links</h3>
        {["Home", "Our gym location", "Contact Us", "Privacy policy"].map((item) => (
          <span key={item} style={linkStyle}>
            {item}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-[12px]">
        <h3 style={headingStyle}>Our Service</h3>
        {["Indoor gym", "Outdoor gym", "On ground gym", "Yoga class"].map((item) => (
          <span key={item} style={linkStyle}>
            {item}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-[12px]">
        <h3 style={headingStyle}>Contact Info</h3>
        <p style={{ ...linkStyle, margin: 0 }}>
          <b>Mail:</b> info@example.com
        </p>
        <p style={{ ...linkStyle, margin: 0 }}>
          <b>Call:</b> +91 9876543210
        </p>
        <p style={{ ...linkStyle, margin: 0 }}>
          <b>Location:</b> New York, 235 Lane, 10001
        </p>
        <p style={{ ...linkStyle, margin: 0 }}>
          <b>Time:</b> Workout Hours: 5AM - 8PM
        </p>
      </div>
    </div>
  );
};

export default FooterLinks;
