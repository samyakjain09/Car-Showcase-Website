import { useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleSubmit = (onSuccess) => (event) => {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitted(true);

    if (Object.keys(validationErrors).length === 0) {
      onSuccess();
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
  };

  return {
    values,
    errors,
    submitted,
    handleChange,
    handleSubmit,
    resetForm,
  };
}

export function validateEmail(value) {
  return emailPattern.test(value);
}
