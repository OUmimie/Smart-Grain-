import { motion } from "framer-motion";
import { applications } from "../data/applications";
import SectionTitle from "./SectionTitle";
import { useInView } from "../hooks/useInView";

export default function Applications() {
  const [ref, isInView] = useInView();

  return (
    <section id="applications" className="section-padding" style={{background: 'rgba(14,31,82,0.40)'}}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          tag="Applications"
          title="Applications du Verre"
          subtitle="Le verre produit par notre procédé répond aux exigences des secteurs les plus exigeants, de la construction à l'énergie renouvelable."
        />

        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-2xl glass p-6 lg:p-8 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {app.title}
                  </h3>
                  <p className="text-blue-200/75 leading-relaxed text-sm">
                    {app.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
