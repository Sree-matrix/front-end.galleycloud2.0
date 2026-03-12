import Link from "next/link";
import { Button, ButtonProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

<<<<<<< HEAD
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
=======
export interface BaseButtonProps extends ButtonProps {
  LeftIcon?: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  children: React.ReactNode; // ReactNode already includes string
>>>>>>> 409b4f76411524dce60ed267978992eaf8f15f71
  RightIcon?: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  loading?: boolean;
  rounded?: boolean;
}

export const BaseButton: React.FC<BaseButtonProps> = (props) => {
  const { LeftIcon, children, RightIcon, variant = "contained", loading, href, rounded, ...rest } = props;

  return (
    <Button
<<<<<<< HEAD
      variant={variant} // No 'as any' needed anymore!
=======
      variant={variant} 
>>>>>>> 409b4f76411524dce60ed267978992eaf8f15f71
      {...(href && { LinkComponent: Link, href })}
      {...rest}
      sx={{ 
        borderRadius: rounded ? "10rem" : undefined, 
        ...rest.sx 
      }}
    >
<<<<<<< HEAD
=======
      {/* Icon logic can go here */}
>>>>>>> 409b4f76411524dce60ed267978992eaf8f15f71
      {children}
    </Button>
  );
};