import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form data", values);
    alert("Formik form submitted ✅");
    resetForm();
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Formik Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          {/* Username */}
          <div>
            <label className="block font-medium">Username</label>
            <Field
              type="text"
              name="username"
              className="w-full border p-2 rounded"
              placeholder="Enter username"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full border p-2 rounded"
              placeholder="Enter email"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium">Password</label>
            <Field
              type="password"
              name="password"
              className="w-full border p-2 rounded"
              placeholder="Enter password"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 shadow-md"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
