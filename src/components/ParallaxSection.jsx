import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "../data/images";

export default function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <section ref={ref} className="relative h-64 lg:h-80 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
        <img
          src={images.parallax}
          alt="Verre industriel"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-industrial-700/60 flex items-center justify-center"
      >
        <div className="text-center px-4">
          <p className="font-display text-2xl lg:text-4xl font-bold text-white mb-2">
            L&apos;excellence verrière, made in local
          </p>
          <p className="text-sand-200/80 text-sm lg:text-base max-w-xl mx-auto">
            Un savoir-faire industriel au service de l&apos;innovation et du développement durable
          </p>
        </div>
      </motion.div>
    </section>
  );
}
