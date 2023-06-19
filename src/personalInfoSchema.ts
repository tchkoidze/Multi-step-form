import * as yup from "yup";

const personalinfoSchema = yup.object({
  name: yup
    .string()
    .required("name is required")
    .min(2, "name must be 2 or more characters"),
  email: yup.string().email().required("email is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone number must contain only digits")
    .length(9, "Phone number must be exactly 9 digits"),
});

export default personalinfoSchema;
