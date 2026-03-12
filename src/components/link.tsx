import Link from "next/link";
import { Typography } from "@mui/material";

interface ICustomLinkProps {
  color?: "black" | "white";
  href: string;
  children: string;
  inLine?: boolean;
}

export const CustomLink: React.FC<ICustomLinkProps> = (props) => {
  const { color = "black", href, children, inLine } = props;

  return (
    <Link
      href={href}
      style={{
        color: color,
        textDecoration: "underline",
        textDecorationColor: color,
        textUnderlineOffset: "2px",
      }}
    >
      {inLine ? (
        children
      ) : (
        <Typography variant="body2" sx={{ color: color }}>
          {children}
        </Typography>
      )}
    </Link>
  );
};
