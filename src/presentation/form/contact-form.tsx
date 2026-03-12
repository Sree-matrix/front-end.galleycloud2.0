"use client";

import React, { useState } from "react";
import { Stack, Alert } from "@mui/material";
import { TextInput } from "@/components/form-fields/text-input";
import { PhoneNumberInput } from "@/components/form-fields/phone-number";
import { BaseButton } from "@/components/buttons/base";
import { useCallbackRequestForm } from "@/components/forms/user-callback-request-form";

export const ContactForm: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const formik = useCallbackRequestForm(null, () => {
    setIsSuccess(true);
    setSubmitError(null);
  });

  const inputSx = {
    "& .MuiOutlinedInput-root": { borderRadius: "8px" },
    "& legend": { display: "none" },
    "& fieldset": { top: 0 },
  };

  return (
    <Stack sx={{ flexDirection: "column", display: "flex", width: "100%", gap: "1rem" }}>
      <Stack sx={{ flexDirection: { xs: "column", sm: "row" }, display: "flex", gap: "1rem" }}>
        <TextInput
          label="First Name"
          name="firstName"
          detachedLabel
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          required
          fullWidth
          sx={inputSx}
        />

        <TextInput
          label="Last Name"
          name="lastName"
          detachedLabel
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          required
          fullWidth
          sx={inputSx}
        />
      </Stack>

      <TextInput
        label="Email"
        name="email"
        detachedLabel
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        required
        fullWidth
        sx={inputSx}
      />

      <PhoneNumberInput
        label="Phone"
        name="contactNumber"
        detachedLabel
        isEditing={true}
        value={formik.values.contactNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.contactNumber && Boolean(formik.errors.contactNumber)}
        helperText={formik.touched.contactNumber && formik.errors.contactNumber}
        required
        fullWidth
      />

      <TextInput
        label="Message"
        name="message"
        detachedLabel
        value={formik.values.message}
        onChange={(e) => formik.setFieldValue("message", e.target.value.slice(0, 500))}
        onBlur={formik.handleBlur}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={
          formik.touched.message && formik.errors.message
            ? formik.errors.message
            : `${formik.values.message.length}/500`
        }
        multiline
        rows={4}
        fullWidth
        sx={inputSx}
      />

      <BaseButton
        disabled={formik.isSubmitting}
        onClick={async () => {
          try {
            await formik.submitForm();
            if (formik.isValid) {
              // Assume success if no throw
              setSubmitError(null);
            }
          } catch (e: unknown) {
            const error = e as Error;
            setSubmitError(error?.message || "An unexpected error occurred. Please try again.");
            setIsSuccess(false);
          }
        }}
        loading={formik.isSubmitting}
        fullWidth
      >
        Send Inquiry
      </BaseButton>

      {isSuccess && (
        <Alert severity="success" sx={{ marginTop: "1rem" }}>
          Inquiry sent successfully! We will get back to you soon.
        </Alert>
      )}

      {submitError && (
        <Alert severity="error" sx={{ marginTop: "1rem" }}>
          {submitError}
        </Alert>
      )}
    </Stack>
  );
};
