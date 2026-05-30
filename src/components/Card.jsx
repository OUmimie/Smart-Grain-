import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

export default function Card({
  icon: Icon,
  title,
  description,
  index = 0,
  className = "",
  children,
}) {
  const [ref, isInView] = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`glass rounded-2xl p-6 lg:p-8 shadow-lg shadow-industrial-500/5 hover:shadow-xl hover:shadow-industrial-500/10 transition-shadow duration-300 ${className}`}
    >
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-industrial-500 to-industrial-600 flex items-center justify-center mb-5">
          <Icon className="w-6 h-6 text-sand-100" />
        </div>
      )}
      {title && (
        <h3 className="font-display text-xl font-semibold text-industrial-700 mb-3">
          {title}
        </h3>
      )}
      {description && (
        <p className="text-industrial-400 leading-relaxed">{description}</p>
      )}
      {children}
    </motion.div>
  );
}
