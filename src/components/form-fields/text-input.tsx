import {
  OutlinedTextFieldProps,
  SxProps,
  Stack,
  FormLabel,
  TextField,
  InputAdornment,
} from "@mui/material";

interface TextInputProps extends OutlinedTextFieldProps {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  value: string;
  onDoubleClick?: () => void;
  onChange: (e: { target: { name: string; value: string } }) => void;
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

const TextInput: React.FC<Partial<TextInputProps>> = (props) => {
  const {
    startAdornment,
    endAdornment,
    detachedLabel,
    label,
    isEditing = true,
    onDoubleClick,
    error,
    helperText,
    required,
    fullWidth,
    ...rest
  } = props;

  return (
    <Stack sx={{ ...(fullWidth && { width: "100%" }) }}>
      {detachedLabel && (
        <FormLabel required={required} sx={{ marginBottom: "-0.25rem" }}>
          {label}
        </FormLabel>
      )}

      <TextField
        {...(!detachedLabel && { label: label })}
        {...rest}
        fullWidth={fullWidth}
        error={isEditing && error}
        helperText={isEditing && helperText}
        onDoubleClick={onDoubleClick}
        required={required}
        slotProps={{
          input: {
            readOnly: !isEditing,
            ...(startAdornment && {
              startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment>,
              sx: { "& .MuiOutlinedInput-input": { padding: { xs: "0.5rem 0rem" } } },
            }),
            ...(endAdornment && {
              endAdornment: <InputAdornment position="end">{endAdornment}</InputAdornment>,
            }),
          },
        }}
      />
    </Stack>
  );
};

export { TextInput };
