import Link from "next/link";
import { Button, ButtonProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

// 1. This "Module Augmentation" tells MUI that 'whitebtn' is a real variant.
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    whitebtn: true;
  }
}

// 2. Now you can extend ButtonProps directly without errors.
export interface BaseButtonProps extends ButtonProps {
  LeftIcon?: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  children: React.ReactNode; 
  RightIcon?: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  loading?: boolean;
  rounded?: boolean;
}

export const BaseButton: React.FC<BaseButtonProps> = (props) => {
  const { LeftIcon, children, RightIcon, variant = "contained", loading, href, rounded, ...rest } = props;

  return (
    <Button
      variant={variant} // No 'as any' needed anymore!
      {...(href && { LinkComponent: Link, href })}
      {...rest}
      sx={{ 
        borderRadius: rounded ? "10rem" : undefined, 
        ...rest.sx 
      }}
    >
      {children}
    </Button>
  );
};