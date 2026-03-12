import { useCallback, useMemo } from "react";
import { Autocomplete, AutocompleteProps, TextField } from "@mui/material";
import { getStatesOfCountryV2, IState } from "@/core/utils/countries-and-timezones";

interface IStateSelectProps extends Partial<
  Omit<
    AutocompleteProps<string, false, false, false>,
    "options" | "renderInput" | "onChange" | "value"
  >
> {
  label?: string;
  name: string;
  countryCode: string;
  onChange: (e: { target: { name: string; value: IState | null } }) => void;
  value: IState | null;
  placeholder?: string;
  error?: boolean;
  helperText?: string | boolean;
  fullWidth?: boolean;
  required?: boolean;
}

export const StateSelect: React.FC<IStateSelectProps> = (props) => {
  const {
    label,
    name,
    countryCode,
    onChange,
    value,
    placeholder,
    error,
    helperText,
    fullWidth,
    required,
  } = props;

  const stateOptions = useMemo(() => getStatesOfCountryV2(countryCode), [countryCode]);

  const handleChange = useCallback(
    (_: React.SyntheticEvent, newValue: IState | null) =>
      onChange({ target: { name, value: newValue } }),
    [name, onChange],
  );

  return (
    <Autocomplete
      options={stateOptions}
      getOptionLabel={(option) => option.name}
      onChange={handleChange}
      value={value || null}
      fullWidth={fullWidth}
      renderInput={(params) => (
        <TextField
          variant="outlined"
          label={label ?? "State/Province"}
          slotProps={{ inputLabel: { shrink: true } }}
          placeholder={placeholder ?? "Please select your state"}
          error={error}
          helperText={error && helperText}
          required={required}
          {...params}
        />
      )}
    />
  );
};
