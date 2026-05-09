"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function ContactForm() {
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(formData: FormData) {
    const next: Record<string, string> = {};
    const parent = String(formData.get("parentName") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const child = String(formData.get("childName") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!parent) next.parentName = "Please enter parent name.";
    if (!phone) next.phone = "Please enter phone number.";
    if (!child) next.childName = "Please enter child name.";
    if (!message) next.message = "Please enter a short message.";
    return next;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const next = validate(formData);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setStatus("sent");
    e.currentTarget.reset();
  }

  const fieldClass =
    "mt-1 w-full rounded-2xl border border-sky-100 bg-white px-4 py-3 text-sm text-neutral-900 shadow-inner outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200";

  return (
    <motion.form
      onSubmit={onSubmit}
      className="rounded-3xl border border-sky-100 bg-white/95 p-6 shadow-card backdrop-blur-sm sm:p-8"
      initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="parentName" className="text-sm font-semibold text-neutral-800">
            Parent Name
          </label>
          <input id="parentName" name="parentName" className={fieldClass} autoComplete="name" />
          {errors.parentName ? (
            <p className="mt-1 text-xs font-medium text-red-600">{errors.parentName}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-neutral-800">
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" className={fieldClass} autoComplete="tel" />
          {errors.phone ? (
            <p className="mt-1 text-xs font-medium text-red-600">{errors.phone}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="childName" className="text-sm font-semibold text-neutral-800">
            Child Name
          </label>
          <input id="childName" name="childName" className={fieldClass} />
          {errors.childName ? (
            <p className="mt-1 text-xs font-medium text-red-600">{errors.childName}</p>
          ) : null}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-neutral-800">
            Message
          </label>
          <textarea id="message" name="message" rows={4} className={fieldClass} />
          {errors.message ? (
            <p className="mt-1 text-xs font-medium text-red-600">{errors.message}</p>
          ) : null}
        </div>
      </div>

      <p className="mt-3 text-xs text-neutral-500">
        This form is ready for your future admissions workflow — submissions are not sent online yet.
      </p>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-neutral-800 sm:w-auto"
      >
        Send message
      </button>

      {status === "sent" ? (
        <p className="mt-4 rounded-2xl bg-accent-mint/50 px-4 py-3 text-sm font-semibold text-emerald-900 ring-1 ring-emerald-100">
          Thank you! Your message is noted — our team will reach out when contact details are live.
        </p>
      ) : null}
    </motion.form>
  );
}
