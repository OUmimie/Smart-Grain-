import { motion } from "framer-motion";
import { processSteps } from "../data/process";
import SectionTitle from "./SectionTitle";
import { useInView } from "../hooks/useInView";

function TimelineStep({ step, index }) {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7 }}
    >
      <div className="flex-1 w-full">
        <div className="relative overflow-hidden rounded-2xl shadow-xl group">
          <img
            src={step.image}
            alt={step.alt}
            className="w-full h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-700/40 to-transparent" />
          <span className="absolute top-4 left-4 w-12 h-12 rounded-xl glass flex items-center justify-center font-display font-bold text-industrial-700 text-lg">
            {String(step.id).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div className="hidden lg:flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-glass-blue ring-4 ring-glass-blue-light" />
        {index < processSteps.length - 1 && (
          <div className="w-0.5 h-32 bg-gradient-to-b from-glass-blue to-sand-300" />
        )}
      </div>

      <div className="flex-1 w-full">
        <div className="glass rounded-2xl p-6 lg:p-8">
          <span className="text-glass-blue font-semibold text-sm">
            Étape {step.id}
          </span>
          <h3 className="font-display text-2xl font-bold text-industrial-700 mt-2 mb-4">
            {step.title}
          </h3>
          <p className="text-industrial-400 leading-relaxed">{step.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section id="processus" className="section-padding bg-gradient-to-b from-sand-100 to-sand-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          tag="Processus"
          title="Processus de Transformation"
          subtitle="Cinq étapes clés transforment le sable brut en verre premium, avec un contrôle qualité rigoureux à chaque phase."
        />

        <div className="space-y-16 lg:space-y-24">
          {processSteps.map((step, index) => (
            <TimelineStep key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
