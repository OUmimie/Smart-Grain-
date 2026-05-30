import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiArrowDown, FiPlay } from "react-icons/fi";
import { images } from "../data/images";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Image de fond plein écran */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images.homeBackground})` }}
          role="img"
          aria-label="Fond industriel — transformation du sable en verre"
        />
      </motion.div>

      {/* Overlay noir — lisibilité texte & menu */}
      <div className="absolute inset-0 z-[1] bg-black/55" aria-hidden="true" />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/75 via-black/50 to-black/40"
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16"
        style={{ opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <span className="inline-block glass-dark text-sand-100 text-xs sm:text-sm font-medium tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Projet industriel innovant
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          Transformation du
          <br />
          <span className="bg-gradient-to-r from-sand-200 via-glass-blue to-sand-100 bg-clip-text text-transparent">
            Sable en Verre
          </span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-sand-100/95 text-lg sm:text-xl leading-relaxed mb-10 drop-shadow-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          De la matière première à l&apos;excellence verrière — découvrez un procédé
          industriel complet qui valorise les ressources locales en produits de haute
          qualité.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <button type="button" onClick={() => scrollTo("#processus")} className="btn-primary">
            Découvrir le processus
          </button>
          <button type="button" onClick={() => scrollTo("#contact")} className="btn-secondary">
            Nous contacter
          </button>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2 }}
        >
          <button
            type="button"
            onClick={() => scrollTo("#apropos")}
            className="glass-dark rounded-full p-3 text-sand-100 hover:bg-white/10 transition-colors animate-bounce"
            aria-label="Défiler vers le bas"
          >
            <FiArrowDown size={24} />
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-3 glass-dark rounded-2xl px-4 py-3 cursor-pointer group"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3 }}
        whileHover={{ scale: 1.02 }}
        onClick={() => scrollTo("#galerie")}
      >
        <div className="w-10 h-10 rounded-full bg-industrial-600 flex items-center justify-center group-hover:bg-glass-blue transition-colors">
          <FiPlay className="text-white ml-0.5" size={16} />
        </div>
        <div className="text-left">
          <p className="text-xs text-sand-200/70">Voir la galerie</p>
          <p className="text-sm font-medium text-white">Visite virtuelle</p>
        </div>
      </motion.div>
    </section>
  );
}
