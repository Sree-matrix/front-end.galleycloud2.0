import Link from "next/link";
import { Button, ButtonProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    whitebtn: true;
  }
}

export interface BaseButtonProps extends ButtonProps {
  LeftIcon?: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  children: React.ReactNode;
  RightIcon?: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  loading?: boolean;
  rounded?: boolean;
}

export const BaseButton: React.FC<BaseButtonProps> = (props) => {
  const {
    LeftIcon,
    children,
    RightIcon,
    variant = "contained",
    loading,
    href,
    rounded,
    ...rest
  } = props;

  return (
    <Button
      variant={variant}
      {...(href && { LinkComponent: Link, href })}
      {...rest}
      sx={{
        borderRadius: rounded ? "10rem" : undefined,
        ...rest.sx,
      }}
    >
      {children}
    </Button>
  );
};
