import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

export default function SectionTitle({ tag, title, subtitle, light = false }) {
  const [ref, isInView] = useInView();

  return (
    <motion.div
      ref={ref}
      className="text-center max-w-3xl mx-auto mb-14 lg:mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {tag && (
        <span
          className={`inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full ${
            light
              ? "glass-dark text-sand-200"
              : "bg-glass-blue-light text-industrial-500"
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-white" : "text-industrial-700"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed ${
            light ? "text-sand-200/80" : "text-industrial-400"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
