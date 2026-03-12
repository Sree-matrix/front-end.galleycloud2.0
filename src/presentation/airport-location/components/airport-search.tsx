"use client";

import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type TProps = {
  search: string;
  setSearch: (value: string) => void;
};

export const AirportSearch = ({ search, setSearch }: TProps) => {
  return (
    <TextField
      fullWidth
      placeholder="Search by airport name, ICAO, IATA, or city"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={{ color: "text.secondary" }} />
            </InputAdornment>
          ),
        },
      }}
      sx={{
        marginBottom: "2rem",
        maxWidth: "25rem",
        "& .MuiOutlinedInput-root": {
          height: "3rem",
          borderRadius: "0.75rem",
          backgroundColor: "grey.100",
          "& fieldset": { border: "none" },
          "&.Mui-focused fieldset": {
            border: "0.125rem solid",
            borderColor: "primary.main",
          },
        },
      }}
    />
  );
};
