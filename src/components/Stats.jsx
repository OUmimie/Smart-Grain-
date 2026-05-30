import { motion } from "framer-motion";
import { FiThermometer, FiAward, FiPackage, FiLayers } from "react-icons/fi";
import { stats } from "../data/stats";
import AnimatedCounter from "./AnimatedCounter";
import { useInView } from "../hooks/useInView";

const iconMap = {
  temperature: FiThermometer,
  purity: FiAward,
  capacity: FiPackage,
  steps: FiLayers,
};

export default function Stats() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section className="relative -mt-20 z-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-5 lg:p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-glass-blue-light flex items-center justify-center">
                  <Icon className="w-5 h-5 text-industrial-500" />
                </div>
                <p className="font-display text-2xl lg:text-3xl font-bold text-industrial-700">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    inView={isInView}
                  />
                </p>
                <p className="text-sm text-industrial-400 mt-1">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
