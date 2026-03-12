import { useEffect, useState, useCallback } from "react";
import { SxProps, Stack, FormLabel, Autocomplete, TextField } from "@mui/material";
import { createFilterOptions } from "@mui/material/Autocomplete";
import { useAppDispatch } from "@/store/hooks";
import { GetAirportsFeature } from "@/features/@platform-configs";

type TAirport = { name: string; iata?: string; icao: string; country?: string };

interface IDeliverableAirportsSelectProps {
  country?: string;
  value: TAirport[];
  onChange: (e: { target: { name: string; value: TAirport[] } }) => void;
  detachedLabel?: boolean;
  label?: string;
  name: string;
  isEditing?: boolean;
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
  helperText?: string | boolean;
  required?: boolean;
  fullWidth?: boolean;
  sx?: SxProps;
}

export const DeliverableAirportsSelect: React.FC<IDeliverableAirportsSelectProps> = (props) => {
  const {
    country,
    value,
    onChange,
    detachedLabel,
    label,
    name,
    error,
    helperText,
    isEditing,
    fullWidth,
    required,
  } = props;
  const dispatch = useAppDispatch();

  const [isLoading, setLoading] = useState(false);

  const [previousCountry, setPreviousCountry] = useState<string | undefined>(country);
  const [airports, setAirports] = useState<TAirport[]>([]);

  useEffect(() => {
    if (previousCountry !== country) {
      setPreviousCountry(country);
      onChange({ target: { name, value: [] } });
    }
  }, [name, previousCountry, country, onChange]);

  const getAirports = useCallback(async () => {
    if (!country) return;
    setLoading(true);
    const result = await dispatch(GetAirportsFeature.getAirports({ country }));
    setAirports((result?.data?.result?.airports as TAirport[]) || []);
    setLoading(false);
  }, [country, dispatch]);

  useEffect(() => {
    getAirports();
  }, [country, getAirports]);

  const filterOptions = createFilterOptions<TAirport>({
    matchFrom: "any",
    stringify: (option) => option.name,
  });

  return (
    <Stack sx={{ ...props.sx }}>
      {detachedLabel && <FormLabel sx={{ marginBottom: "-0.25rem" }}>{label}</FormLabel>}

      <Autocomplete
        forcePopupIcon
        readOnly={!isEditing}
        filterOptions={filterOptions}
        loading={isLoading}
        options={airports}
        getOptionLabel={(option) => option.name}
        isOptionEqualToValue={(option, value) => option.icao === value.icao}
        noOptionsText={
          country
            ? isLoading
              ? "Loading airports..."
              : "No airports available"
            : "Please select a country first"
        }
        value={value}
        onChange={(_, newValue) => onChange({ target: { name, value: newValue || [] } })}
        renderInput={(params) => (
          <TextField
            variant="outlined"
            {...(!detachedLabel && { label: label })}
            {...params}
            placeholder={
              country
                ? isLoading
                  ? "Loading airports..."
                  : "Select airports"
                : "Please select a country first"
            }
            error={error}
            helperText={error && helperText}
            required={required}
            fullWidth={fullWidth}
            sx={{ textTransform: "capitalize", height: "3rem" }}
          />
        )}
        multiple
      />

      {/* {JSON.stringify(helperText)} */}
    </Stack>
  );
};
