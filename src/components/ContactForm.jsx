import { useState } from "react";
import { useForm, validateEmail } from "../hooks/useForm";

function ContactForm() {
  const [successMessage, setSuccessMessage] = useState("");

  const { values, errors, submitted, handleChange, handleSubmit, resetForm } =
    useForm(
      {
        fullName: "",
        email: "",
        subject: "",
        message: "",
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

        if (!formValues.subject.trim()) {
          validationErrors.subject = "Subject is required.";
        }

        if (!formValues.message.trim()) {
          validationErrors.message = "Message is required.";
        }

        return validationErrors;
      }
    );

  const onSubmit = () => {
    setSuccessMessage(
      "Your message has been captured in this demo interface. A real backend can be connected later."
    );
    resetForm();
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-5">
        <div className="glass-panel p-8">
          <p className="text-xs uppercase tracking-[0.35em] text-accent">
            Contact Veltrix
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white">
            Start the conversation
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Reach our product specialists for ownership queries, vehicle
            information, or showroom visits.
          </p>
        </div>

        <div className="glass-panel p-8">
          <div className="space-y-5 text-sm text-slate-300">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Email
              </p>
              <p className="mt-2 text-lg text-white">hello@veltrixmotors.com</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Phone
              </p>
              <p className="mt-2 text-lg text-white">+91 98765 43210</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Experience Center
              </p>
              <p className="mt-2 text-lg text-white">
                Innovation District, Bengaluru
              </p>
            </div>
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
        </div>

        <FormField
          label="Subject"
          name="subject"
          value={values.subject}
          onChange={handleChange}
          error={errors.subject}
          submitted={submitted}
          placeholder="Product inquiry"
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-200">
            Message
          </label>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            rows="6"
            placeholder="Tell us how we can help"
            className={`w-full rounded-2xl border bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition ${
              errors.message && submitted
                ? "border-rose-500/60"
                : "border-white/10 focus:border-accent/60"
            }`}
          />
          {errors.message && submitted ? (
            <p className="mt-2 text-xs text-rose-300">{errors.message}</p>
          ) : null}
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
          Send Message
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

export default ContactForm;
