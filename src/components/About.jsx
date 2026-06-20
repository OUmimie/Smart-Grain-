import { motion } from "framer-motion";
import { aboutCards } from "../data/about";
import { images } from "../data/images";
import { company } from "../data/company";
import SectionTitle from "./SectionTitle";
import Card from "./Card";
import { useInView } from "../hooks/useInView";

export default function About() {
  const [ref, isInView] = useInView();

  return (
    <section id="apropos" className="section-padding relative" style={{background: 'rgba(14,31,82,0.45)'}}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          tag="À propos"
          title="Un projet au service de l'industrie"
          subtitle="Notre initiative combine expertise technique, innovation locale et vision durable pour transformer une ressource naturelle en matériau d'exception."
        />

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {aboutCards.map((card, index) => (
            <Card
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 lg:mt-16 glass rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex-1">
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Une chaîne de valeur intégrée
            </h3>
            <p className="text-blue-200/80 leading-relaxed mb-4">
              De l&apos;extraction minière à la livraison des produits finis, chaque maillon
              de notre chaîne est optimisé pour la performance, la traçabilité et le
              respect de l&apos;environnement.
            </p>
            <ul className="space-y-2 text-blue-100/90">
              {[
                "Certification ISO en cours",
                "Réduction de 30 % des émissions CO₂",
                "150 emplois directs prévus",
                "Partenariats avec universités locales",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full">
            <video
              src="/demot.mp4"
              className="rounded-2xl w-full h-64 lg:h-80 object-cover shadow-lg"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
