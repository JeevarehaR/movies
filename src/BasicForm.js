import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(4, "Please enter valid email")
    .max(20, "Too much Email")
    .required("Why not fill the email")
    .matches(/^[A-Z0-9._%+-]+\.[A-Z]{2,}$/i, "pattern not matched"),
  password: yup
    .string()
    .min(7, "Please enter longer password")
    .max(10, "Too much Password")
    .required("Why not fill the password?"),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        type="email"
        placeholder="Email"
      />
      <br />
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      <br />
      <input
        id="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        type="password"
        placeholder="Password"
      />
      <br />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : ""}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
