import { ButtonProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface ICustomButtonProps extends ButtonProps {
  LeftIcon?: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  title: string;
  RightIcon?: OverridableComponent<SvgIconTypeMap<object, "svg">>;
}
