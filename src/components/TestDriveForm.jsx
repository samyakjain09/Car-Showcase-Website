import { useState } from "react";
import { useCars } from "../context/CarContext";
import { useForm, validateEmail } from "../hooks/useForm";

function TestDriveForm() {
  const { cars } = useCars();
  const [successMessage, setSuccessMessage] = useState("");

  const {
    values,
    errors,
    submitted,
    handleChange,
    handleSubmit,
    resetForm,
  } = useForm(
    {
      fullName: "",
      email: "",
      phone: "",
      preferredCar: cars[0]?.name ?? "",
      preferredDate: "",
      city: "",
      notes: "",
    },
    (formValues) => {
      const validationErrors = {};

      if (!formValues.fullName.trim()) {
        validationErrors.fullName = "Full name is required.";
      }

      if (!formValues.email.trim()) {
        validationErrors.email = "Email address is required.";
      } else if (!validateEmail(formValues.email)) {
        validationErrors.email = "Enter a valid email address.";
      }

      if (!formValues.phone.trim()) {
        validationErrors.phone = "Phone number is required.";
      }

      if (!formValues.preferredDate) {
        validationErrors.preferredDate = "Select a preferred date.";
      }

      if (!formValues.city.trim()) {
        validationErrors.city = "City is required.";
      }

      return validationErrors;
    }
  );

  const onSubmit = () => {
    setSuccessMessage(
      `Your test drive request for ${values.preferredCar} has been recorded. Our team will reach out shortly.`
    );
    resetForm();
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="glass-panel p-8">
        <p className="text-xs uppercase tracking-[0.35em] text-accent">
          Premium Experience
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white">
          Book an immersive test drive
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Choose your model, preferred date, and location. This is a frontend
          simulation with static UI validation only.
        </p>

        <div className="mt-8 space-y-4 text-sm text-slate-300">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            Personalized product walkthrough
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            Product specialist support at select studios
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            UI-only booking flow for frontend demo purposes
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="glass-panel space-y-5 p-8"
        noValidate
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            label="Full Name"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            error={errors.fullName}
            submitted={submitted}
            placeholder="Your name"
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            error={errors.email}
            submitted={submitted}
            placeholder="you@example.com"
          />
          <FormField
            label="Phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            error={errors.phone}
            submitted={submitted}
            placeholder="+91 98765 43210"
          />
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Preferred Car
            </label>
            <select
              name="preferredCar"
              value={values.preferredCar}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/60"
            >
              {cars.map((car) => (
                <option key={car.id} value={car.name}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>
          <FormField
            label="Preferred Date"
            name="preferredDate"
            type="date"
            value={values.preferredDate}
            onChange={handleChange}
            error={errors.preferredDate}
            submitted={submitted}
          />
          <FormField
            label="City"
            name="city"
            value={values.city}
            onChange={handleChange}
            error={errors.city}
            submitted={submitted}
            placeholder="Bengaluru"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Notes
          </label>
          <textarea
            name="notes"
            value={values.notes}
            onChange={handleChange}
            rows="4"
            placeholder="Tell us your preferred time slot or any other preferences"
            className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-accent/60"
          />
        </div>

        {successMessage && (
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
            {successMessage}
          </div>
        )}

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-amber-300"
        >
          Confirm Test Drive
        </button>
      </form>
    </div>
  );
}

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  submitted,
  placeholder,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-200">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-2xl border bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition ${
          error && submitted
            ? "border-rose-500/60"
            : "border-white/10 focus:border-accent/60"
        }`}
      />
      {error && submitted ? (
        <p className="mt-2 text-xs text-rose-300">{error}</p>
      ) : null}
    </div>
  );
}

export default TestDriveForm;
