"use client";

import React from "react";
import { Stack, FormLabel, FormHelperText, SxProps } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

interface IPhoneNumberInputProps {
  detachedLabel?: boolean;
  label?: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  onBlur?: (e: { target: { name: string; value: string } }) => void;
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

export const PhoneNumberInput: React.FC<IPhoneNumberInputProps> = (props) => {
  const {
    value,
    onChange,
    detachedLabel,
    label,
    name,
    error,
    helperText,
    isEditing = true,
    fullWidth,
    required,
  } = props;

  const handleChange = (val: string) => {
    onChange({ target: { name, value: val } });
  };

  return (
    <Stack sx={{ ...(fullWidth && { width: "100%" }), position: "relative" }}>
      {detachedLabel && (
        <FormLabel
          required={required}
          sx={{
            marginBottom: "0.25rem",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "#374151",
          }}
        >
          {label}
        </FormLabel>
      )}

      <PhoneInput
        containerStyle={styles(error ?? false).container}
        inputStyle={styles(error ?? false).input}
        specialLabel={detachedLabel ? "" : label}
        country={"us"}
        value={value}
        onChange={handleChange}
        inputProps={{
          name,
          required,
          disabled: !isEditing,
        }}
        disabled={!isEditing}
      />

      {error && (
        <FormHelperText error sx={{ margin: "4px 14px", lineHeight: "1rem" }}>
          {helperText}
        </FormHelperText>
      )}
    </Stack>
  );
};

const styles = (error: boolean) => ({
  input: {
    padding: "0.6rem 1rem 0.6rem 3.5rem",
    height: "3.25rem",
    width: "100%",
    fontFamily: "inherit",
    fontSize: "0.875rem",
    borderRadius: "8px",
    borderColor: error ? "#d32f2f" : "#E2E8F0",
    transition: "border-color 0.2s ease-in-out",
  },
  container: {
    width: "100%",
    color: error ? "#D32F2F" : "#000",
    fontFamily: "inherit",
    fontSize: "0.875rem",
    margin: "0",
  },
});
