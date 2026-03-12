import Image from "next/image";

interface GalleyCloudLogoProps {
  size?: number;
  color?: "white" | "black";
}

export const GalleyCloudLogo: React.FC<GalleyCloudLogoProps> = (props) => {
  const { size, color = "white" } = props;

  return (
    <Image
      alt="GalleyCloud Logo"
      src={`/assets/images/logos/logo-cloud-${color}.webp`}
      style={{ objectFit: "contain", objectPosition: "center" }}
      width={size ?? 48}
      height={size ?? 48}
    />
  );
};

interface GalleyCloudLogoFullProps {
  height?: number;
  width?: number;
  color?: "white" | "black";
}

export const GalleyCloudLogoFull: React.FC<GalleyCloudLogoFullProps> = (props) => {
  const { width, height } = props;

  return (
    <Image
      alt="GalleyCloud Logo"
      src="/assets/images/logos/logo-full-vertical.png"
      style={{ objectFit: "contain", objectPosition: "center" }}
      width={width ?? 140}
      height={height ?? 140}
    />
  );
};
