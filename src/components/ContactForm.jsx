import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageSquare, FiTag } from "react-icons/fi";
import toast from "react-hot-toast";
import SectionTitle from "./SectionTitle";
import { useInView } from "../hooks/useInView";
import { company } from "../data/company";

const initialForm = { name: "", email: "", subject: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = "Le nom doit contenir au moins 2 caractères.";
  }
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Veuillez entrer une adresse email valide.";
  }
  if (!form.subject.trim()) {
    errors.subject = "Le sujet est requis.";
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "Le message doit contenir au moins 10 caractères.";
  }
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, isInView] = useInView();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setForm(initialForm);
    toast.success("Message envoyé avec succès ! Nous vous répondrons sous 48h.", {
      duration: 4000,
      style: {
        background: "#0e1f52",
        color: "#dce8ff",
        borderRadius: "12px",
        border: "1px solid rgba(91,184,245,0.3)",
      },
    });
  };

  const fields = [
    { name: "name", label: "Nom complet", type: "text", icon: FiUser, placeholder: "Jean Dupont" },
    { name: "email", label: "Email", type: "email", icon: FiMail, placeholder: "jean@exemple.com" },
    { name: "subject", label: "Sujet", type: "text", icon: FiTag, placeholder: "Demande de partenariat" },
  ];

  return (
    <section id="contact" className="section-padding" style={{background: 'rgba(14,31,82,0.55)'}}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          tag="Contact"
          title="Contactez notre équipe"
          subtitle="Une question sur le projet, un partenariat ou une visite d'usine ? Écrivez-nous."
        />

        <motion.div
          ref={ref}
          className="grid lg:grid-cols-5 gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-white mb-4">
                Coordonnées
              </h3>
              <ul className="space-y-3 text-blue-200/80 text-sm">
                <li>
                  <strong className="text-sky-300">Adresse :</strong>
                  <br />
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                </li>
                <li>
                  <strong className="text-sky-300">Téléphone :</strong>
                  <br />
                  {company.phones.map((phone, i) => (
                    <span key={phone.href}>
                      {i > 0 && " / "}
                      <a
                        href={phone.href}
                        className="hover:text-white transition-colors"
                      >
                        {phone.label}
                      </a>
                    </span>
                  ))}
                </li>
                <li>
                  <strong className="text-sky-300">Email :</strong>
                  <br />
                  <a
                    href={`mailto:${company.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {company.email}
                  </a>
                </li>
                <li>
                  <strong className="text-sky-300">Site web :</strong>
                  <br />
                  <a
                    href={company.website.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {company.website.label}
                  </a>
                </li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold text-white mb-2">
                Horaires
              </h3>
              <p className="text-blue-200/75 text-sm">
                Lun — Ven : 8h00 — 18h00
                <br />
                Sam : 9h00 — 12h00 (sur rendez-vous)
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-3xl p-6 lg:p-10 space-y-5"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {fields.map((field) => {
                const Icon = field.icon;
                return (
                  <div
                    key={field.name}
                    className={field.name === "subject" ? "sm:col-span-2" : ""}
                  >
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium text-blue-200 mb-2"
                    >
                      {field.label}
                    </label>
                    <div className="relative">
                      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-400/70 w-4 h-4" />
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className={`w-full pl-11 pr-4 py-3 rounded-xl border bg-white/5 text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-sky-400/50 transition-all ${
                          errors[field.name]
                            ? "border-red-400"
                            : "border-sky-500/25"
                        }`}
                        aria-invalid={!!errors[field.name]}
                        aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                      />
                    </div>
                    {errors[field.name] && (
                      <p id={`${field.name}-error`} className="mt-1 text-xs text-red-500">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                Message
              </label>
              <div className="relative">
                <FiMessageSquare className="absolute left-4 top-4 text-sky-400/70 w-4 h-4" />
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre demande..."
                  className={`w-full pl-11 pr-4 py-3 rounded-xl border bg-white/5 text-white placeholder-blue-300/40 focus:outline-none focus:ring-2 focus:ring-sky-400/50 resize-none transition-all ${
                    errors.message ? "border-red-400" : "border-sky-500/25"
                  }`}
                  aria-invalid={!!errors.message}
                />
              </div>
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full sm:w-auto disabled:opacity-60"
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Envoi en cours...
                </span>
              ) : (
                <>
                  <FiSend size={18} />
                  Envoyer le message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
