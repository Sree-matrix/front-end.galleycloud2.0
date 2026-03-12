import { useCallback, useMemo } from "react";
import { Autocomplete, AutocompleteProps, TextField } from "@mui/material";
import { getCountriesV2, ICountry } from "@/core/utils/countries-and-timezones";

interface ICountrySelectProps extends Partial<
  Omit<
    AutocompleteProps<string, false, false, false>,
    "options" | "renderInput" | "onChange" | "value"
  >
> {
  label?: string;
  name: string;
  onChange: (e: { target: { name: string; value: ICountry | null } }) => void;
  value: ICountry | null;
  placeholder?: string;
  error?: boolean;
  helperText?: string | boolean;
  fullWidth?: boolean;
  required?: boolean;
}

export const CountrySelect: React.FC<ICountrySelectProps> = (props) => {
  const { label, name, onChange, value, placeholder, error, helperText, fullWidth, required } =
    props;

  const countryOptions = useMemo(() => getCountriesV2(), []);

  const handleChange = useCallback(
    (_: unknown, newValue: ICountry | null) => onChange({ target: { name, value: newValue } }),
    [name, onChange],
  );

  return (
    <Autocomplete
      options={countryOptions}
      getOptionLabel={(option) => option.name}
      onChange={handleChange}
      value={value || null}
      fullWidth={fullWidth}
      renderInput={(params) => (
        <TextField
          variant="outlined"
          label={label ?? "Country"}
          slotProps={{ inputLabel: { shrink: true } }}
          placeholder={placeholder ?? "Please select your country"}
          error={error}
          helperText={error && helperText}
          required={required}
          {...params}
        />
      )}
    />
  );
};
