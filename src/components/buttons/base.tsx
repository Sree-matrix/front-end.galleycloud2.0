import Link from "next/link";
import { Button, CircularProgress, ButtonProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface BaseButtonProps extends ButtonProps {
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
      variant={variant ?? "contained"}
      {...(href && { LinkComponent: Link, href })}
      {...rest}
      sx={{ borderRadius: rounded ? "10rem" : undefined, ...rest.sx }}
    >
      {LeftIcon && (
        <LeftIcon sx={{ width: "1rem", height: "1rem", margin: "auto 0.5rem auto -0.25rem" }} />
      )}
      {children}
      {loading && (
        <CircularProgress
          size="1rem"
          sx={{ marginLeft: "0.625rem", ...(rest.disabled && { color: "#00000033" }) }}
        />
      )}
      {RightIcon && (
        <RightIcon sx={{ width: "1rem", height: "1rem", margin: "auto -0.25rem auto 0.5rem" }} />
      )}
    </Button>
  );
};
