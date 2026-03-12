import { useFormik } from "formik";
import * as Yup from "yup";

export type TCallbackRequestInfo = {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  message: string;
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .matches(/^[\s'A-Za-z-]+$/, "Please enter a valid first name")
    .min(2, "Must be at least 2 characters")
    .max(50, "Cannot exceed 50 characters")
    .required("First name is required"),

  lastName: Yup.string()
    .trim()
    .matches(/^[\s'A-Za-z-]+$/, "Please enter a valid last name")
    .min(2, "Must be at least 2 characters")
    .max(50, "Cannot exceed 50 characters")
    .required("Last name is required"),

  contactNumber: Yup.string()
    .trim()
    .transform((value) => (value ? value.replace(/\D/g, "") : value))
    .matches(/^\d{10,15}$/, "Must be a valid 10 to 15 digit phone number")
    .required("Contact number is required"),

  email: Yup.string().email("Please enter a valid email address").required("Email is required"),

  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message cannot exceed 500 characters")
    .required("A message is required"),
});

export const useCallbackRequestForm = (
  initialValue: TCallbackRequestInfo | null,
  completedCB?: () => void,
) => {
  return useFormik<TCallbackRequestInfo>({
    enableReinitialize: true,
    initialValues: {
      firstName: initialValue?.firstName ?? "",
      lastName: initialValue?.lastName ?? "",
      contactNumber: initialValue?.contactNumber ?? "",
      email: initialValue?.email ?? "",
      message: initialValue?.message ?? "",
    },
    validationSchema,
    onSubmit: async (values, helpers) => {
      try {
        completedCB?.();
        helpers.resetForm();
      } catch {}
    },
  });
};
