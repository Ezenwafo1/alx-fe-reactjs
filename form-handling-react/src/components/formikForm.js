// src/components/formikForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Explicit Yup.string().required constants
const usernameValidation = Yup.string()
  .min(3, "Username must be at least 3 characters")
  .required("Username is required");
const emailValidation = Yup.string()
  .email("Invalid email format")
  .required("Email is required");
const passwordValidation = Yup.string()
  .min(6, "Password must be at least 6 characters")
  .required("Password is required");

// Validation Schema using the constants
const validationSchema = Yup.object({
  username: usernameValidation,
  email: emailValidation,
  password: passwordValidation,
});

function FormikForm() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-600">
        Registration Form (Formik + Yup)
      </h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("Form Submitted:", values);
          alert(`Registration Successful!\nWelcome, ${values.username}`);
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* Username */}
            <div>
              <label className="block font-medium mb-1">Username</label>
              <Field
                type="text"
                name="username"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block font-medium mb-1">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-400"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition shadow disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
