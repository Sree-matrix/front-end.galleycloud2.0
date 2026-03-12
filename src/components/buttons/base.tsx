import Link from "next/link";
import { Button,  ButtonProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface BaseButtonProps extends ButtonProps {
  LeftIcon?: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  children: string | React.ReactNode;
  RightIcon?: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  loading?: boolean;
  rounded?: boolean;
}

// Extend the variant type to include 'whitebtn'
export interface BaseButtonProps extends Omit<ButtonProps, 'variant'> {
  variant?: ButtonProps['variant'] | 'whitebtn'; 
  LeftIcon?: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  children: string | React.ReactNode;
  RightIcon?: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  loading?: boolean;
  rounded?: boolean;
}

export const BaseButton: React.FC<BaseButtonProps> = (props) => {
  const { LeftIcon, children, RightIcon, variant, loading, href, rounded, ...rest } = props;

  return (
    <Button
      // If variant is whitebtn, it uses our custom theme style
      variant={(variant as any) ?? "contained"} 
      {...(href && { LinkComponent: Link, href })}
      {...rest}
      sx={{ 
        borderRadius: rounded ? "10rem" : undefined, 
        ...rest.sx 
      }}
    >
      {/* ... icon logic remains the same ... */}
      {children}
    </Button>
  );
};