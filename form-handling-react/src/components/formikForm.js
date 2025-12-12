import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  // Validation Schema
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        alert("Formik form submitted successfully!");
        console.log(values);
        resetForm();
      }}
    >
      <Form
        style={{ display: "flex", flexDirection: "column", gap: "12px", width: "300px" }}
      >
        <h2>Registration Form (Formik + Yup)</h2>

        <Field type="text" name="username" placeholder="Username" />
        <ErrorMessage name="username" component="p" style={{ color: "red" }} />

        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="p" style={{ color: "red" }} />

        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="p" style={{ color: "red" }} />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
