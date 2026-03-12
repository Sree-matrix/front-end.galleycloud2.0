import { useCallback, useMemo } from "react";
import { Autocomplete, AutocompleteProps, TextField } from "@mui/material";
import { getCitiesOfStateV2, ICity } from "@/core/utils/countries-and-timezones";

interface ICitySelectProps extends Partial<
  Omit<AutocompleteProps<ICity, false, false, false>, "options" | "renderInput" | "onChange">
> {
  label?: string;
  name: string;
  countryCode: string;
  stateCode: string;
  onChange: (e: { target: { name: string; value: ICity | null } }) => void;
  value: ICity | null;
  placeholder?: string;
  error?: boolean;
  helperText?: string | boolean;
  fullWidth?: boolean;
  required?: boolean;
}

export const CitySelect: React.FC<ICitySelectProps> = (props) => {
  const {
    label,
    name,
    countryCode,
    stateCode,
    onChange,
    value,
    placeholder,
    error,
    helperText,
    fullWidth,
    required,
  } = props;

  const cityOptions = useMemo(
    () => getCitiesOfStateV2(countryCode, stateCode),
    [countryCode, stateCode],
  );

  const handleChange = useCallback(
    (_: unknown, newValue: ICity | null) => onChange({ target: { name, value: newValue } }),
    [name, onChange],
  );

  return (
    <Autocomplete
      options={cityOptions}
      getOptionLabel={(option) => option.name}
      onChange={handleChange}
      value={value || null}
      fullWidth={fullWidth}
      renderInput={(params) => (
        <TextField
          variant="outlined"
          label={label ?? "City"}
          slotProps={{ inputLabel: { shrink: true } }}
          placeholder={placeholder ?? "Please select your city"}
          error={error}
          helperText={error && helperText}
          required={required}
          {...params}
        />
      )}
    />
  );
};
